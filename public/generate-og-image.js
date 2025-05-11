const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('Generating OG image...');
  
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 1
    });
    
    // Get the absolute path to the HTML file
    const htmlPath = path.resolve(__dirname, 'og-image.html');
    const fileUrl = `file://${htmlPath}`;
    
    // Navigate to the HTML file
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Take a screenshot
    const screenshotPath = path.resolve(__dirname, 'og-image.png');
    await page.screenshot({ path: screenshotPath, quality: 100 });
    
    console.log(`OG image generated successfully at: ${screenshotPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
  } finally {
    await browser.close();
  }
}

generateOGImage();
