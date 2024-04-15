// Array 
// 1
let arr = ['javascript','go','python'];
console.log(arr);
console.log(arr[1]); // calling the second value by its index
arr.unshift("css") // adding a value at the start
arr.push("html") // adding a value at the end
console.log(arr.length); // length of array
console.log(arr);
// 2
let massiv = new Array('Asilbek','Shaxriyor','Muhammadamin')
console.log(massiv);
massiv.pop() // deleting last value of array
massiv.reverse() // reversing values of array 
console.log(massiv);

function EvenOrOdd(a,b){
    if(a%2===0){
        console.log(`${a} is an even number`);
    }
    else{
        console.log(`${a} is an odd number`);
    }
    if(b%2===0){
        console.log(`${b} is an even number`);
    }
    else{
        console.log(`${b} is an odd number`);
    }
}
EvenOrOdd(2,5)

const EvenOrOdd2 = function(a,b){
    if(a%2===0){
        console.log(`${a} is an even number`);
    }
    else{
        console.log(`${a} is an odd number`);
    }
    if(b%2===0){
        console.log(`${b} is an even number`);
    }
    else{
        console.log(`${b} is an odd number`);
    }
}
EvenOrOdd2(45,90)

const EvenOrOdd3 = (a,b) => {
    if(a%2===0){
        console.log(`${a} is an even number`);
    }
    else{
        console.log(`${a} is an odd number`);
    }
    if(b%2===0){
        console.log(`${b} is an even number`);
    }
    else{
        console.log(`${b} is an odd number`);
    }
}
EvenOrOdd3(9,100)

function maxNumber(a,b){
    if(a>b){
        console.log(a);
    }
    else if(a<b){
        console.log(b);
    }
    else{
        console.log("Both of them are equal");
    }
}
maxNumber(6,10)

const maxNumber2 = function(a,b){
    if(a>b){
        console.log(a);
    }
    else if(a<b){
        console.log(b);
    }
    else{
        console.log("Both of them are equal");
    }
}
maxNumber2(9,46)

const maxNumber3 = (a,b) => {
    if(a>b){
        console.log(a);
    }
    else if(a<b){
        console.log(b);
    }
    else{
        console.log("Both of them are equal");
    }
}
maxNumber3(735,735)

// Split method
let string = "Hello"
console.log(string.split()); // converts string to array
console.log(string.split('')); // gets each letter of the given value individually into an array
console.log(string.split('').reverse());

let a = 'Asilbek'
let b = 'Muhammadamin'
let c = 'Shaxriyor'
let d = 'Javohir'
let e = 'Shohjahon'
console.log(a.split('').reverse());
console.log(b.split('').reverse());
console.log(c.split('').reverse());
console.log(d.split('').reverse());
console.log(e.split('').reverse());

// Join method
console.log(string.split('').reverse().join()); // Returns the given value from an array
console.log(a.split('').reverse().join('')); // Returns the given value from an array with joining all the letters

function reverseNumber(a){
        let ConStr = String(a)
        if(ConStr.length>= 2){
            return ConStr.split("").reverse().join("")
        }
        else{
            console.log("Enter a 2-digit number or more");
        }
        let result = Number(ConStr)
        return result
}
console.log(reverseNumber(115));