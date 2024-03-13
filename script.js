// Executing JavaScript operations in the browser

// document.getElementById("title").innerHTML = "JavaScriptni o'rganamiz" 

// let userInput = prompt('Ism yozing')
        
// document.getElementById("text").innerHTML = "Assalomu aleykum"

// function resetBtn() {
//     document.getElementById("text").innerHTML = "Assalomu aleykum"
// }

let givingStyleBtn = document.getElementById('styleBtn')

givingStyleBtn.addEventListener('click', function () {
    givingStyleBtn.style.backgroundColor = 'blue';
    givingStyleBtn.style.color = 'white';
})