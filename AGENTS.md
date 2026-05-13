# Repository Guidelines

## Project Structure & Module Organization

This workspace contains a React + TypeScript + Vite app in `homes_for_good/`.

Application code lives in `homes_for_good/src/`.

Main files:

- `src/main.tsx`: Vite/React entry point
- `src/App.tsx`: root app component
- `src/App.css`: component-level/root app styles
- `src/index.css`: global styles
- `src/assets/`: imported static assets
- `public/`: public URL-addressable assets

Keep generated changes scoped to `homes_for_good/` unless repository-level documentation is requested.

Do not commit or edit generated build output in `dist/`.

## Build, Test, and Development Commands

Run commands from `homes_for_good/`.

- `npm install`: install dependencies from `package-lock.json`
- `npm run dev`: start the Vite development server with HMR
- `npm run build`: type-check with `tsc -b` and build production assets
- `npm run lint`: run ESLint across the project
- `npm run preview`: serve the production build locally for inspection

Before handing off changes, run:

    npm run lint
    npm run build

## Coding Style & Naming Conventions

Use:

- TypeScript
- React function components
- Two-space indentation
- Single quotes
- No semicolons
- Explicit imports

Naming:

- React components: `PascalCase`
- Hooks/state variables: `camelCase`
- CSS classes/IDs: descriptive, stable names

Prefer small, focused components.

Prefer component-specific CSS in colocated stylesheets when local scope makes sense.

Do not introduce unused dependencies.

Do not leave unused imports, dead code, placeholder text, or lorem ipsum.

## Project Mission

Build a polished one-page petition website for a student civics project.

The project is for:

- Student: Jake Arsenault
- School: Consentino Middle School
- Location: Haverhill, Massachusetts
- Site name: Homes for Good
- Petition URL: `https://c.org/ym4q6sfGGS`

The website should encourage people to support stronger homelessness outreach, affordable housing, mental health services, and job programs.

## Core User Goal

Visitors should understand within 10 seconds:

1. This is a student civics project.
2. The issue is homelessness.
3. The action is to sign the petition.
4. Clicking helps show community support.

## Public Site Requirements

Build a one-page landing page with:

- Header
- Hero section
- Petition CTA
- “People clicked to sign” metric
- Signature action card
- Impact cards
- Student project note
- Footer

The desktop layout should look polished above the fold when possible.

Mobile can scroll naturally.

## Official Petition CTA Rules

Do not build a fake petition form.

Do not try to submit signatures to Change.org.

Do not scrape Change.org.

All petition CTAs must open:

`https://c.org/ym4q6sfGGS`

Use:

`target="_blank"`
`rel="noopener noreferrer"`

## Required Public Copy

Hero eyebrow:

`A student-led civics project from Haverhill, MA`

Hero headline:

`Helping people find stability helps the whole community.`

Hero description:

`Homelessness affects more than housing. It impacts families, schools, public health, local resources, and neighborhood safety. This project asks local and Massachusetts leaders to support stronger outreach, mental health services, job programs, and affordable housing solutions.`

Primary CTA:

`Sign the Petition`

Secondary CTA:

`Why It Matters`

Small note:

`Created by Jake Arsenault for a Consentino Middle School civics project.`

## Impact Cards

Use these four cards:

### Housing

`Stable housing gives people a safer foundation to rebuild their lives.`

### Mental Health

`Support services can help people recover, stabilize, and reconnect.`

### Jobs & Skills

`Training and employment programs create a path toward independence.`

### Outreach

`Community outreach helps connect people with help before problems get worse.`

## Student Project Copy

Use this somewhere on the page:

`This project was created as part of a civics assignment at Consentino Middle School in Haverhill, Massachusetts. The goal is to collect community support and show local and state leaders that homelessness deserves serious attention and practical long-term solutions.`

## Analytics Requirements

Use Supabase to track simple, privacy-conscious analytics.

Track:

- `page_view`
- `petition_cta_click`
- `learn_more_click`

Display the public metric as:

`X people clicked to sign`

Do not call this number:

- verified signatures
- confirmed signatures
- official signatures
- people signed

Safe wording:

- people clicked to sign
- petition visits from this site
- community members sent to the petition

## Supabase Rules

Use browser-safe Supabase variables only:

