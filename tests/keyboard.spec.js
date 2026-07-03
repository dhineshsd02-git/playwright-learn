import{test} from "@playwright/test";
 test('key',async({page})=>{

   //  await page.goto('https://www.amazon.in/');
   //  // await page.getByRole('searchbox').type('Mobile');
   //  // await page.getByRole('searchbox').type('phones');

   //  await page.getByRole('searchbox').fill('Mobile');
   //  await page.getByRole('searchbox').fill('phones');

   //  // await page.getByRole('searchbox').press('Control+A');
   //  // await page.getByRole('searchbox').press('Control+X');
   //  // await page.getByRole('searchbox').press('Control+V');

   //  await page.keyboard.press('Enter');
   //  await page.waitForTimeout(2000);
    
// hover
// await page.goto('https://www.amazon.in/');
// await page.getByText('Account & Lists').hover();
// await page.locator('(//span[@class="nav-text"])[7]').click();
// await page.waitForTimeout(4000);
 
//drag Drop
// await page.goto('https://jqueryui.com/droppable/')
// const frame= await page.frameLocator('iframe');
// await frame.locator('.ui-widget-content ').dragTo(await frame.locator('.ui-widget-header'));

//Mouse UP /Down
await page.goto('https://jqueryui.com/droppable/')
const frame= await page.frameLocator('iframe');

await frame.locator('.ui-widget-content').hover();
await page.mouse.down();
await frame.locator('.ui-widget-header').hover();
await page.mouse.up();
await page.waitForTimeout(3000);

 })