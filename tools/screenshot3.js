const puppeteer = require('puppeteer');
const fs = require('fs');
const OUT = 'D:/Trivago/screenshots/';
const BASE = 'file:///D:/Trivago/media/';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // ── 1. Destination page (correct id, above-fold)
  await page.goto(BASE + 'destination.html?country=japan&id=mount-fuji', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 3500));
  await page.screenshot({ path: OUT + 'A_dest_hero.png' });
  console.log('A: destination hero');

  // ── 2. Destination page scrolled to content
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: OUT + 'B_dest_content.png' });
  console.log('B: destination content');

  // ── 3. Booking confirmation
  await page.goto(BASE + 'travelplanner.html?country=japan&id=mount-fuji', { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 2500));
  await page.evaluate(() => {
    document.getElementById('input-departure').value = '2025-08-01';
    document.getElementById('input-return').value = '2025-08-10';
  });
  await page.click('#btn-book');
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: OUT + 'C_booking_confirmed.png' });
  console.log('C: booking confirmed');

  // ── 4. Verify JS console errors on all pages
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  for (const url of [
    BASE + 'country.html?id=usa',
    BASE + 'destination.html?country=usa&id=grand-canyon',
    BASE + 'travelplanner.html?country=usa&id=grand-canyon'
  ]) {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('JS errors across pages:', errors.length === 0 ? 'NONE' : errors);

  await browser.close();
})();
