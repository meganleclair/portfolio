import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/wanderlist');
const MOCK = join(__dirname, 'trips-mock.html');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(`file://${MOCK}`, { waitUntil: 'networkidle' });
await page.screenshot({ path: join(OUT, 'built-trips.png') });
console.log('✅ Trips screenshot saved.');
await browser.close();
