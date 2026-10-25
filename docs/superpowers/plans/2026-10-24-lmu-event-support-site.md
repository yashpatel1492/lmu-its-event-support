# LMU ITS Event Support Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a polished, accessible, frontend-only recruitment landing page for LMU ITS Event Support.

**Architecture:** A buildless static site in `dist/` uses semantic HTML, one stylesheet, and one ES module. Node’s built-in test runner verifies page content, accessibility contracts, and pure interaction helpers without adding runtime dependencies.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript ES modules, Node.js built-in test runner, OpenAI Sites static hosting

**Spec:** `docs/superpowers/specs/2026-10-24-lmu-event-support-design.md`

## Global Constraints

- Runtime technologies are frontend-only: HTML, CSS, and browser JavaScript.
- LMU Crimson is `#AB0C2F`; LMU Blue is `#0076A5`.
- The page must not invent testimonials, compensation, opening dates, or guaranteed advanced-production opportunities.
- Application buttons must use an honest placeholder state until an official URL is available.
- The content must remain usable without JavaScript and support reduced motion.

## Review Focus

- At 320px wide, the page must not create horizontal scrolling.
- Keyboard users must be able to reach navigation, CTAs, and FAQ controls with visible focus.
- With JavaScript disabled, all recruitment content and FAQ answers must remain available.
- Reduced-motion users must not receive smooth scrolling or reveal animation.
- Placeholder media and application states must not be mistaken for official LMU assets or active applications.

---

### Task 1: Static content and accessibility contract

**Files:**
- Create: `package.json`
- Create: `tests/site.test.mjs`
- Create: `dist/index.html`

**Interfaces:**
- Consumes: the approved design spec and recruitment brief.
- Produces: stable section IDs, semantic landmarks, FAQ markup, and stylesheet/script entry points.

- [ ] **Step 1: Write failing structure tests**

Assert that `dist/index.html` contains the required section IDs, LMU messages, skip link, accessible menu attributes, FAQ controls, application placeholder, and no forms or server endpoints.

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL because `dist/index.html` does not exist.

- [ ] **Step 3: Implement the semantic page and package test command**

Create the complete one-page content with stable anchored navigation and progressively enhanced controls.

- [ ] **Step 4: Run tests to verify the structure passes**

Run: `npm test`
Expected: all structure tests PASS.

### Task 2: Visual system and responsive layout

**Files:**
- Modify: `tests/site.test.mjs`
- Create: `dist/styles.css`

**Interfaces:**
- Consumes: class names and section structure from Task 1.
- Produces: responsive visual layout, focus states, no-script fallbacks, and reduced-motion behavior.

- [ ] **Step 1: Add failing stylesheet contract tests**

Assert exact brand tokens, responsive breakpoint, focus-visible rule, reduced-motion query, and overflow safeguards.

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL because `dist/styles.css` does not exist.

- [ ] **Step 3: Implement the complete visual system**

Create the responsive typography, grid, cards, timelines, technical visual motifs, mobile navigation, FAQ, and CTA styling.

- [ ] **Step 4: Run tests to verify the stylesheet passes**

Run: `npm test`
Expected: all tests PASS.

### Task 3: Browser interactions and deployment package

**Files:**
- Modify: `tests/site.test.mjs`
- Create: `dist/app.js`
- Create: `.openai/hosting.json`

**Interfaces:**
- Consumes: `[data-menu-button]`, `[data-menu]`, `.faq__question`, `[data-year]`, and `[data-reveal]` elements from Task 1.
- Produces: `getNextExpanded(current: boolean): boolean` and `getMenuState(isOpen: boolean): { expanded: string, hidden: boolean }`, plus browser initialization.

- [ ] **Step 1: Add failing interaction tests**

Import the pure state helpers and assert open/closed menu and FAQ state transitions.

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL because `dist/app.js` does not exist.

- [ ] **Step 3: Implement minimal progressive enhancement**

Add mobile navigation, FAQ toggles, escape-key dismissal, current year, and intersection-based reveal while retaining no-script readability.

- [ ] **Step 4: Run the full suite and static link checks**

Run: `npm test`
Expected: all tests PASS with no warnings.

- [ ] **Step 5: Preview at desktop and mobile widths**

Serve `dist/`, verify HTTP 200, inspect the page visually, and correct any layout or interaction defects.

- [ ] **Step 6: Package and publish privately**

Register the Site once, persist its exact project ID, push/package the verified source, deploy the saved version privately, and retain the returned URL.
