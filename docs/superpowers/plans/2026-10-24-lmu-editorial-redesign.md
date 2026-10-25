# LMU Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the photograph-led LMU ITS recruitment page with the approved no-photo Editorial LMU system and publish it to the existing private Site.

**Architecture:** Keep the current buildless static architecture and behavior module. Simplify the page markup around meaningful content, replace the 2,746-line legacy-plus-overrides stylesheet with one cohesive CSS file, preserve JavaScript selectors and accessible states, then package and deploy the exact tested commit to the existing Sites project.

**Tech Stack:** Semantic HTML5, modern CSS, vanilla JavaScript ES modules, Node's built-in test runner, OpenAI Sites static hosting.

**Spec:** `docs/superpowers/specs/2026-10-24-lmu-editorial-redesign-design.md`

## Global Constraints

- Update Sites project `appgprj_6add77ada0b88191bb81e25bee40fb3a`; do not create another project.
- Preserve owner-only private access.
- Use no photography or raster imagery; the local SVG lockup is allowed.
- Preserve all section IDs, approved recruitment claims, eligibility caveats, application-status disclosure, and FAQ answers.
- Use only HTML, CSS, local SVG, and vanilla JavaScript; add no dependencies, backend, framework, forms, analytics, or data collection.
- Preserve keyboard navigation, no-JavaScript readability, FAQ semantics, focus visibility, and reduced-motion handling.

## Review Focus

- At 320px, the masthead utilities, hero actions, grids, facts, and footer must not create horizontal overflow — covered by Task 2's narrow-width CSS contract and Task 3 browser QA.
- Without JavaScript, navigation and FAQ answers must remain visible — covered by the retained fallback selectors and Task 3 browser QA.
- The white Join section must not regress to legacy white/pale text — covered by Task 2's color-role assertions and Task 3 visual review.
- Remote Metric fonts may fail — covered by explicit Arial fallbacks in Task 2 and a browser review with readable fallback behavior.
- The deployed revision must be the exact tested Git commit and retain owner-only access — covered by Task 3 source-helper provenance and Sites access verification.

---

### Task 1: No-photo editorial markup

**Files:**
- Modify: `tests/site.test.mjs:36-102`
- Modify: `dist/index.html:15-312`

**Interfaces:**
- Consumes: existing section IDs, navigation hooks (`data-menu-button`, `data-menu`), FAQ hooks (`.faq__question`, `aria-controls`), and reveal hooks (`data-reveal`).
- Produces: simplified masthead/hero/section markup consumed by the stylesheet; keeps all selectors required by `dist/app.js`.

- [ ] **Step 1: Write the failing no-photo shell test**

Add a test named `the editorial masthead and hero use no photography` that asserts:

```js
assert.doesNotMatch(html, /BluffPanorama|masthead__image|<img[^>]+\.(?:jpe?g|png|webp)/i);
assert.match(html, /class="masthead__brand"[^>]*>[\s\S]*src="\.\/lmu-lockup\.svg"/);
assert.match(html, /class="hero__summary"/);
assert.match(html, /class="hero__signals"/);
```

Update the existing masthead test to require the lockup and official utility destinations but explicitly reject the panorama URL.

- [ ] **Step 2: Run the suite and verify RED**

Run: `npm test`

Expected: the no-photo test fails because `BluffPanorama`, `.masthead__image`, and the old image-led hero still exist.

- [ ] **Step 3: Simplify the masthead and hero markup**

In `dist/index.html`, remove the remote panorama image and shade layer. Keep the local lockup and utility links inside the masthead. Replace the old decorative hero grid/visual/stage-card markup with a semantic `.hero__summary` containing the existing three `.hero__signals` items. Preserve the page title, headline, lead, actions, section IDs, caveats, and footer disclosures.

- [ ] **Step 4: Remove obsolete decorative markup from later sections**

Delete `.workflow-card__visual`, `.connections__visual`, `.editorial-frame`, and other purely decorative no-photo elements while leaving every meaningful heading, paragraph, list, timeline item, and link intact.

- [ ] **Step 5: Run the full suite and verify GREEN**

Run: `npm test`

Expected: all tests pass, including the new no-photo shell test.

- [ ] **Step 6: Commit**

```bash
git add tests/site.test.mjs dist/index.html
git commit -m "feat: simplify LMU recruitment markup"
```

### Task 2: Cohesive Editorial LMU stylesheet

**Files:**
- Modify: `tests/site.test.mjs:47-116`
- Replace: `dist/styles.css`

**Interfaces:**
- Consumes: Task 1's masthead, hero, content-section, navigation, FAQ, and footer classes.
- Produces: a single coherent responsive stylesheet; preserves `.js` menu/reveal states expected by `dist/app.js`.

- [ ] **Step 1: Write the failing cohesive-system tests**

