const puppeteer = require('puppeteer');
const fs = require('fs');
const OUT = 'D:/Trivago/screenshots/';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const BASE = 'file:///D:/Trivago/media/';

  // Full-page country scroll
  await page.goto(BASE + 'country.html?id=japan', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: OUT + '5_country_japan_full.png', fullPage: true });
  console.log('5 done');

  // Destination page scrolled down
  await page.goto(BASE + 'destination.html?country=japan&id=mt-fuji', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.evaluate(() => window.scrollTo(0, 800));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: OUT + '6_destination_scroll.png', fullPage: false });
  console.log('6 done');

  // Planner booking confirmation
  await page.goto(BASE + 'travelplanner.html?country=japan&id=mt-fuji', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.evaluate(() => {
    document.getElementById('input-departure').value = '2025-06-01';
    document.getElementById('input-return').value = '2025-06-10';
  });
  await page.click('#btn-book');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: OUT + '7_booking_confirmed.png', fullPage: false });
  console.log('7 done');

  await browser.close();
})();
