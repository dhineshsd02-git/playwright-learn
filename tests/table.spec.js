import{test} from "@playwright/test";

test('table',async({page})=>{

await page.goto('https://demoqa.com/webtables');
const table=await page.locator('.-striped');
const rows= await table.locator('tbody tr');

// const rows=await page.locator('table tbody tr');
 console.log(await rows.count());

for(let r=0;r<await rows.count();r++){
    const col=await rows.nth(r).locator('td');
    console.log(await col.count());

    const t=await col.allTextContents();
    console.log(t);

    // for(let c=0;c<await col.count();c++){
    //     const text=await col.nth(c).textContent();
    //     console.log(text);
    // }
}
})


///TAsk
// import {test} from "@playwright/test";
// import { createDiffieHellmanGroup } from "crypto";
// test ('webtab',async({page})=>{
//     await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
//    //let T=await page.locator('.table table-striped mt-3');
//     //let R=await T.locator('tbody tr');
//     let R=await page.locator('tbody tr');
//     console.log(await R.count());

//     for(let r1=0;r1<await R.count();r1++){
//         let C=await R.nth(r1).locator('td');
//         console.log(await C.count());

//         let data=await C.allTextContents();
//         console.log(data);
//     }
// })
