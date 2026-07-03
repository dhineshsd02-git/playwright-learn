import {test} from "@playwright/test";


// test('locator',async({page})=>{
// await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
// await page.selectOption("//select[@class='form-select block w-full mt-1'][1]",'option3');
// await page.waitForTimeout(2000);

// })

//multi select

test('dropdown',async({page})=>{
await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
await page.waitForTimeout(2000);
await page.locator('[data-target="multi-select-dropdown"]').click();
await page.waitForTimeout(2000);
// await page.selectOption('[class="form-multiselect block w-full mt-1"]',[{value:"option3"},{value:"option4"}]);
await page.selectOption('[class="form-multiselect block w-full mt-1"]',['option3','option4']);
await page.waitForTimeout(2000);

});


