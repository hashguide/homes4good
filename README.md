# Homes for Hope

Homes for Hope is a student-led civics project website created for a school assignment at Consentino Middle School in Haverhill, Massachusetts.

The website encourages community members to support a Change.org petition asking local and Massachusetts leaders to expand homelessness outreach, affordable housing support, mental health services, and job programs.

## Project Goals

- Raise awareness about homelessness and community impact
- Encourage visitors to support the petition
- Display how many people clicked to sign
- Provide a clean, modern, and trustworthy experience
- Track simple anonymous analytics with Supabase

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Supabase

## Main Features

- Modern one-page landing page
- CTA linking to the official Change.org petition
- Public support counter:
  - “X people clicked to sign”
- Privacy-conscious analytics
- Hidden `/analytics` admin dashboard
- Responsive design for desktop and mobile

## Official Petition

`https://c.org/ym4q6sfGGS`

## Project Structure

    homes_for_good/
      src/
        components/
        pages/
        lib/
        assets/
      public/
      api/
      SUPABASE_SETUP.sql

## Local Development

Install dependencies:

    npm install

Start development server:

    npm run dev

Build production version:

    npm run build

Run linting:

    npm run lint

Preview production build locally:

    npm run preview

## Environment Variables

Create a `.env` file in the project root.

Frontend variables:

    VITE_SUPABASE_URL=
    VITE_SUPABASE_ANON_KEY=

Server-only variables:

    ADMIN_USERNAME=
    ADMIN_PASSWORD=
    ADMIN_SESSION_SECRET=
    SUPABASE_SERVICE_ROLE_KEY=

Important:

- Never expose `SUPABASE_SERVICE_ROLE_KEY` to frontend code.
- Never use `VITE_ADMIN_USERNAME` or `VITE_ADMIN_PASSWORD`.
- Any variable prefixed with `VITE_` becomes public in the browser bundle.

## Supabase Setup

1. Create a new Supabase project.
2. Open the SQL Editor.
3. Run:

    SUPABASE_SETUP.sql

This creates:

- `analytics_events`
- `public_stats`
- row-level security policies
- analytics helper functions

## Analytics

The app tracks:

- `page_view`
- `petition_cta_click`
- `learn_more_click`

The public website displays:

    X people clicked to sign

This metric represents CTA clicks from the website, not confirmed Change.org signatures.

## Privacy

The site does NOT collect:

- Names
- Emails
- Addresses
- Phone numbers
- Petition signatures
- Anything typed into Change.org

Tracked analytics data includes:

- Page path
- Referrer
- Device type
- Anonymous session ID
- Browser user agent

## Admin Dashboard

Hidden route:

    /analytics

The dashboard is not linked publicly.

Admin authentication should be handled through backend/serverless API routes.

Recommended API routes:

    /api/admin/login
    /api/admin/logout
    /api/admin/me
    /api/admin/analytics/summary
    /api/admin/analytics/events

## Deployment

Recommended hosting:

- Vercel (frontend + serverless API routes)
- Supabase (database and analytics)

### Vercel Setup

1. Push repository to GitHub
2. Import project into Vercel
3. Set root directory:

    homes_for_good

4. Add environment variables in Vercel project settings
5. Deploy

## Design Goals

The site should feel:

- Hopeful
- Modern
- Civic-minded
- Clean
- Trustworthy

Avoid:

- Fake signature counts
- Political attacks
- Heavy animations
- Guilt-heavy messaging
- Dark or depressing visuals

## Accessibility

The site should use:

- Semantic HTML
- Keyboard-accessible interactions
- Accessible contrast
- Responsive layouts
- Proper heading hierarchy

## Author

Jake Arsenault  
Consentino Middle School  
Haverhill, Massachusetts