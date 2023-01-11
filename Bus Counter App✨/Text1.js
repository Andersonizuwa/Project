// document.getElementById("count-el").innerText = 5;

// function increament(){
//     console.log("The Button Was Cicked");
// }
// console.clear();

// // Sets up race 

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);


// // Finishes Race

// console.log(5);
// console.log(4);
// console.log(3);
// console.log(2);
// console.log(1);
let saveel = document.getElementById("save-el");
var myElement = document.getElementById("intro");
console.log(myElement);

let count = 0;

function increament() {
    count += 1;
    myElement.innerText = count;
}

function save() {
    let countstr = count + " - ";
    saveel.textContent += countstr;
    myElement.textContent = 0;
    count = 0;
}
