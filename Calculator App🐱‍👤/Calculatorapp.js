let num1 = 100;
let num2 = 200;

let input1 = document.getElementById("Input1").textContent = num1;
let input2 = document.getElementById("Input2").textContent = num2;
let hp = document.getElementById("Help")



function Plus(){
    let results = num1 + num2;
    hp.textContent =  "The Sum is : " + results;
}
function Minus(){
    let results = num1 - num2;
    hp.textContent =  "The Sum is : " + results;
}
function Divide(){
    let results = num1 / num2;
    hp.textContent =  "The Sum is : " + results;
}
function Multliply(){
    let results = num1 * num2;
    hp.textContent =  "The Sum is : " + results;
}