const r1=require("readline").createInterface({
    input:process.stdin,
    output: process.stdout,
});
r1.question("Enter something:",)
const calculator=() => ({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => (b==0) ? "Error" : a/b,
});

console.log(calculator().add(10,5));
console.log(calculator().sub(10,5));
console.log(calculator().mul(10,5));
console.log(calculator().div(10,5));
