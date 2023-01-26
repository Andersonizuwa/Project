let Darkmodes = document.getElementById("Darkmode");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let body = document.getElementById("Body");
    function Darkmode(){
        if (Darkmodes.classList.contains("fa-moon")) {
            body.style.backgroundColor = "black";
            A.style.color = "lightgray";
            B.style.color = "lightgray";
            C.style.color = "lightgray";
            Darkmodes.style.color = "lightgray";
            Darkmodes.classList.remove("fa-moon");
            Darkmodes.classList.add("fa-sun");
          } else {
            Darkmodes.classList.remove("fa-sun");
            body.style.backgroundColor = "white";
            A.style.color = "black";
            B.style.color = "black";
            C.style.color = "black";
            Darkmodes.style.color = "black";
            Darkmodes.classList.add("fa-moon");
    }
}
