const student = {
    name: "Abhishek",
    age:33,
    address:{
        city: "Gzb",
        state: "UP"
    }
}
//const name =  student.name;
//const age=student.age;
/*const {name:stuname="Amit",age,address:{city}}=student;
 //destructuring
console.log(stuname,age,city);

//Destructuring in function
function displaystu(object) {
    console.log(`My name is ${object.name} and my name is ${object.age}`); //Normal way 
}
function displaystu({name,age}) {
    console.log(`My name is ${name} and my name is ${age}`); //Normal way 
}*/

/*let numbers = [10,20,30];
let a,b,c = numbers;
console.log(a);
console.log(b);
console.log(c);*/

let data=[1,2];
let [a=10,b=20]=data;
console.log(a);
console.log(b);

let p=5;
let q=10;
[p,q]=[q,p];   //do not swap after removing the square brackets
console.log(p);
console.log(q);

let colors=["red","green","blue"];
let[,secCol]=colors;
console.log(secCol);