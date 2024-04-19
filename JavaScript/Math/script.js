// Returns the positive value of the given number
console.log(Math.abs(-4));
// Returns the nearest larger integer value of the given number
console.log(Math.ceil(20.7));
// Returns the nearest smaller integer value of the given number
console.log(Math.floor(6.4));
// Rounds the given number
console.log(Math.round(6.5));
// Returns the second given number as the power of the first given number 
console.log(Math.pow(6,2));
// Returns the maximum value of the given set of numbers
console.log(Math.max(3,6,7,2,9));
// Returns the minimum value of the given set of numbers
console.log(Math.min(3,6,7,2,9));
// Roots the given number
console.log(Math.sqrt(121));
// Chooses a number between 0 and 1
console.log(Math.random());

// Chooses a number between 1 and 10
console.log(Math.round(Math.random() * 10));

// Chooses a number between 1 and 100 and returns it to the browser
document.getElementById("Math").innerHTML = Math.round(Math.random() * 100);

// Doing it by function
function RandomNumbers() {
    let randomNumber = Math.round(Math.random() * 100)
    return randomNumber
}
let random = RandomNumbers()
let elDiv = document.getElementById('div')
elDiv.innerHTML = "<p>Tasodifiy son: " + random + "</p>"

// With button
let elButton = document.querySelector('.button')
elButton.addEventListener("click", function () {
    let RandomNumber = Math.round(Math.random() * 100)
    console.log(RandomNumber);
})