/*function add(a,b,c){
    return a+b+c;
}
console.log(add(1,20,3));*/

/*
function add(...numbers) {
    let total = 0;
    for(let i=0; i<numbers.length;i++){
        total = total + numbers[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));    //pass an array instead of using spread operator
*/

/*let a = [1,2,3,34,45,88]
let [first,sec,...last] = a;
let [...x] = a;
console.log(first,sec,last);    //output - 1 2 [ 3, 34, 45, 88 ] 
console.log(x);    //Gives the array of values
console.log(...x);   //Gives the values after opening the array*/

/*let a = [1,2];
let b = [3,4];
let merged = [...a,...b];
console.log (merged);*/

/*const ans = a => {
    return (a%2==0) ? "Even" : "Odd";
}
console.log(ans(11));*/

/*const s = str => {
    return str.split("").reverse().join("");
}
console.log(s("tree")); */

const res = (...marks) => {
    let s = 0;
    for(let i in marks){
        s += marks[i];
    }
    let avg = s/marks.length;
    return (avg>=40) ? "Pass" : "Fail";
}
console.log(res(100,100,80));