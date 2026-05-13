# Data Collection & Analytics Spec

## Goal

Use Supabase to collect simple, privacy-conscious analytics.

The public page should display how many people clicked the petition CTA.

The hidden admin page should show basic analytics.

## Main Public Metric

Display:

{count} people clicked to sign

This count is based on the number of petition_cta_click events stored in Supabase.

This does not mean confirmed Change.org signatures.

## Privacy Rules

Do not collect:

- Names
- Emails
- Phone numbers
- Street addresses
- Exact location
- Petition signature data
- Anything typed into Change.org

Allowed:

- Event name
- Page path
- Timestamp
- Referrer
- User agent
- Device type
- Anonymous session ID
- UTM params

Use a random anonymous session ID stored in localStorage.

Do not fingerprint visitors aggressively.

## Events To Track

### page_view

Tracked when someone visits the homepage.

### petition_cta_click

Tracked when someone clicks a petition CTA.

### learn_more_click

Tracked when someone clicks the secondary CTA.

## Supabase Table

Create this table:

```sql
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