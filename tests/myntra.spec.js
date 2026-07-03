import{test} from '@playwright/test';

// test('Myntra',async({page})=>{
// await page.goto('https://www.myntra.com/')
// console.log(await page.title());
//  console.log(await page.url());
//  await page.screenshot({path:'./myntra.png'});
// //  await page.waitForTimeout(80000);
// await

// });

//Locator-Id class CSS 

test('locator',async({page})=>{
await page.goto('https://www.amazon.in/');
//await page.locator('#nav-link-accountList-nav-line-1').click();
await page.locator('[name="field-keywords"]').fill('headphones');
await page.locator('#nav-search-submit-button').click();
await page.waitForTimeout(2000);
await page.locator('[alt$="ENC (Indigo Blue)"]').click();
await page.waitForTimeout(4000);
})

// test('locator',async({page})=>{
// await page.goto('https://www.amazon.in/');
// //await page.locator('#nav-link-accountList-nav-line-1').click();
// await page.locator('[name="field-keywords"]').fill('headphones');
// await page.locator('#nav-search-submit-button').click();
// await page.waitForTimeout(2000);
// await page.locator('[alt*="ENC (Indigo Blue)"]').click();
// await page.waitForTimeout(4000);
// })



