# Homes for Good Petition Website Spec

## Project Summary

Build a polished one-page website for a student civics project by Jake Arsenault from Consentino Middle School in Haverhill, Massachusetts.

The site encourages visitors to support a Change.org petition asking local and Massachusetts leaders to expand programs that help address homelessness through outreach, affordable housing, mental health support, and job training.

The site should not collect petition signatures directly. It should send visitors to the official Change.org petition.

Official petition URL:

https://c.org/ym4q6sfGGS

## Main Goal

Get visitors to click the petition CTA and sign on Change.org.

## Core Message

Helping people find stability helps the whole community.

## Primary CTA

Sign the Petition

## Secondary CTA

Why It Matters

## Key Feature

Display how many visitors clicked to sign.

Example:

127 people clicked to sign

This number comes from Supabase analytics events, not Change.org signatures.

## Important Rule

Do not scrape Change.org for signature counts.

Do not claim CTA clicks are completed signatures.

Use wording like:

- “people clicked to sign”
- “petition visits from this site”
- “community members sent to the petition”

Do not use wording like:

- “verified signatures”
- “people signed”
- “official signature count”

unless manually updated by an admin later.

## Target Audience

- Local Haverhill residents
- Parents
- Teachers
- Students
- Community members
- Local officials
- Massachusetts residents

## Page Structure

### Header

Content:
- Logo text: Homes for Good
- Badge: Consentino Middle School Civics Project
- Button: Sign Petition

The header should be clean, sticky if useful, and not take up much space.

### Hero Section

The hero should be modern, professional, and fit above the fold on desktop.

Hero content:

Eyebrow:
A student-led civics project from Haverhill, MA

Headline:
Helping people find stability helps the whole community.

Description:
Homelessness affects more than housing. It impacts families, schools, public health, local resources, and neighborhood safety. This project asks local and Massachusetts leaders to support stronger outreach, mental health services, job programs, and affordable housing solutions.

Primary CTA:
Sign the Petition

Secondary CTA:
Why It Matters

Support note:
Created by Jake Arsenault for a Consentino Middle School civics project.

### Signature Action Card

Show:
- “People clicked to sign”
- Count from Supabase analytics
- Goal count
- Progress bar based on clicks
- CTA button

Example:

127 people clicked to sign

Goal: 250 petition visits

Button:
Add Your Support

Small note:
You’ll be taken to the official Change.org petition page.

### Impact Cards

Show four cards:

1. Housing
Stable housing gives people a safer foundation to rebuild their lives.

2. Mental Health
Support services can help people recover, stabilize, and reconnect.

3. Jobs & Skills
Training and employment programs create a path toward independence.

4. Outreach
Community outreach helps connect people with help before problems get worse.

### Student Project Section

Include:

This project was created as part of a civics assignment at Consentino Middle School in Haverhill, Massachusetts. The goal is to collect community support and show local and state leaders that homelessness deserves serious attention and practical long-term solutions.

### Footer

Content:
Created for a student civics project in Haverhill, Massachusetts.

Include petition link.

Do not include analytics link in the footer or navigation.

## Routes

### Public Routes

/

Main petition landing page.

### Hidden Admin Route

/analytics

This route is not linked publicly.

It requires simple admin login.

## Recommended Stack

Use:

- Vite
- React
- TypeScript
- Tailwind CSS
- Supabase

## Required Files

- package.json
- index.html
- src/main.tsx
- src/App.tsx
- src/content.ts
- src/styles.css
- src/lib/supabase.ts
- src/lib/analytics.ts
- src/components/Header.tsx
- src/components/Hero.tsx
- src/components/SignatureCard.tsx
- src/components/ImpactCards.tsx
- src/components/Footer.tsx
- src/pages/HomePage.tsx
- src/pages/AnalyticsPage.tsx

## Data Source Rules

Store shared site content in one file:

src/content.ts

Include:
- projectName
- studentName
- schoolName
- city
- state
- petitionUrl
- clickGoal

Do not duplicate this data across components.

## Done Criteria

The project is complete when:

- The homepage looks polished.
- CTA opens the Change.org petition.
- CTA clicks are logged to Supabase.
- The public page displays how many people clicked to sign.
- The analytics route is hidden from navigation.
- The analytics route requires admin login.
- Public users cannot read private analytics data directly.
- The site is responsive.
- The site has no placeholder text.
- The app runs without TypeScript errors.