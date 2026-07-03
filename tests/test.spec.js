import {test} from '@playwright/test';


test('TestQA',async({page})=>{
    await page.goto("https://demoqa.com/text-box?utm_source=copilot.com");
    await page.locator('[placeholder="Full Name"]').fill('Dhinesh');
    await page.locator('[type=email]').fill("dhineshsd@gmail.com");
    await page.waitForTimeout(4000);

});