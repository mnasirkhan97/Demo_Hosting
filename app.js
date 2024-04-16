/*
Exercise 09:

create a faulty calculator using javascript

This javascript calculator does following :
1. Take two numbers as a input  from user 
2. Its performs wrong operations as follows:

+ ----> -
- ----> /
* ----> +
/ ----> **

its performs wrong operation 10% of the time

*/

// solution:


let random = Math.random()

console.log(random);

let a = prompt("Enter first number")
let b = prompt("Enter operation")
let c = prompt("Enter second number")

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**",
}

if(random > 0.2){
    // perform correct operation
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

else{
    // perform wrong operation
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);

}




/*
create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing 
Fire


shop Name:
Engine
Foods
Garments

Another word:
Bros
limited
Hub


dont use Array

*/