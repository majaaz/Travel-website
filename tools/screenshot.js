const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE = 'file:///D:/Trivago/media/';
const OUT  = 'D:/Trivago/screenshots/';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const shots = [
    { url: BASE + 'index.html',                                           file: '1_globe.png',       wait: 4000 },
    { url: BASE + 'country.html?id=italy',                                file: '2_country.png',     wait: 3000 },
    { url: BASE + 'destination.html?country=italy&id=colosseum',          file: '3_destination.png', wait: 3000 },
    { url: BASE + 'travelplanner.html?country=italy&id=colosseum',        file: '4_planner.png',     wait: 3000 },
  ];

  for (const s of shots) {
    console.log('Capturing:', s.url);
    try {
      await page.goto(s.url, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise(r => setTimeout(r, s.wait));
      await page.screenshot({ path: OUT + s.file, fullPage: false });
      console.log('  -> saved', s.file);

      // Log any console errors
      page.on('console', msg => { if (msg.type() === 'error') console.log('  JS ERR:', msg.text()); });
    } catch(e) {
      console.log('  ERROR:', e.message);
    }
  }

  await browser.close();
  console.log('Done. Screenshots in', OUT);
})();
