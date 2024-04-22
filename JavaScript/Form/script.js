// Converting HTML file into JavaScript file is named Manipulation
// JavaScriptDOM stands for JavaScript Document Object Models

let elementName = document.getElementById("name").value;
let elementEmail = document.getElementById('email');

console.log(elementName);
console.log(elementEmail);

function submitForm() {
    let elementName = document.getElementById("name").value;
    let elementEmail = document.getElementById('email').value;
    let elementResult = document.getElementById('result');
    elementResult.innerHTML = `My name is ${elementName}, email: ${elementEmail}`;
}