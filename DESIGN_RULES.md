# Homes for Good Design Rules

## Brand Feeling

The design should feel:

- Hopeful
- Trustworthy
- Clean
- Civic-minded
- Modern
- Student-led but professional

Avoid making the site look dark, depressing, political, aggressive, or overly emotional.

The emotional tone should focus on:
- Community improvement
- Stability
- Compassion
- Action
- Hope
- Responsibility

## Brand Name

Homes for Good

## Visual Identity

The website should visually communicate:
- Community
- Stability
- Safety
- Growth
- Forward progress
- Human dignity

The visual direction should resemble a modern nonprofit or civic initiative instead of a political campaign website.

Avoid:
- Harsh red warning colors
- Alarmist design
- Heavy drop shadows everywhere
- Cluttered layouts
- News-style layouts
- Busy backgrounds
- Excessive gradients
- Corporate-looking dashboards on the public homepage

## Color Palette

Use warm civic-inspired colors.

Primary green should communicate growth and stability.

Warm accent colors should create emotional warmth without becoming playful or childish.

### Color Tokens

Use or adapt these CSS variables:

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

      --radius-xl: 28px;
      --radius-lg: 22px;
      --radius-md: 16px;
      --radius-sm: 12px;

      --transition-base: 180ms ease;
    }

## Typography

Use clean modern system fonts.

Preferred stack:

    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;

## Typography Hierarchy

### Hero Headline

- Large
- Bold
- High contrast
- Easy to scan quickly

Recommended:
- 56px–72px desktop
- 40px–52px tablet
- 34px–42px mobile

### Body Text

- Comfortable reading width
- 16px minimum
- 1.5+ line height

### Small Labels

Use muted text color for:
- badges
- helper text
- analytics notes
- project attribution

## Layout System

### Desktop Layout

Goal:
Fit the main experience mostly above the fold.

Recommended structure:

- Full viewport height section
- Centered content
- Max width around 1180px–1280px
- Two-column hero layout

Left column:
- Eyebrow
- Headline
- Description
- CTA buttons
- Student attribution

Right column:
- Signature support card
- Impact cards
- Progress section

### Mobile Layout

Use:
- Single-column stacking
- Large touch targets
- Reduced spacing where needed
- Clear CTA visibility without excessive scrolling

The CTA button should remain visible quickly after page load.

## Header Design

The header should be:
- Minimal
- Lightweight
- Clean
- Sticky only if it improves UX

Include:
- Site name
- Small project badge
- CTA button

Avoid oversized navbars.

Do not add unnecessary navigation links.

## Hero Section Design

The hero is the most important section.

It should:
- Immediately explain the mission
- Feel modern and polished
- Use spacing generously
- Maintain strong readability

### Background Treatment

Use subtle:
- radial glows
- soft gradients
- layered blur effects

Avoid:
- noisy patterns
- stock photo backgrounds
- overly dark overlays

### Recommended Hero Styling

Use:
- soft green radial glow
- white or soft-surface cards
- large headline
- strong spacing rhythm
- subtle shadow depth

## Buttons

### Primary CTA

Purpose:
Drive petition clicks.

Style:
- Green background
- White text
- Rounded pill shape
- Medium shadow
- Strong hover feedback

Hover behavior:
- Slight lift
- Slight darkening
- Fast smooth transition

### Secondary CTA

Style:
- White or transparent background
- Green border
- Green text
- Softer emphasis than primary CTA

## Cards

Cards should feel:
- Soft
- Friendly
- Professional
- Elevated slightly from background

Use:
- white or soft green surfaces
- rounded corners
- subtle border
- soft shadows
- generous internal spacing

Avoid:
- sharp corners
- heavy neumorphism
- excessive blur
- dark cards on the homepage

## Signature Progress Section

This section should feel motivating without exaggeration.

### Public Metric Wording

Use:

- people clicked to sign
- petition visits from this site
- community support activity

Avoid:
- verified signatures
- official signers
- guaranteed signatures

### Progress Bar

Style:
- Rounded
- Clean
- Thin to medium height
- Soft background
- Green fill

Show:
- Current clicks
- Goal count
- Small support explanation

## Impact Cards

Each impact card should:
- Use concise copy
- Include simple visual hierarchy
- Possibly include subtle iconography

Recommended icons:
- House
- Heart
- Briefcase
- Community/people

Avoid:
- overly detailed illustrations
- cartoon visuals
- emotionally manipulative imagery

## Footer Design

Footer should remain simple.

Include:
- Project attribution
- Location
- Petition link

Do not:
- overload footer with navigation
- include hidden admin links
- add fake organizational information

## Animation Rules

Animations should be:
- Subtle
- Fast
- Purposeful

Recommended:
- Fade-in
- Slight translate
- Hover lift
- Progress transitions

Avoid:
- Parallax
- Scroll hijacking
- Long animation delays
- Bounce animations
- Excessive motion

## Accessibility Rules

The site must:
- Meet strong color contrast standards
- Use semantic HTML
- Support keyboard navigation
- Have visible focus states
- Use accessible button labels
- Use proper heading hierarchy

Do not:
- use clickable divs
- rely on hover-only interactions
- use tiny text
- remove outlines without replacement

## Analytics Dashboard Design

The hidden `/analytics` page should feel:
- Clean
- Utility-focused
- Professional
- Lightweight

Use:
- simple cards
- clean tables
- muted surfaces
- compact spacing

The analytics page should visually relate to the public homepage but feel more functional.

## Performance Rules

Prioritize:
- Fast initial load
- Minimal dependencies
- Optimized assets
- Small bundle size

Avoid:
- giant UI libraries unless necessary
- large video backgrounds
- unnecessary animations
- oversized images

## Mobile UX Rules

On mobile:
- Keep spacing balanced
- Ensure buttons are thumb-friendly
- Avoid cramped cards
- Maintain strong readability

Recommended:
- 44px+ touch targets
- 16px+ text
- Clear spacing between sections

## Overall UX Goals

The visitor should feel:

1. This project is real and sincere.
2. The issue matters.
3. Supporting the petition is simple.
4. The site feels trustworthy.
5. The project was thoughtfully made.

The design should inspire action through clarity and professionalism instead of pressure or guilt.