Replace legacy override-specific assertions with tests named `the stylesheet is a single no-photo editorial system` and `the editorial system keeps responsive and accessible fallbacks`. Assert:

```js
assert.match(css, /--crimson:\s*#ab0c2f/i);
assert.match(css, /--blue:\s*#0076a5/i);
assert.match(css, /--content:\s*64rem/i);
assert.match(css, /\.masthead\s*\{[^}]*background:\s*var\(--crimson\)/s);
assert.doesNotMatch(css, /Official LMU ITS template alignment|background-image:\s*url\(/i);
assert.doesNotMatch(css, /box-shadow\s*:/i);
assert.match(css, /\.hero\s*\{[^}]*grid-template-columns:/s);
assert.match(css, /@media\s*\(max-width:\s*47\.99em\)/);
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
assert.match(css, /\.js\s+\.site-nav\s*\{[^}]*position:\s*absolute/s);
```

Also assert that normal text roles use `--ink`/`--ink-soft`, the blue connection band uses white text, and controls have zero corner radius and no shadow.

- [ ] **Step 2: Run the suite and verify RED**

Run: `npm test`

Expected: the cohesive-system tests fail because the current file contains the legacy stylesheet plus the appended alignment layer and old decorative styles.

- [ ] **Step 3: Replace `dist/styles.css` with tokens and foundations**

Create one stylesheet containing the Metric font faces, exact color roles, 64rem/75rem containers, spacing scale, reset, typography, focus styles, skip link, square buttons, and global overflow protection. Keep Arial as the font fallback.

- [ ] **Step 4: Implement the approved component system**

Style the solid-crimson masthead, white utility block, sticky department navigation, two-column hero with summary rail, bordered principles/workflow/benefit grids, cyan connections band, growth sequence, timeline, Join facts/FAQ, and light-gray footer. Use borders and whitespace only—no gradients, raster backgrounds, rounded cards, or shadows.

- [ ] **Step 5: Implement responsive and motion states**

Use the approved 32em, 48em, 64em, and 80em progression where useful. Below 48em, collapse multi-column content; below 860px, keep the existing no-JavaScript navigation in document flow and apply the absolute menu only under `.js`. Ensure 44px targets, wrapped actions, reduced-motion overrides, and 320px overflow safety.

- [ ] **Step 6: Run the full suite and verify GREEN**

Run: `npm test`

Expected: all tests pass with no warnings or failures.

- [ ] **Step 7: Commit**

```bash
git add tests/site.test.mjs dist/styles.css
git commit -m "feat: rebuild LMU editorial visual system"
```

### Task 3: Browser QA, independent review, and private publication

**Files:**
- Verify: `dist/index.html`
- Verify: `dist/styles.css`
- Verify: `dist/app.js`
- Verify: `.openai/hosting.json`

**Interfaces:**
- Consumes: Task 2's tested static page and current Sites project identity.
- Produces: an independently reviewed, owner-private production deployment whose source provenance is the final Git commit.

- [ ] **Step 1: Run final static verification**

Run: `npm test`

Run: `git diff --check`

Expected: full suite passes; diff check returns no errors.

- [ ] **Step 2: Perform browser QA**

Verify the production candidate at 320, 375, 768, 1024, and 1280px where browser viewport controls are available. Check no horizontal overflow, masthead/utility wrapping, mobile menu open/Escape/close behavior, FAQ expansion, readable Join caveats, keyboard focus visibility, no-JavaScript readability, and reduced-motion behavior.

- [ ] **Step 3: Request a fresh whole-branch review**

Provide the reviewer the spec, plan, base commit `5fc8c4f`, final HEAD, and browser findings. Fix Critical/Important issues test-first; record Minor issues without expanding scope.

- [ ] **Step 4: Commit any review-required fixes and rerun verification**

Run: `npm test`

Run: `git diff --check`

Expected: all tests pass and the worktree is clean.

- [ ] **Step 5: Refresh Sites access and source credentials**

Call `get_site` for `appgprj_6add77ada0b88191bb81e25bee40fb3a`; confirm owner role, one allowed owner, and no groups. Call `create_source_repository_write_credential` and keep the credential only in session memory.

- [ ] **Step 6: Push and package the exact source revision**

Run the Sites source helper from the project checkout with `commands: []` and an absolute temporary archive path. Retain the helper-returned `commit_sha` and archive unchanged.

- [ ] **Step 7: Deploy privately**

Call `save_version_and_deploy_private` with the exact project ID, helper commit SHA, and archive. If non-terminal, poll the returned deployment ID until success or failure.

- [ ] **Step 8: Verify the live deployment and hand it off**

Open `https://lmu-its-event-support.supersky6.chatgpt.site` with a commit cache-buster. Confirm the no-photo masthead, hero, Join copy, and FAQ behavior. Keep the final Site tab open and report the literal URL, test count, deployment status, and any non-blocking review note.
