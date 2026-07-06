test('locator',async({page})=>{
await page.goto('https://www.amazon.in/');
//await page.locator('#nav-link-accountList-nav-line-1').click();
await page.locator('[name="field-keywords"]').fill('headphones');
await page.locator('#nav-search-submit-button').click();
})