`VITE_SUPABASE_URL=`
`VITE_SUPABASE_ANON_KEY=`

Do not expose a Supabase service role key in frontend code.

If Supabase is unavailable:

- The homepage must still load.
- The petition CTA must still work.
- The click count can show `0`, `Loading support count...`, or a graceful fallback.
- Public users should not see technical errors.

## Recommended Supabase Tables

Use:

- `analytics_events`
- `public_stats`

`analytics_events` stores event records.

`public_stats` stores the public “people clicked to sign” count.

The public page may read `public_stats`.

The public page must not read all `analytics_events`.

## Hidden Analytics Route

Create:

`/analytics`

Do not link to this route from the public UI.

The route should require simple admin login.

For this small school project, simple client-side credentials from env vars are acceptable:

`VITE_ADMIN_USERNAME=`
`VITE_ADMIN_PASSWORD=`

After login, show:

- Total page views
- People clicked to sign
- Learn more clicks
- Unique anonymous visitors
- CTA conversion rate
- Recent events table

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

Use a random anonymous session ID stored in `localStorage`.

Do not fingerprint visitors aggressively.

## Design Direction

The site should feel:

- Hopeful
- Modern
- Civic
- Clean
- Trustworthy
- Student-led but professional

Avoid:

- Sad stock imagery
- Political attacks
- Fake numbers
- Clutter
- Heavy animations
- Guilt-heavy copy

## Style Tokens

Use or adapt these tokens in CSS:

    :root {
      --color-bg: #f8faf7;
      --color-bg-soft: #eef6f1;
      --color-surface: #ffffff;
      --color-surface-soft: #f3f8f5;
      --color-primary: #256d4a;
      --color-primary-dark: #174832;
      --color-primary-light: #dff2e7;
      --color-accent: #f4a261;
      --color-accent-dark: #c86f2f;
      --color-accent-soft: #fff1e3;
      --color-blue: #315c80;
      --color-blue-soft: #e7f0f7;
      --color-text: #17211b;
      --color-text-muted: #5d6b63;
      --color-border: #d9e3dd;
      --shadow-soft: 0 20px 60px rgba(23, 72, 50, 0.12);
      --shadow-card: 0 12px 35px rgba(23, 72, 50, 0.1);
    }

## Accessibility Rules

Use:

- Semantic HTML
- Real buttons and links
- Keyboard focus states
- Good color contrast
- Responsive layout
- Clear link text
- Accessible labels where needed

Do not use clickable `div` elements for navigation or CTA actions.

## Code Quality Rules

Create or maintain one source of truth for shared content.

Recommended file:

`src/content.ts`

Include:

- projectName
- studentName
- schoolName
- city
- state
- petitionUrl
- clickGoal

Keep analytics code in:

`src/lib/analytics.ts`

Keep Supabase client code in:

`src/lib/supabase.ts`

Avoid duplicating petition URLs, school names, or metric labels across components.

## Testing Guidelines

No automated test framework is configured yet.

Validate changes with:

    npm run lint
    npm run build
    npm run dev

Manual browser checks:

- Homepage loads.
- CTA opens Change.org.
- Mobile layout works.
- Desktop layout looks polished.
- `/analytics` is hidden from navigation.
- `/analytics` login works.
- Analytics failures do not break the public page.

When adding tests later, colocate them near the code they cover using names like:

`Component.test.tsx`

Add a corresponding `npm test` script.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects:

- `Add homepage hero`
- `Add petition analytics`
- `Fix mobile layout`

Pull requests should include:

- Brief summary
- Commands run
- Screenshots or screen recordings for UI changes
- Any new configuration or dependency notes

## Done Criteria

The work is complete when:

- `npm install` works.
- `npm run dev` works.
- `npm run lint` passes.
- `npm run build` passes.
- Homepage displays polished final content.
- Petition CTA opens `https://c.org/ym4q6sfGGS`.
- CTA clicks are tracked.
- Public page displays “X people clicked to sign.”
- `/analytics` exists.
- `/analytics` is hidden from public navigation.
- `/analytics` requires login.
- Dashboard displays analytics summary.
- No TypeScript errors.
- No placeholder content.
- No secrets are exposed to frontend code except intended `VITE_` variables.