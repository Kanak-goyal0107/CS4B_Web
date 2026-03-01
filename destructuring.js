/*let marks = [80];
let [math = 0, science = 0] = marks;
console.log(math);
console.log(science);
let data = [];
let [a = 10, b = 20] = data;
console.log(a);
console.log(b);*/

let num1 = [1,2,3,4,5];
let num2 = [6,7];
let [a,b,...c] = num1;
let d = [...num1,...num2];
console.log(a);
console.log(b);
console.log(c);
console.log(d);