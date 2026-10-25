import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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
