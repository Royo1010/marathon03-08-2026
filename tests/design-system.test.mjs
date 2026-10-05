import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const css = read("style.css");
const tokens = Object.fromEntries([...css.matchAll(/--([\w-]+): (#[\da-f]{6});/gi)].map((match) => [match[1], match[2]]));

function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map((channel) => parseInt(channel, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(foreground, background) {
  const values = [luminance(tokens[foreground]), luminance(tokens[background])].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("het lichte thema houdt voldoende contrast voor tekst en acties", () => {
  assert.match(css, /color-scheme: light/);
  for (const foreground of ["text", "muted", "muted-soft", "accent", "success", "warning", "danger"]) {
    for (const background of ["bg", "panel", "panel-soft"]) {
      assert.ok(contrast(foreground, background) >= 4.5, `${foreground} op ${background}: ${contrast(foreground, background)}`);
    }
  }
  assert.ok(contrast("on-accent", "accent") >= 4.5);
});

test("PWA en pagina gebruiken hetzelfde lichte thema", () => {
  const manifest = JSON.parse(read("manifest.json"));
  assert.equal(manifest.background_color, tokens.bg);
  assert.equal(manifest.theme_color, tokens.bg);
  assert.ok(read("index.html").includes(`name="theme-color" content="${tokens.bg}"`));
});

test("alle interface-iconen zijn lokale Lucide-assets, zonder externe afhankelijkheid", () => {
  const assets = [...css.matchAll(/--icon: url\("\.\/(icons\/[\w-]+\.svg)"\)/g)].map((match) => match[1]);
  assert.ok(assets.length >= 10);
  for (const asset of assets) assert.match(read(asset), /<svg/);
  assert.match(read("LICENSE"), /MIT|Permission is hereby granted/);
  for (const match of read("index.html").matchAll(/icon-([\w-]+)"/g)) {
    assert.ok(assets.includes(`icons/${match[1]}.svg`), `Ontbrekend navigatie-icoon: ${match[1]}`);
  }
});
