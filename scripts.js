
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

function greet(greeting, name) {
    if (Array.isArray(name)) {
        name = name.join(",");
    }
    return `${greeting} sa inyu, ${name}!`;

    { }
}

console.log(greet("mayung aga", ["jaysonnet", "bai", "soy", "tol,"]));

const heading = document.querySelector("title");
heading.textContent = "your fathers name is jaysonnet";
heading.style.color = "red";
heading.style.backgroundColor = "blue";
heading.style.fontSize = "100px";

console.log(heading.textContent);


const contactheading = document.querySelector("#contact h2");
console.log(contactheading);


const servicesheading = document.querySelector("#services h2");
console.log(servicesheading);