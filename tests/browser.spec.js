import{chromium, firefox, test} from "@playwright/test";

test('Broswer',async()=>{

    const B=await chromium.launch();
    const C=await B.newContext({
        recordVideo:{
            dir:'./videos/'
        }
    });

    const p= await C.newPage();
    await p.goto('https://www.myntra.com/');
    await p.waitForTimeout(2000);

    const p2=await C.newPage();
    await p2.goto('https://www.flipkart.com/');
    await p2.waitForTimeout(2000);

});
//Browser2
 test('Browser2',async()=>{

    let B1=await firefox.launch();
    let C1= await B1.newContext({
        recordVideo:{
            dir:'./videos/'
        }
    });
    let P1= await C1.newPage() ;
    await P1.goto('https://www.amazon.in/"');
    await P1.waitForTimeout(2000);

    let P3= await C1.newPage();
    await P3.goto("https://www.meesho.com/");
    await P3.waitForTimeout(3000);

 });

