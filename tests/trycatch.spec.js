import {test} from '@playwright/test';
 test('try',async({page})=>{
    await page.goto("https://www.flipkart.com/" );
     await page.waitForTimeout(3000);

    try{
        await page.waitForSelector('.xkp9Hl',{timeout:'9000'})
        await page.locator('.xkp9Hl').fill('8526606016');
        await page.locator('.WHahJn ').click();
        await page.waitForTimeout(8000);
    

    }
    catch{
        // console.log('Not displayed');
    }

 })