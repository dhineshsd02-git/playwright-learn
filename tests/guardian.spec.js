import{test} from '@playwright/test';
test('Guardian',async({page})=>{

    await page.goto('https://guardian-go-dev-ui.azurewebsites.net/');
    await page.locator('#i0116').fill('go-cld-dsadhasivam@kpmgdev.com');
    await page.locator('#idSIButton9').click();
        await page.waitForTimeout(9000);

    await page.locator('#passwordInput').fill('Kpmgdevqwert@2026');
    await page.locator('#submitButton').click();
    await page.waitForTimeout(9000);

})