//  2 types of function
// Function declaration

function calcFunc(a){
    let result = a*a;
    return result;
    console.log("This code doesn't work");
}
console.log(calcFunc(9));

// Function expression

const MyFunc = function(){
    console.log("Hello world!");
}
MyFunc()

function ayirish(a,b){
    return a-b
}

const hisoblash = function(a,b){
    return a-b
}
console.log(ayirish(3,2));
console.log(hisoblash(10,2));

// Arrow function
const kvadrat = (son) => {
    return son*son
}
console.log(kvadrat(7));

// function A(letter){
//     if(letter.length==1){
//         if(letter=="N"){
//             console.log("Love");
//         }
//         else{
//             console.log("None");
//         }
//     }
//     else{
//         console.log(undefined);
//     }
// }
// A("N")