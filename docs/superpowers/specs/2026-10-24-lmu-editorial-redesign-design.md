# LMU Editorial Recruitment Redesign

## Intent

Rebuild the LMU ITS Event Support recruitment page as a polished, typography-led university experience. The current photograph-led masthead and accumulated CSS override layers make the page feel visually inconsistent. The redesign should feel professional, elegant, simple, and recognizably LMU while using no photography.

The primary audience is an LMU student deciding whether the Event Support role feels approachable, useful, and worth exploring. The page should make the opportunity understandable, credible, and easy to scan without implying that applications are currently open.

## Goals

- Remove the remote campus photograph and all raster imagery.
- Replace the stylesheet with one coherent, maintainable visual system rather than another override layer.
- Preserve the approved recruitment content, eligibility caveats, application-status disclosure, and FAQ answers.
- Preserve accessible anchor navigation, mobile menu behavior, FAQ disclosures, focus states, and reduced-motion support.
- Keep the implementation frontend-only: static HTML, CSS, local SVG, and vanilla JavaScript.
- Preserve the existing private Sites project and owner-only audience.

## Non-goals

- Do not reproduce LMU's complete global mega-navigation or footer.
- Do not add a backend, form, analytics, framework, build system, or data collection.
- Do not invent testimonials, hiring dates, compensation, eligibility rules, or an application URL.
- Do not claim the prototype is an official published LMU recruitment page.

## Anti-goals

- No photographs, gradients, large shadows, glass effects, rounded cards, fake device mockups, or decorative illustrations.
- No oversized campaign typography that overwhelms the content.
- No repeated feature-card pattern in every section.
- No low-contrast text, ornamental motion, or horizontal overflow.

## Approaches considered

### 1. Editorial LMU — selected

A white editorial canvas with Metric typography, exact LMU crimson and cyan accents, strong rules, square controls, and a measured two-column rhythm. This keeps the page energetic enough for student recruitment while remaining institutionally credible.

### 2. Bold campaign

A crimson hero with oversized white typography and more dramatic blocks. This would feel energetic, but it works against the requested elegant simplicity and could look like a separate marketing campaign.

### 3. Minimal institutional

A compact departmental layout close to a university directory page. This would be credible but too restrained for a student recruitment story and would flatten the role's progression.

## Source reference and evidence

The existing `DESIGN.md` records the earlier official-site research and measured tokens from:

- https://its.lmu.edu/
- https://www.lmu.edu/
- https://cdn.lmudigital.io/terminalfour/styles/devcore.css
- https://its.lmu.edu/media/2019lmu/siteassets/css/main-logo-testing.css
- https://its.lmu.edu/media/2019lmu/siteassets/css/t4-style-updates.css

Observed values retained: Metric typography, `#AB0C2F` crimson, `#0076A5` cyan, approximately 64rem content width, square controls, hairline dividers, white canvas, and light-gray institutional footer. The panorama treatment is explicitly removed by this redesign.

## Visual system

### Color roles

- `--crimson: #AB0C2F` — primary actions, small labels, active states.
- `--crimson-dark: #7F0822` — button hover state.
- `--blue: #0076A5` — page title, major section headings, numeric markers.
- `--ink: #111111` — primary copy and navigation.
- `--ink-soft: #4B4D50` — supporting copy.
- `--line: #D7D9DA` — rules and grid borders.
- `--surface: #F5F6F6` — restrained alternate sections.
- `--footer: #F1F1F1` — footer.
- `--white: #FFFFFF` — main canvas and reversed text.

Every normal text/background pairing must remain readable at WCAG AA contrast. Decorative pale pink text is not allowed on white.

### Typography

- Use LMU's Metric webfont files already referenced by the project, with `Arial, sans-serif` fallback.
- Body: 18px desktop, 16px mobile, 1.45 line height.
- Page title: 44–54px, cyan, semibold.
- Hero headline: 56–78px desktop and 42–54px mobile, black, compact but not compressed.
- Section headings: 36–48px desktop and 30–38px mobile, cyan or black according to hierarchy.
- Labels/buttons: 12–13px uppercase, semibold, 0.12–0.15em tracking.
- Avoid serif type, italics, and decorative font substitutions.

### Spacing and container

- Use a 4px base spacing rhythm with named steps from 8px through 120px.
- Primary content width: 64rem; wide navigation shell: 75rem.
- Desktop sections: 88–112px vertical padding.
- Mobile sections: 56–72px vertical padding.
- Square corners throughout, except truly circular status indicators.
- Use borders and spacing for grouping; no card shadows.

