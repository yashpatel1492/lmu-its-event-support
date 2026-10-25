import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { getMenuState, getNextExpanded } from "../dist/app.js";

const projectUrl = new URL("../", import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, projectUrl), "utf8");
}

test("the recruitment journey keeps every planned destination addressable", async () => {
  const html = await readProjectFile("dist/index.html");
  const sectionIds = ["about", "role", "learn", "connect", "grow", "stories", "join"];

  for (const id of sectionIds) {
    assert.match(html, new RegExp(`<section[^>]+id=["']${id}["']`));
  }

  assert.match(html, /Learn the Tech\. Meet the People\. Make the Moment Happen\./);
  assert.match(html, /Behind Every Great Event Is a Great Team\./);
});

test("keyboard and assistive-technology users receive navigation and FAQ controls", async () => {
  const html = await readProjectFile("dist/index.html");

  assert.match(html, /class="skip-link"[^>]*href="#main-content"/);
  assert.match(html, /data-menu-button[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /id="primary-navigation"/);
  assert.match(html, /class="faq__question"[^>]*aria-expanded="false"[^>]*aria-controls="faq-answer-1"/);
  assert.match(html, /id="faq-answer-1"/);
});

test("the unconfirmed application path is honest and does not submit data", async () => {
  const html = await readProjectFile("dist/index.html");

  assert.match(html, /Application link coming soon/);
  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /https?:\/\/[^"']*(apply|jobs|careers)/i);
});

test("the static page declares its stylesheet and browser module", async () => {
  const html = await readProjectFile("dist/index.html");

  assert.match(html, /href="\.\/styles\.css"/);
  assert.match(html, /src="\.\/app\.js"/);
});

test("the page uses the official LMU ITS masthead and utility shell", async () => {
  const html = await readProjectFile("dist/index.html");

  assert.match(html, /class="[^"]*masthead[^"]*"/);
  assert.match(html, /src="\.\/lmu-lockup\.svg"/);
  assert.match(html, /https:\/\/its\.lmu\.edu\/media\/its\/BluffPanorama%20\(1\)\.jpg/);
  assert.match(html, /href="https:\/\/www\.lmu\.edu\/apply\/"[^>]*>Apply</);
  assert.match(html, /href="https:\/\/www\.lmu\.edu\/visit\/"[^>]*>Visit</);
  assert.match(html, /href="https:\/\/giving\.lmu\.edu\/"[^>]*>Give</);
  assert.match(html, /Information Technology Services/);
});

test("the visual system follows the measured LMU ITS design tokens", async () => {
  const css = await readProjectFile("dist/styles.css");

  assert.match(css, /--crimson:\s*#ab0c2f/i);
  assert.match(css, /--blue:\s*#0076a5/i);
  assert.match(css, /--content:\s*64rem/i);
  assert.match(css, /--footer:\s*#f3f3f3/i);
  assert.match(css, /--corner:\s*0(?:px)?\s*;/i);
  assert.match(css, /@font-face\s*\{[^}]*font-family:\s*["']?Metric/i);
  assert.match(css, /MetricWeb-Regular\.woff/i);
  assert.match(css, /font-family:\s*Metric,\s*Arial,\s*sans-serif/i);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\s*\(min-width:\s*64em\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /overflow-x:\s*(?:clip|hidden)/);
  assert.doesNotMatch(css, /border-radius:\s*(?:[1-9]|0\.[1-9])/i);
});

test("FAQ state always toggles to the opposite expanded value", () => {
  assert.equal(getNextExpanded(false), true);
  assert.equal(getNextExpanded(true), false);
});

test("menu state keeps the button and navigation visibility synchronized", () => {
  assert.deepEqual(getMenuState(false), { expanded: "false", hidden: true });
  assert.deepEqual(getMenuState(true), { expanded: "true", hidden: false });
});

test("mobile navigation becomes an overlay only when JavaScript is available", async () => {
  const css = await readProjectFile("dist/styles.css");

  assert.match(css, /\.js\s+\.menu-button\s*\{[^}]*display:\s*inline-flex/s);
  assert.match(css, /\.site-nav\s*\{[^}]*position:\s*static[^}]*width:\s*100%/s);
  assert.match(css, /\.js\s+\.site-nav\s*\{[^}]*position:\s*absolute/s);
});

test("the simplified prototype remains frontend-only and honestly disclosed", async () => {
  const [html, packageJson] = await Promise.all([
    readProjectFile("dist/index.html"),
    readProjectFile("package.json"),
  ]);

  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /<(?:iframe|video)\b/i);
  assert.doesNotMatch(packageJson, /"dependencies"\s*:/);
  assert.match(html, /Prototype recruitment experience for review/i);
  assert.match(html, /Final content and publication require LMU approval/i);
});
