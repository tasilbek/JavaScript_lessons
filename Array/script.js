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