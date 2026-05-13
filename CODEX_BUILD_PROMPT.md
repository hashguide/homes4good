Build the complete website using these docs:

- PROJECT_SPEC.md
- DESIGN_RULES.md
- CONTENT_GUIDE.md
- DATA_COLLECTION_AND_ANALYTICS.md
- SUPABASE_SETUP.sql
- AGENTS.md

Use Vite + React + TypeScript + Tailwind CSS + Supabase.

Project:

Homes for Good is a student civics project by Jake Arsenault from Consentino Middle School in Haverhill, Massachusetts.

The website should encourage people to sign this Change.org petition:

https://c.org/ym4q6sfGGS

Main headline:

Helping people find stability helps the whole community.

Main CTA:

Sign the Petition

Important implementation rules:

- Do not create a fake petition form.
- Do not submit anything to Change.org.
- All petition CTAs open the official Change.org link.
- Track CTA clicks in Supabase.
- Display “X people clicked to sign.”
- Do not claim clicks are verified signatures.
- Use Supabase for analytics.
- Add hidden /analytics route.
- Do not link /analytics from public navigation.
- Protect /analytics with simple admin credentials from env vars.
- Use clean components.
- Make the site professional and responsive.
- Desktop should ideally fit above the fold.
- Mobile may scroll.
- No lorem ipsum.
- No unfinished placeholders.
- No fake data except safe fallback values when Supabase is unavailable.

Create all needed files and make the app run.