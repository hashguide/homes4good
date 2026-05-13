CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  event_name TEXT NOT NULL,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  session_id TEXT,
  device_type TEXT,
  metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at
ON analytics_events (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name
ON analytics_events (event_name);

CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id
ON analytics_events (session_id);

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public analytics inserts"
ON analytics_events
FOR INSERT
TO anon
WITH CHECK (
  event_name IN ('page_view', 'petition_cta_click', 'learn_more_click')
);

CREATE TABLE IF NOT EXISTS public_stats (
  id TEXT PRIMARY KEY DEFAULT 'main',
  petition_clicks INTEGER NOT NULL DEFAULT 0,
  page_views INTEGER NOT NULL DEFAULT 0,
  learn_more_clicks INTEGER NOT NULL DEFAULT 0,
  click_goal INTEGER NOT NULL DEFAULT 250,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public_stats (id, petition_clicks, click_goal)
VALUES ('main', 0, 250)
ON CONFLICT (id) DO NOTHING;

-- ensure new columns exist for older installs
ALTER TABLE public_stats ADD COLUMN IF NOT EXISTS page_views INTEGER NOT NULL DEFAULT 0;
ALTER TABLE public_stats ADD COLUMN IF NOT EXISTS learn_more_clicks INTEGER NOT NULL DEFAULT 0;

ALTER TABLE public_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public stats read"
ON public_stats
FOR SELECT
TO anon
USING (id = 'main');

CREATE OR REPLACE FUNCTION increment_petition_clicks()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public_stats
  SET
    petition_clicks = petition_clicks + 1,
    updated_at = now()
  WHERE id = 'main';
END;
$$;

GRANT EXECUTE ON FUNCTION increment_petition_clicks() TO anon;

CREATE OR REPLACE FUNCTION increment_page_views()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public_stats
  SET
    page_views = page_views + 1,
    updated_at = now()
  WHERE id = 'main';
END;
$$;

GRANT EXECUTE ON FUNCTION increment_page_views() TO anon;

CREATE OR REPLACE FUNCTION increment_learn_more_clicks()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public_stats
  SET
    learn_more_clicks = learn_more_clicks + 1,
    updated_at = now()
  WHERE id = 'main';
END;
$$;

GRANT EXECUTE ON FUNCTION increment_learn_more_clicks() TO anon;