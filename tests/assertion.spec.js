import { expect,test } from "@playwright/test";
test('Assertion',async({page})=>{

    //URL
     //await page.goto('https://www.flipkart.com/');
    // await expect(page).toHaveURL('https://www.flipkart.com/')
    //  await expect.soft(page).toHaveURL('https://www.fl.com')

    // to have title
    // await page.goto('https://www.flipkart.com/');
    // await expect(page).toHaveTitle('Online shopping site for mobiles')
    //await page.locator('(//a[@style="cursor:pointer"])[3]').click();
    // await page.waitForTimeout(3000);
    // await page.locator("div[text()='OPPO']").click();
    // await expect(page).toHaveTitle('oppo-goat-sale-july-26')

    //Tobe visible 
    // await page.goto('https://www.flipkart.com/');
  //await expect(page.getByRole('button',{name:'Search for Products, Brands and More'})).not.toBeVisible();

    //to be enabled
    // await page.goto('https://demoqa.com/upload-download');
    // await expect(page.getByRole('button',{name:'Download'})).not.toBeEnabled();

    //to be disabled
    // await page.goto('https://demoqa.com/upload-download');
    // await expect(page.getByRole('button',{name:'Download'})).toBeDisabled();

    //to be checked
    // await page.goto ('https://demoqa.com/upload-download');
    // await page.locator("//span[text()='Check Box']").click();
    // await expect(page.getByRole("checkbox",{name:'Select Home'})).toBeChecked();

    //tohave text
    // await page.goto ('https://demoqa.com/upload-download');
    // await page.locator("//span[text()='Text Box']").click();
    // await expect(page.locator('#currentAddress-label')).not.toHaveText('Current Address');
    
    //tocontain text
    // await page.goto ('https://demoqa.com/upload-download');
    // await page.locator("//span[text()='Text Box']").click();
    // await expect(page.locator('#permanentAddress-label')).not.toContainText('Permanent Address');

    //tobe hiiden
    // await page.goto ('https://demoqa.com/upload-download');
    // await page.locator("//span[text()='Text Box']").click();
    // await expect(page.getByRole("button",{name:'Submit'})).toBeHidden();

     //tobeempty
    //  await page.goto ('https://demoqa.com/upload-download');
    // await page.locator("//span[text()='Text Box']").click();
    // await expect(page.locator('#permanentAddress')).toBeEmpty();

    //tohave value
    // await page.goto ('https://demoqa.com/upload-download');
    //  await page.locator("//span[text()='Text Box']").click();
    // await expect(page.locator('#permanentAddress-label')).toHaveValue('Permanent Address');

    //to be editable
    await page.goto ('https://demoqa.com/upload-download');
    await page.locator("//span[text()='Text Box']").click();
    await expect(page.locator('#permanentAddress')).not.toBeEditable();




})
