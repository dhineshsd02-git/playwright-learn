import {test} from '@playwright/test';
test('inbuilt',async({page})=>{

    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(5000);
    await page.getByAltText("truke New Launch Mega 12 True Wireless in Ear Earbuds W/ 24-Bit Spatial Audio, Premium Leather Textured Design, 70H Playtime Fast Charge Buds, 13mm Drivers TWS, Low Latency, ENC (Indigo Blue)").click();
    
})