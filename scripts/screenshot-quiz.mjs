import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/wanderlist');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

// ── Quiz Q1: What's your travel vibe? ───────────────────────────────────────
console.log('📸 Quiz Q1 — vibe...');
await page.goto('https://wanderwanderlist.netlify.app/quiz', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: join(OUT, 'quiz-vibe.png') });
console.log('✅ quiz-vibe.png saved.');

// ── Quiz result: answer all 5 questions ─────────────────────────────────────
console.log('📸 Answering quiz...');
// Q1 - Culture & History
await page.locator('text=Culture & History').click();
await page.waitForTimeout(500);
// Q2 - About a week
await page.locator('text=About a week').click();
await page.waitForTimeout(500);
// Q3 - One city, deep dive
await page.locator('text=One city, deep dive').click();
await page.waitForTimeout(500);
// Q4 - Historic cities & architecture
await page.locator('text=Historic cities').click();
await page.waitForTimeout(500);
// Q5 - Balanced
await page.locator('text=Balanced').click();
await page.waitForTimeout(3000);

console.log('📸 Quiz result...');
await page.screenshot({ path: join(OUT, 'quiz-result.png') });
console.log('✅ quiz-result.png saved.');

await browser.close();
