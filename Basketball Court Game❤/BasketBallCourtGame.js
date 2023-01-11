let inner1 = document.getElementById("Inner1");
let inner2 = document.getElementById("Inner2");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

let one1 = document.getElementById("one1");
let two2 = document.getElementById("two2");
let three3 = document.getElementById("three3");

let count = 0;


function One(){
    count++;
    inner1.textContent = count;
}
function Two(){
    count += 2;
    inner1.textContent = count;
}
function Three(){
    count += 3;
    inner1.textContent = count;
}

let count2 = 0;
function One1(){
    count2++;
    inner2.textContent = count2;
}
function Two2(){
    count2 += 2;
    inner2.textContent = count2;
}
function Three3(){
    count2 += 3;
    inner2.textContent = count2;
}