function sum(numbers){
    let sum = 0
    for (i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}   

const sum2 = (numbers) => {
    let sum = 0
    for (i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}
let arr = [1, 5.2, 4, 0, -1]
console.log(sum(arr));

function evenOrOdd(x){
    if(x%2===0){
        console.log(`${x} is odd number`);
    }
    else{
        console.log(`${x} is even number`);
    }
}
evenOrOdd(5)