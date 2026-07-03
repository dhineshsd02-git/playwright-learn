import {test} from "@playwright/test";


// test('locator',async({page})=>{
// await page.goto('https://www.amazon.in/');
// await page.locator('//a[@href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"]').click();
// await page.waitForTimeout(8000);
// await page.locator('(//li[@class="a-spacing-micro apb-browse-refinements-indent-2"])[4]').click();
// await page.waitForTimeout(4000);

test('locator',async({page})=>{
await page.goto('https://www.amazon.in/');
await page.locator("//a[text()='MX Player']").click();
await page.waitForTimeout(4000);
await page.locator('//span[contains(text(),"Tamil")]').click();
await page.waitForTimeout(4000);

})


