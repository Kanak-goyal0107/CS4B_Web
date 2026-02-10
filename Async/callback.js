/*setTimeout(() => {
    console.log("first");
},4000);*/

/*setInterval(()=>{
    console.log("first");
},2000);*/

/*let c=0;
let id = setInterval(() => {
    console.log("first");
    c++;
    if(c===5){
        clearInterval(id);
    }
}
)*/
let x=1000;
function roll(num,next) {    //also take the variable and give its value manually 
    x=x*2;
    setTimeout(() => {
        console.log("Roll. no. is "+num);
        if (next) next();
    },x)
}

roll(12212, () => {
    console.log("Wait is getting doownloaded");
    roll(12312, () => {
        console.log("Wait is getting downloaded");
        roll(12412, () => {
            console.log("wait is almost over");
            roll(12512);
        });
    });
});