import{test} from "@playwright/test";
test('Mouse',async({page})=>{

    await page.goto('https://demoqa.com/buttons');

    //Wheel
    // await page.mouse.wheel(0,1000);
    //     await page.waitForTimeout(2000);
    //   await page.mouse.wheel(0,-1000);
    //  await page.waitForTimeout(2000);

    await page.getByText('Double Click Me').dblclick();
    await page.waitForTimeout(2000);
    //left click
     await page.locator('(//button[@type="button"])[4]').click();
         await page.waitForTimeout(2000);
   // Rght click
   await page.getByText('Right Click Me').click({button:'right'});
           await page.waitForTimeout(2000);




    
})