## Page composition

### 1. Brand masthead

- Replace the photograph with a solid crimson identity band.
- Keep the local LMU lockup in white at the left.
- Keep Apply, Visit, Give, and Search utility links in a crisp white block at the right on wide screens.
- On small screens, keep the lockup and collapse utility links to a compact horizontal row without hiding destinations.
- A thin cyan accent rule may separate the brand band from the department navigation.

### 2. Department navigation

- White sticky bar with the ITS / Event Support identifier at left.
- Navigation at right; the Join action is a square crimson control.
- Preserve the accessible mobile menu and no-JavaScript fallback.

### 3. Hero

- No illustration or image panel.
- Use a two-column editorial layout on desktop: headline and lead at left, a structured “At a glance” list at right.
- Retain the current page title, headline, lead, primary action, secondary link, and three benefits.
- Use an asymmetric crimson rule and restrained cyan markers to create visual interest.
- Stack naturally on mobile with the actions wrapping without overflow.

### 4. Story sections

- “Who we are”: two-column heading/body followed by three principles in a bordered row.
- “What we do”: three equal workflow columns, differentiated by number and typography rather than illustrations.
- “What you'll gain”: a 2×2 editorial grid with large indices and concise tags.
- “Connections”: one full-width cyan band for a single moment of strong color, with white copy and a bordered competency list.
- “Growth path”: a vertical numbered sequence with clear progression and the existing qualification note.
- “A day on the team”: a four-step timeline with strong time labels and no decorative mockup.
- “Join”: white section with a crimson top rule, visible application-status disclosure, three facts, and FAQ rows.

### 5. Footer

- Light-gray institutional footer with a compact LMU/ITS identifier, prototype disclosure, approval caveat, and copyright.
- No photo, social icons, or unrelated university links.

## Components and interaction

- Buttons: square, 1px crimson border, 44px minimum height; primary filled crimson, secondary transparent.
- Text links: blue with a clear underline or bottom rule on hover/focus.
- Cards/panels: white or transparent with 1px rules; no shadows.
- FAQ: full-width rows with a large crimson plus/minus; expanded content remains inline.
- Focus: 3px high-contrast outline with 3–4px offset.
- Motion: subtle 12px reveal only when JavaScript is present; all motion disabled under `prefers-reduced-motion: reduce`.

## Responsive behavior

- Validate at 320, 375, 768, 1024, and 1280px.
- No horizontal scrolling at any target width.
- Multi-column sections collapse to one column below 48em; compact two-column grids may remain at tablet width when readable.
- The mobile navigation opens as an overlay only when JavaScript is present.
- Utility navigation and calls to action must remain keyboard reachable and at least 44px high.

## Content and accessibility constraints

- Preserve the current semantic heading hierarchy and section IDs.
- Preserve the skip link, landmark labels, `aria-expanded`, `aria-controls`, and visible FAQ answers without JavaScript.
- Preserve honest language: “Application link coming soon”; no external job application CTA.
- Retain the prototype disclosure and LMU approval caveat.
- The local SVG lockup is branding artwork, not photography; keep descriptive alternative text.

## Implementation boundary

- Update the existing Sites project `appgprj_6add77ada0b88191bb81e25bee40fb3a` at `https://lmu-its-event-support.supersky6.chatgpt.site`; do not create a replacement project.
- Rewrite `dist/styles.css` as the single source of truth; do not append a third compatibility layer.
- Simplify `dist/index.html` by removing the masthead photograph and unused decorative hero/timeline markup while preserving meaningful copy and IDs.
- Keep `dist/app.js` behavior-focused; change it only if the cleaned markup requires selector updates.
- Update `DESIGN.md` so its asset guidance and composition match the approved no-photo direction.
- Add automated source contracts for no photography, coherent tokens, square/no-shadow components, responsive rules, and disclosure preservation.

## Definition of done

- The deployed page contains no photography or raster-image request.
- The stylesheet is a coherent replacement rather than a legacy-plus-overrides stack.
- All existing and new tests pass.
- Browser QA confirms the masthead, hero, navigation, recruitment caveats, FAQ interaction, and responsive layout.
- The revised private version is published to the existing Sites URL with its current audience unchanged.

## Builder discretion

The builder may tune exact spacing within the defined scale, choose whether the hero's accent rule is horizontal or vertical at each breakpoint, and simplify purely decorative HTML classes that no longer serve the design. Copy, identity colors, no-photo requirement, functionality, and accessibility behavior are fixed.
