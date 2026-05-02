import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/wanderlist');
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3006';
const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize(VIEWPORT);

// ── 1. Hero ──────────────────────────────────────────────────────────────────
console.log('📸 Hero...');
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.screenshot({ path: join(OUT, 'context-hero.png') });

// ── 2. Search Barcelona (loading + results) ──────────────────────────────────
console.log('📸 Searching Barcelona...');
await page.goto(BASE, { waitUntil: 'networkidle' });

// Fill and submit search
const input = page.locator('input[placeholder*="city"]');
await input.fill('Barcelona');
await page.locator('button:has-text("Search")').click();

// Loading state
await page.waitForSelector('text=Searching', { timeout: 8000 }).catch(() => {});
await page.screenshot({ path: join(OUT, 'built-states.png') });

// Wait for results
console.log('📸 Waiting for results...');
await page.waitForSelector('text=Places to explore', { timeout: 30000 }).catch(() => {});
await page.waitForTimeout(3000);

// Results — scrolled to show place cards
console.log('📸 Results grid...');
await page.evaluate(() => window.scrollTo(0, 500));
await page.waitForTimeout(500);
await page.screenshot({ path: join(OUT, 'built-results.png') });

// Data flow — scroll to show hero + first row of cards together
console.log('📸 Data flow...');
await page.evaluate(() => window.scrollTo(0, 200));
await page.waitForTimeout(500);
await page.screenshot({ path: join(OUT, 'data-flow.png') });

console.log('✅ Hero, states, results, data-flow saved.');
await browser.close();
