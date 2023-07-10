// Task 1
// Create a function getRandomInt that outputs a random integer between 117 and 132 to the .out-1 block. All variables must be inside the function. Run this function.

const out1 = document.querySelector('.out-1');

function getRandomInt (){
    let min = 117;
    let max = 132
    let random = Math.floor( min + Math.random()*(max +1 - min ));
    document.querySelector('.out-1').innerHTML= random


}
getRandomInt()