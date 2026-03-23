const puppeteer = require('puppeteer');
const path = require('path');

const delay = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const baseUrl = 'file://' + path.resolve(__dirname, '../media').split(path.sep).join('/');
  
  console.log('\n✓ Testing Features on index.html\n');
  
  try {
    await page.goto(baseUrl + '/index.html', { waitUntil: 'load', timeout: 10000 });
    await delay(2000);
    
    // Check COUNTRIES_DATA loaded
    const dataExists = await page.evaluate(() => {
      return window.COUNTRIES_DATA && Object.keys(window.COUNTRIES_DATA).length;
    });
    console.log('  COUNTRIES_DATA loaded:', dataExists ? `✓ (${dataExists} countries)` : '✗');
    
    // Test Search
    console.log('\n  Testing Search:');
    const searchBtn = await page.$('#btn-search');
    if (searchBtn) {
      await page.click('#btn-search');
      await delay(500);
      const isOpen = await page.evaluate(() => 
        document.getElementById('search-overlay').classList.contains('open')
      );
      console.log('    Search opens:', isOpen ? '✓' : '✗');
      
      // Type something
      await page.type('#search-input', 'france');
      await delay(500);
      const results = await page.evaluate(() => 
        document.querySelectorAll('.search-result-item').length
      );
      console.log('    Search results for "france":', results > 0 ? `✓ (${results})` : '✗');
    }
    
    // Test Destinations
    console.log('\n  Testing Destinations Overlay:');
    await page.keyboard.press('Escape');
    await delay(300);
    const destLink = await page.$('a[onclick*="openDestinationsOverlay"]');
    if (destLink) {
      await page.click('a[onclick*="openDestinationsOverlay"]');
      await delay(500);
      const destOpen = await page.evaluate(() =>
        document.getElementById('destinations-overlay').classList.contains('open')
      );
      console.log('    Destinations opens:', destOpen ? '✓' : '✗');
      
      const cards = await page.evaluate(() =>
        document.querySelectorAll('.dest-card').length
      );
      console.log('    Country cards shown:', cards > 0 ? `✓ (${cards} countries)` : '✗');
    }
    
    // Test Login
    console.log('\n  Testing Login:');
    await page.keyboard.press('Escape');
    await delay(300);
    const loginBtn = await page.$('#btn-login');
    if (loginBtn) {
      await page.click('#btn-login');
      await delay(500);
      const loginOpen = await page.evaluate(() =>
        document.getElementById('login-modal').classList.contains('open')
      );
      console.log('    Login modal opens:', loginOpen ? '✓' : '✗');
      
      // Try login
      await page.type('#login-email', 'test@example.com');
      await page.type('#login-password', 'password123');
      await page.click('.login-btn-primary');
      await delay(500);
      
      const user = await page.evaluate(() =>
        JSON.parse(localStorage.getItem('atlas_user') || 'null')
      );
      console.log('    Login saves to storage:', user && user.email ? `✓ (${user.email})` : '✗');
    }
    
    console.log('\n✓ All tests complete!\n');
    
  } catch (error) {
    console.error('\n✗ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
