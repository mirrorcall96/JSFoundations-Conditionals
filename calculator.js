const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");
num1=parseInt(num1);
num2=parseInt(num2);
const op  = prompt("Please choose the operation (+, -, /, *):");
let answ = 0;
if(op === "+") answ=num1+num2;
else if(op === "-")  answ=num1-num2;
else if(op === "/") answ=num1/num2;
else if(op === "*")  answ=num1*num2;

console.log(`${num1} ${op} ${num2} = ${answ}`);