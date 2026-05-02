import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/wanderlist');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

console.log('📸 Discover Itineraries...');
await page.goto('https://wanderwanderlist.netlify.app/discover', { waitUntil: 'networkidle' });
// wait for images to load
await page.waitForTimeout(2000);
await page.screenshot({ path: join(OUT, 'discover.png') });
console.log('✅ discover.png saved.');

await browser.close();
