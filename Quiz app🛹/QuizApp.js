let firstoff = document.getElementById("October");
let btn = document.getElementById("btn");
let hp = document.getElementById("Help");
let ik = document.getElementById("IK");



let Date22 = 2;

function Validation(){
    if(firstoff.value == Date22){
        hp.textContent = "Correct Awnser You're Good!✔";
    }else{
        hp.textContent = "failed, Try again Later";
} 

if(firstoff.value == ""){
    hp.textContent = "Put your anwser!!!"
}

       }
       

  
       let img = document.getElementById("img1");

       function DarkMode(){
        img.style.backgroundColor = "black";
        ik.style.color = "white";
        hp.style.color = "white"
       }
       function LightMode(){
        img.style.backgroundColor = "white";
        ik.style.color = "black";
        hp.style.color = "black";
       }

       function tryagain(){
        let Questions = ["30 and 28",
        "40 and 38",
        "50 and 28",
        "2 and 28"
    ];

for(x = 0; x < Questions.length; x++){
    ik.textContent += Questions[x] + " ";
    hp.textContent = "";
}
       }
