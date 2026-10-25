# LMU ITS Event Support — Official-Site Restyle

## Direction

Recast the existing student recruitment page as a natural member of Loyola Marymount University's current ITS web ecosystem. The result should feel professional, elegant, simple, and institutionally credible—not like a separate marketing campaign.

## Source references

- LMU Information Technology Services: https://its.lmu.edu/
- Loyola Marymount University: https://www.lmu.edu/
- Core stylesheet observed on the official site: https://cdn.lmudigital.io/terminalfour/styles/devcore.css
- ITS template stylesheet: https://its.lmu.edu/media/2019lmu/siteassets/css/main-logo-testing.css
- ITS template refinements: https://its.lmu.edu/media/2019lmu/siteassets/css/t4-style-updates.css
- Masthead panorama: https://its.lmu.edu/media/its/BluffPanorama%20(1).jpg

## Visual system

### Brand and color

- LMU crimson: `#AB0C2F` for calls to action, active states, and small accents.
- LMU cyan: `#0076A5` for page and section headings.
- Black: `#000000` for body copy and strong headings.
- White: `#FFFFFF` for the primary canvas.
- Footer gray: `#F3F3F3` for the institutional footer.
- Hairline gray: `#D8D8D8` for dividers and card borders.
- Avoid gradients, large shadows, rounded cards, and decorative serif typography.

### Typography

- Use LMU's Metric webfont files from the official ITS host with `Arial, sans-serif` fallbacks.
- Body: approximately 18px at desktop with compact 1.35–1.5 line height.
- Primary page title: responsive 40–50px, semibold, cyan.
- Section headings: 32–42px, semibold, black or cyan according to hierarchy.
- Small labels and buttons: uppercase, 12–14px, semibold, about 2px letter spacing.

### Layout and spacing

- Full-width campus panorama masthead with the LMU lockup over a dark top fade.
- Desktop content column: approximately 1024px inside a 1280px viewport, matching the measured official ITS page.
- Page sections use generous white space and simple separators rather than colored panels.
- A compact two-column rhythm may be used for recruitment content, but every module should look like a restrained LMU template component.
- Responsive breakpoints follow the official system's 32em, 48em, 64em, and 80em progression.

### Header and navigation

- Place the LMU lockup at the upper left of the panorama.
- Place Apply, Visit, Give, Menu, and Search controls in a white utility block at the upper right on wide screens.
- Retain recruitment navigation in a clean white department bar directly beneath the masthead.
- On narrow screens, collapse the recruitment navigation behind the existing accessible menu button.

### Components

- Buttons are square-cornered, transparent or white, with a 1px crimson border, crimson text, uppercase labels, and generous horizontal padding.
- Cards are white with hairline borders and no prominent shadow.
- FAQ rows are white with gray dividers; expanded answers remain inline.
- Recruitment facts and timelines use borders and typography, not colored blocks or illustration-heavy decoration.
- The footer uses the LMU light-gray institutional visual treatment and concise prototype disclosure; it must not imply this private prototype is an official production page.

## Content and behavior

- Preserve the existing recruitment claims, eligibility caveats, schedule language, and FAQ answers.
- Preserve working anchor navigation, mobile menu, FAQ disclosure controls, sticky-header behavior, and reduced-motion support.
- Use only HTML, CSS, and vanilla JavaScript; add no backend, framework, build system, forms, analytics, or data collection.

## Asset guidance

- Reuse the official ITS Bluff Panorama image as the masthead reference asset.
- Use a faithful local SVG rendition of the official LMU lockup derived from the live official header, retaining the crimson, cyan, and white brand colors.
- Do not reuse unrelated ITS service-tile imagery or homepage news photography.

## Fidelity boundary

Exact: primary colors, Metric typography, square corners, masthead composition, utility navigation pattern, desktop content width, button styling, responsive breakpoint logic, and footer tone.

Adapted: body section content and arrangement are tailored to student recruitment; global LMU mega-menu destinations are represented without reproducing the complete university navigation system; the footer is intentionally concise for a private prototype.

