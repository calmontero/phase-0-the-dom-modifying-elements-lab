// Removing main
//const main = document.querySelector("#main");
const main = document.getElementById("main");
main.remove()

// Adding h1
const newHeader = document.createElement('h1');

// Assign id of victory
newHeader.id = "victory";

// Adding content to header
newHeader.innerHTML = "Carlos is the champion"; 
document.body.appendChild(newHeader);