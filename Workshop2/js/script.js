console.log("Hello World!");
alert("Hello World");
const name = "Jenni"; let age = 39; const favoriteAnimal ="Dog";
console.log("Hello! My name is " + name + " and my favorite animal is " + favoriteAnimal + ".");
const userName = prompt("What is your name?");
console.log(userName);
console.log("Hello " + userName);
let userAge = prompt("How old are you?");
if (userAge >= 18) { console.log("You are an adult.");} else { console.log("You are under 18.");}
function greetUser(userName) {console.log("Hello " + userName + "!");}
greetUser(userName);

const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", () => {
    button.textContent = "Uskalsit kokeilla";});
