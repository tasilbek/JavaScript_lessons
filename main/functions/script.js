function MyFunc() {
    console.log("Hello");
}

MyFunc() // calling function
document.querySelector('p') // To convert HTML value to JavaScript value

document.getElementById('p').innerHTML = "hahaha"
document.getElementById('h2').innerHTML = "Hello World!"

function sumFunc(a,b){
    let result = a + b;
    console.log(result);
}
sumFunc(6,9)

function multiplyFunc(a,b){
    let result = a * b;
    console.log(result);
}
multiplyFunc(4,5)

function calcFunc(a,b,c){
    let result = (a*b)-c
    console.log(result);
}
calcFunc(1,9,6)

function calculating(a,b){
    document.getElementById('p').innerHTML = a**b
}
calculating(3,2)

function divFunc(a,b){
    document.getElementById("h2").innerHTML = a/b
}
divFunc(9,3)

let name = prompt("Type your name")
let surname = prompt("Type your surname")
let age = prompt("Type your age")
document.getElementById('text').innerHTML = `My full name is ${name} ${surname} and I'm ${age} years old.`