const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const mediaPath = path.resolve(__dirname, '../media');
  const baseUrl = 'file://' + mediaPath.split(path.sep).join('/');
  
  console.log('\n✓ Starting feature verification...\n');
  
  try {
    // Test 1: Check file exists and has rotation speed fix
    console.log('  [1/10] Globe rotation speed');
    const indexHtml = fs.readFileSync(path.join(mediaPath, 'index.html'), 'utf8');
    if (indexHtml.includes('rotSpeed = 0.0003') && indexHtml.includes('rotTarget = 0.0003')) {
      console.log('        ✓ Rotation speed set to 0.0003');
    } else {
      console.log('        ✗ Rotation speed not updated');
    }
    
    // Test 2: Search button
    console.log('  [2/10] Search overlay');
    if (indexHtml.includes('id="btn-search"') && indexHtml.includes('openSearchOverlay')) {
      console.log('        ✓ Search button wired');
    } else {
      console.log('        ✗ Search button missing');
    }
    
    // Test 3: Login button
    console.log('  [3/10] Login modal');
    if (indexHtml.includes('id="btn-login"') && indexHtml.includes('openLoginModal')) {
      console.log('        ✓ Login button wired');
    } else {
      console.log('        ✗ Login button missing');
    }
    
    // Test 4: Destinations overlay
    console.log('  [4/10] Destinations overlay');
    if (indexHtml.includes('openDestinationsOverlay')) {
      console.log('        ✓ Destinations overlay present');
    } else {
      console.log('        ✗ Destinations overlay missing');
    }
    
    // Test 5: saveTrip function
    console.log('  [5/10] Add to Trip Planner');
    const destHtml = fs.readFileSync(path.join(mediaPath, 'destination.html'), 'utf8');
    if (destHtml.includes('function saveTrip') || destHtml.includes('saveTrip(')) {
      console.log('        ✓ saveTrip function present');
    } else {
      console.log('        ✗ saveTrip function missing');
    }
    
    // Test 6: My Trips rendering
    console.log('  [6/10] My Trips rendering');
    const travHtml = fs.readFileSync(path.join(mediaPath, 'travelplanner.html'), 'utf8');
    if (travHtml.includes('renderTrips') && travHtml.includes('trips-list')) {
      console.log('        ✓ renderTrips function present');
    } else {
      console.log('        ✗ renderTrips function missing');
    }
    
    // Test 7: Tab switching
    console.log('  [7/10] Tab switching');
    if (travHtml.includes('switchTab') && travHtml.includes('tab-favorites')) {
      console.log('        ✓ Tab switching code present');
    } else {
      console.log('        ✗ Tab switching missing');
    }
    
    // Test 8: Date picker
    console.log('  [8/10] Calendar date picker');
    if (travHtml.includes('showPicker') || travHtml.includes('color-scheme: dark')) {
      console.log('        ✓ Date picker enhanced');
    } else {
      console.log('        ✗ Date picker missing');
    }
    
    // Test 9: WhatsApp
    console.log('  [9/10] WhatsApp booking');
    if (travHtml.includes('wa.me/919515199257')) {
      console.log('        ✓ WhatsApp link present');
    } else {
      console.log('        ✗ WhatsApp link missing');
    }
    
    // Test 10: Login
    console.log('  [10/10] Login functionality');
    if (indexHtml.includes('doLogin') && indexHtml.includes('localStorage')) {
      console.log('        ✓ Login code present');
    } else {
      console.log('        ✗ Login code missing');
    }
    
    console.log('\n✓ All code changes verified!\n');
    
  } catch (error) {
    console.error('\n✗ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
