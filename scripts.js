console.log("hello world.");
console.log("from script.js file.");

const myName = "REY";
let age = 60;
age = 21;
number = 98765432;
const address = "brgy 1 pob, manapla";
console.log(`Name: ${myName}`);
console.log(`age: ${age}`);
console.log(`address: ${address}`);
console.log(67);


function greet(greetings, name = []) {
    if (Array.isArray(name)) {
        name = name.join(", ");
        return `${greetings} sa enyu ${name}`;
    }
    console.log(greet("mayung aga", ["REY", "Bai", "Soy", "Tol", "Erp",]));
}

const heading = document.querySelector("h1");
heading.textContent = "RONILO PENDON";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked.");
});

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
})




