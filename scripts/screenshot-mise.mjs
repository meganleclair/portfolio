import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/mise');
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3000';
const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize(VIEWPORT);

// ── 1. Homepage hero ──────────────────────────────────────────────────────
console.log('📸 Hero...');
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.screenshot({ path: join(OUT, 'hero.png') });

// ── 2. Meet Sous section ──────────────────────────────────────────────────
console.log('📸 Meet Sous...');
await page.locator('text=Meet Sous').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: join(OUT, 'meet-sous.png') });

// ── 3. Dark import section ────────────────────────────────────────────────
console.log('📸 Import section...');
await page.locator('text=Import a recipe URL').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: join(OUT, 'import-dark.png') });

// ── 4. Demo recipe page ────────────────────────────────────────────────────
console.log('📸 Demo recipe...');
await page.goto(`${BASE}/demo/tomato-white-bean-stew`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: join(OUT, 'demo-recipe.png') });

// ── 5. Sous chat — real live exchange ──────────────────────────────────────
console.log('📸 Sous chat (live)...');
await page.locator('button:has-text("Cook with Sous")').click();
await page.waitForTimeout(500);
const input = page.locator('input[placeholder*="What if"], textarea[placeholder*="What if"], input[type="text"]').last();
await input.fill('What if I swapped in chickpeas instead of white beans?');
await page.locator('button:has-text("Send")').click();
await page.waitForSelector('text=Sous', { timeout: 20000 }).catch(() => {});
await page.waitForTimeout(6000);
await page.screenshot({ path: join(OUT, 'sous-chat.png') });

await browser.close();
console.log('✅ All Mise screenshots saved to public/mise/.');
