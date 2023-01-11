let firstCard = getRandomCard();
let secondCard = getRandomCard();
let Cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = false;
let hasblackjack = false;
let message = "";

let messageEL = document.getElementById("message-el");
let Sum = document.getElementById("Sum");
let C = document.getElementById("C");


let playerName = "Per";
let playerchips = 145;
let Player = document.getElementById("Player");
Player.textContent = playerName + ": $" + playerchips;

function getRandomCard(){
   let randomcard =  Math.floor(Math.random()*13) + 1;
   if (randomcard > 10){
    return 10
   }else if(randomcard === 1){
    return 11
   }else{
    return randomcard
   }
}

function startGame(){
    isAlive = true;
    renderGame();
}
function renderGame(){
    C.textContent = "Cards: ";
    for(let x = 0; x < Cards.length; x++){
        C.textContent += Cards[x] + " ";
    }
    Sum.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card? 🙂";
    } else if ( sum === 21){
        message = "Wohoo! you've got BlackJack! 🤩";
        hasblackjack = true;
    } else {
        message = "You 're out of the game! 😭";
        isAlive = false;
    }
    messageEL.textContent = message;
}

function newCard(){
    if(isAlive === true && hasblackjack === false){ 
        let card = 6;

        sum += card;
        Cards.push(card);
    
        renderGame();
    }
}