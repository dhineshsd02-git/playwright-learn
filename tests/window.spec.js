import{test} from '@playwright/test';
import { promises } from 'node:dns';

test ('window handling',async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('Mobiles');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);

    let [newtab]= await Promise.all([
        context.waitForEvent('page'),
        page.locator("//div[contains(text(),'HMD Vibe2 5G (Peach Pink, 128 GB)')]").click()

    ])
    await newtab.waitForLoadState();
    await page.bringToFront();

})
