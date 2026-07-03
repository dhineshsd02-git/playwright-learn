import{test} from "@playwright/test";
test('multipleframes', async({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const f1= await page.frameLocator('#frm3');
await page.waitForTimeout(2000);
    const f2= await f1.frameLocator('#frm2');

     await f2.getByPlaceholder('Enter First Name').fill('dhinesh');
     await f2.getByPlaceholder("Enter Last Name").fill('Suriya');
     await f2.locator('#englishchbx').click();
     await


await page.waitForTimeout(2000);

})



