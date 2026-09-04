console.log("Hello, World!");
console.log("from scripts.js file.");

const myname = "jaysonnet";
const number = "09123456789";
const address = "Cebu City, Philippines";
let myage = 20;
let age = 16;

console.log(`my name is ${myname} and my age is ${myage} years old.`);
console.log(`my phone number is ${number}.`);
console.log(`my address is ${address}.`);
console.log(67);

function greet(greeting, names) {
    if (Array.isArray(names)) {
        names = names.join(",");
    }
    return `${greeting} sa inyu, ${names}!`;



}

console.log(greet("mayung aga", ["jaysonnet", "bai", "soy", "tol,"]));

