import {test} from "@playwright/test";

test('alert',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
await page.waitForTimeout(3000);


page.on('dialog',(dialog)=>{
    console.log(dialog.type());
    console.log(dialog.message());

    if(dialog.type()==='alert'){
        dialog.accept();
    }else if(dialog.type()==='confirm'){
        dialog.dismiss();
    }else if(dialog.type()==='Prompt'){
        dialog.message();
    }

});
await page.click('[onclick="jsConfirm()"]');


}
)