# LMU ITS Event Support Recruitment Site Design

## Intent

Create a persuasive, student-focused one-page recruitment site for LMU ITS Event Support. The experience should present the role as a path to practical technology experience, campus relationships, and professional growth rather than as a conventional job listing.

## Goals

- Lead with the approved message: “Learn the Tech. Meet the People. Make the Moment Happen.”
- Explain the team, event workflow, skills gained, connections, and growth path.
- Make the page useful and readable on phones, tablets, and desktop screens.
- Provide anchored navigation, accessible interactions, FAQs, and a prominent application call to action.
- Keep all runtime behavior entirely in the browser.

## Non-goals and safeguards

- No backend, database, authentication, form processing, server framework, or external app integration.
- Do not invent student testimonials, job pay, weekly hours, opening dates, or guaranteed camera/directing opportunities.
- Do not present reference imagery as photographs of the actual Event Support team.
- Do not claim official publication at `lmu.edu`; this first build is a private prototype for review.

## Visual direction

Use LMU Crimson `#AB0C2F`, LMU Blue `#0076A5`, white, warm off-white, and restrained gray. Use Arial for interface and body copy and Georgia for selected editorial moments. The page should feel energetic and precise: bold editorial type, strong spacing, numbered sections, technical line motifs, and photo-ready media frames that are clearly labeled as placeholders.

## Structure

1. Sticky brand/navigation bar with accessible mobile menu.
2. Hero with concise recruitment message, two actions, and an event-control visual composition.
3. Who We Are introduction and concrete team principles.
4. Before/During/After assignment workflow.
5. Four-card “What You’ll Gain” section.
6. Dedicated connections section.
7. Four-stage growth path with advanced production caveat.
8. Behind-the-scenes “day in the life” timeline and media placeholders.
9. Recruitment details and accessible FAQ accordion.
10. Final application CTA and simple LMU ITS footer.

## Interaction and accessibility

Use semantic landmarks and heading order, visible keyboard focus, a skip link, reduced-motion support, and buttons with appropriate expanded-state attributes. JavaScript handles only the mobile menu, FAQ accordion, current-year text, and progressive reveal effects; the full content remains readable when scripts are unavailable.

## Approaches considered

- Buildless static HTML/CSS/JS: selected because it fully satisfies the frontend-only constraint, has no dependency or build overhead, and is easiest to hand off to LMU’s CMS.
- Component framework with static export: rejected for this version because the one-page experience does not justify framework complexity.
- Server-rendered microsite: rejected because it conflicts with the frontend-only requirement and adds no value for the requested interactions.

## Open content dependency

The “Join Our Team” buttons link to the recruitment section and display a clearly labeled “Application link coming soon” state until LMU provides the official application URL. Authentic team photography can replace the labeled editorial placeholders without changing the layout.
