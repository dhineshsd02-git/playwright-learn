import{test} from "@playwright/test";
import { text } from "node:stream/consumers";
test('dynamic',async({page})=>{

    await page.goto('https://demoqa.com/webtables');
    
    await page.locator('.-striped');
    const R=await page.locator('tbody tr');
    console.log(await R.count());

    for(let r=0; r<await R.count(); r++){
      const data=await R.nth(r).textContent();
      //console.log(data);
      
      //Extracting particular value from table
      // if(data.includes('Gentry')){
      //   const age=await R.nth(r).locator('td').nth(4).textContent();
      //   console.log(age);
      // }
      //Delet row
      // if(data.includes('Cantrell')){
      //   await R.nth(r).locator('#delete-record-2').click();
      //   await page.waitForTimeout(2000);
      // }

      //Edit
      if(data.includes('Cantrell')){
        await R.nth(r).locator('#edit-record-2').click();
        await page.getByPlaceholder('Salary').fill('40000');
        await page.locator('#submit').click();
        await page.waitForTimeout(3000);
      }
    }
    await page.locator('#addNewRecordButton').click();
    await page.locator('#firstName').fill('Dhinesh');
    await page.locator('#lastName').fill('Suriya');
    await page.locator('#userEmail').fill('abc@gmail.com');
    await page.locator('#age').fill('27');
    await page.locator('(//input[@class=" mr-sm-2 form-control"])[4]').fill('100000');
    await page.locator('(//input[@autocomplete="off"])[7]').fill('Computer science');
    await page.locator('#submit').click();
    await page.waitForTimeout(5000);   
})