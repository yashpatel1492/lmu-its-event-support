# LMU Official-Site Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the frontend-only LMU ITS Event Support recruitment page so it faithfully matches the professional, elegant, simple visual language of the current official LMU ITS website.

**Architecture:** Keep the buildless static architecture: semantic content in `dist/index.html`, the complete responsive visual system in `dist/styles.css`, and existing accessible interactions in `dist/app.js`. Add one local SVG logo asset and enforce the official-site requirements through Node's built-in test runner.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner

**Spec:** `DESIGN.md`

## Global Constraints

- Frontend technologies only: HTML, CSS, and vanilla JavaScript.
- No framework, package dependency, backend, form submission, analytics, or data collection.
- Preserve all current recruitment claims, caveats, anchors, and FAQ behavior.
- Use the official LMU ITS design references listed in `DESIGN.md`.
- Keep a visible prototype disclaimer to avoid implying official production publication.

## Review Focus

- Official remote assets unavailable: the page must retain readable fallback type and a usable header.
- Narrow viewport: masthead, navigation, cards, facts, timeline, and FAQ must reflow without horizontal overflow.
- JavaScript unavailable: all recruitment content remains visible and anchor navigation still works.
- Keyboard use: mobile navigation and FAQ controls retain native buttons, labels, focus states, and `aria-expanded` updates.
- Reduced motion: animations and smooth scrolling are disabled when the preference is present.

---

### Task 1: Pin the LMU template contract

**Files:**
- Modify: `tests/site.test.mjs`
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: current static files in `dist/`
- Produces: structural and design-token assertions for Tasks 2–3

- [ ] **Step 1: Write failing tests** asserting the official campus panorama, LMU utility links, local lockup asset, Metric font declarations, official crimson/cyan tokens, square corners, approximately 1024px content width, light institutional footer, responsive navigation, prototype disclaimer, and absence of frameworks/forms.
- [ ] **Step 2: Run `npm test` and verify the new assertions fail because the restyle is not implemented.**
- [ ] **Step 3: Commit the failing contract tests.**

### Task 2: Rebuild the institutional shell and content layout

**Files:**
- Create: `dist/lmu-lockup.svg`
- Modify: `dist/index.html`
- Modify: `dist/styles.css`
- Test: `tests/site.test.mjs`

**Interfaces:**
- Consumes: Task 1 assertions and the existing `data-menu-*`, `data-header`, `data-reveal`, and FAQ hooks used by `dist/app.js`
- Produces: LMU-style masthead, navigation, restrained recruitment sections, and institutional footer without changing interaction APIs

- [ ] **Step 1: Add the local SVG lockup and replace the custom header/hero markup with the LMU panorama masthead, utility links, department navigation, and focused recruitment introduction.**
- [ ] **Step 2: Simplify the body markup while preserving section IDs, claims, caveats, and FAQ control relationships.**
- [ ] **Step 3: Replace the decorative stylesheet with Metric fonts, official tokens, measured content widths, square controls, white-space-led components, responsive breakpoints, visible focus states, and reduced-motion rules.**
- [ ] **Step 4: Run `npm test` and verify the complete suite passes.**
- [ ] **Step 5: Commit the implementation.**

### Task 3: Visual verification and publication

**Files:**
- Modify if required by visual findings: `dist/index.html`, `dist/styles.css`, `dist/app.js`, `tests/site.test.mjs`

**Interfaces:**
- Consumes: the completed static site from Task 2
- Produces: visually verified and republished Sites artifact

- [ ] **Step 1: Serve or preview the site and inspect the desktop page against the official LMU ITS reference.**
- [ ] **Step 2: Inspect a narrow viewport; if a defect is found, add a failing regression assertion before fixing it.**
- [ ] **Step 3: Run `npm test` fresh and verify zero failures.**
- [ ] **Step 4: Publish the verified `dist/` directory to the existing Sites project.**
- [ ] **Step 5: Open the deployed URL and verify the new shell, navigation, FAQ interactions, and disclosure text.**

