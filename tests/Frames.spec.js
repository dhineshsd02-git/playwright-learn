import {test} from "@playwright/test";

test('frame',async({page})=>{

    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
   const frame1= await page.frameLocator('[name="globalSqa"]');
    await frame1.locator('//img[@data-attachment-id="1980"]').click();
    await page.waitForTimeout(5000);
    await page.goBack();

    
    await frame1.locator('[alt="Manual Online Testing Training"]').click();

})

