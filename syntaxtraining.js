let age = 212;
let name = 'Klaus';
let isStudent = false;

console.log(name + " a " + age + ". Student? " + isStudent);

let x = 100; let y = 5;
function addition(a,b){
  return a+b;
}
const soustraction = (a,b) => x - y;
const multiplication = (a,b) => x * y;
const division = (a,b) => x/y;

console.log("x + y = ", addition(x,y), " (fonction addition(a,b))");
console.log("x - y = ", soustraction(x,y));
console.log("x * y = ", multiplication(x,y), " (fonction fléchée)");
console.log("x / y = ", division(x,y));

if(age > 18) {console.log(name + " est " + "Majeur")};
for(let i = 1; i <= 10; i++) console.log(i);

let fruits = ["pomme", "banane", "orange"]
for(let i = 0; i < fruits.length; i++) console.log(fruits[i]);
