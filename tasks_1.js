// Task 1
// Create a function getRandomInt that outputs a random integer between 117 and 132 to the .out-1 block. All variables must be inside the function. Run this function.

const out1 = document.querySelector('.out-1');

function getRandomInt (){
    let min = 117;
    let max = 132
    let random = Math.floor( min + Math.random()*(max +1 - min ))
    document.querySelector('.out-1').innerHTML= random


}
getRandomInt()

// Task 2...
// Let's make it a little more complicated. Now the first task is strictly tied to the values 117 and 132. Write a function getRandomInt2, which generates a random integer in this range based on min, max and outputs it in out-2. Run this function.

const out2 = document.querySelector('.out-2', );
let min = 888;
let max = 900;
function getRandomInt2(){
    let random = Math.floor( min + Math.random()*(max +1 - min ))
    document.querySelector('.out-2').innerHTML= random
}
getRandomInt2()






// Task 3.
// Don't forget that functions can be called inside another function. Write a function t3 that triggers when the .b-3 button is clicked, and triggers the hello, and f2021 functions. If done correctly, you will see the text hello 2021 inside .out-3.

const out3 = document.querySelector('.out-3');

function hello() {
    out3.innerHTML = 'Hello ';
}

function f2021() {
    out3.innerHTML += 2021;
}


function t3() {
    hello();
    f2021()
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4
// Yes, we have worked out how to run one function inside another, but now we will make the task a bit more complicated so that you can understand how you can put one function inside another. A caveat, it impairs readability and code parsing, so use this method wisely. Now we will create two functions hello, which outputs the text 'Hello ' in out-4 and f2021, which will run hello and output += 2021. These functions have already been written, check them out. Note, they are written inside the t4 function. Why? Because if we just write them in the code, they will obfuscate functions with the same names higher up in the code! And we don't need that.
// What is the essence of the task? Write a function, t4_1, that runs the t4 function when the .b-4 button is clicked.
// Notice how we run functions t4_1-> t4->f2021->hello

const out4 = document.querySelector('.out-4');


function t4() {
    function hello() {
        out4.innerHTML = 'Hello ';
    }
    function f2021() {
        hello();
        out4.innerHTML += 2021;
    }
    f2021();
}

function t4_1 (){

    function t4() {
        function hello() {
            out4.innerHTML = 'Hello ';
        }
        function f2021() {
            hello();
            out4.innerHTML += 2021;
        }
        f2021();
    }
    t4()
}

document.querySelector('.b-4').addEventListener('click', t4_1);



// Task 5
// Tired? We have two functions. One is even, the other is odd. Write a function t5 that gets a number from input.i-5, checks it for parity and runs even if the number is even and odd if it is not.

const out5 = document.querySelector('.out-5');

function odd() {
    out5.textContent = 'odd';
}

function even() {
    out5.textContent = 'even';
}

function t5() {
    let v= document.querySelector('.b-5').value
    if (v %2 === !0){
        odd()

    }else {
        even()
    }
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6
// Let's complicate the task. We have a function getRandomInt2 that uses the variables min, max to output a random integer into .out-2. Write a function t6 that runs getRandomInt2, then gets the generated number from .out-2 and determines whether it is even or not. If it is even, it runs the even function, if not, it runs the odd function. Note how the even and odd functions are written.

const out6 = document.querySelector('.out-6');

function t6() {
    let v = document.querySelector('.out-2', ).value

    function odd() {
        out6.textContent = 'odd';
    }
    function even() {
        out6.textContent = 'even';
    }
    min = 10000;
    max = 10099;
    getRandomInt2()

    if (v %2 === 0){
        even ()
    }else {
        odd ()
    }

}

document.querySelector('.b-6').addEventListener('click', t6);



// Task 7
// The variable z7 is equal to 91. When the button b-7 is clicked, the function t7 is started, which increments the variable z7 by one and outputs to out-7. Add a condition that if z7 equals 100, we don't increment z7 further.

const out7 = document.querySelector('.out-7');
let z7 = 91;

function t7() {
    if(z7 < 100){
        z7 ++
    }else {
        return
    }
    out7.innerHTML = z7


}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8
// The variable z8 is 0. Write a function t8 which, when .b-8 is clicked, increments z8 by one and runs the showNumber function. If the number z8 is 9, it becomes 0 on the next click.

const out8 = document.querySelector('.out-8');
const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let z8 = 0;

function showNumber() {
    out8.innerHTML = digit[z8];
}

function t8() {
    z8 ++ ;
    showNumber()
    if(z8 === 9){
        z8 = 0
    }

}

document.querySelector('.b-8').addEventListener('click', t8);



// Task 9
// Write a function t9 that, depending on the value of the variable z9, makes option s.9 active with the same value. Attention, z9 can have values 1, 2, 3, 4, 5. Actions are triggered by the .b-9 button.

let z9 = 3;
const s9 = document.querySelector('.s-9');

function t9() {
    if(z9 > 0 && z9<6){
        s9.value = z9
    }
}

document.querySelector('.b-9').addEventListener('click', t9);

// Task 10
// Write a function that searches the ar10 array and writes only numbers from ar10 into ar10_res. At the end of the t10 function, run the showArr function to output the array.

const out10 = document.querySelector('.out-10');
let ar10 = [1, 2, 3, '4', '22', 8];
let ar10_res = [];

function showArr() {
    out10.textContent = ar10_res.join('_');
}

function t10() {
    for (let i = 0 ; i < ar10.length; i++){
        console.log(ar10[i])

        ar10_res.push(ar10[i])
    }
    showArr()

}


document.querySelector('.b-10').addEventListener('click', t10);