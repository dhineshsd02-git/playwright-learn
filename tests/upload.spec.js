import{test} from "@playwright/test";
 test('upload',async({page})=>{

//     await page.goto('https://demoqa.com/upload-download');
//    // await page.setInputFiles('.form-control','./myntra.png');

//      await page.setInputFiles('.form-control','C:/Users/dsadhasivam/OneDrive - Orion Systems Integrators, LLC/Pictures/Screenshots/Data privacy.png');
//      await page.waitForTimeout(2000);
    
// 

    
//Download
 await page.goto('https://demoqa.com/upload-download');
 const [down]=await Promise.all([
    page.waitForEvent('download'),
    //page.locator("btn btn-primary").click()
    page.click('#downloadButton')
 ]);
 await page.waitForTimeout(2000);
 await down.saveAs('C:/Users/dsadhasivam/Downloads/Test/ Test file.png')
 })