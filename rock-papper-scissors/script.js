let randEl = document.getElementById("rand");
let chooseEl = document.getElementById("choose");
let buttonEl = document.querySelectorAll("#button");
let RandScore = document.getElementById("randScore");
let ChooseScore = document.getElementById("chooseScore");
let scoreCamputer = 0;
let scorePlayer = 0;
let flag = true;

let randArr = ["rock","papper","scissor"];
buttonEl.forEach((button)=>{
    button.addEventListener("click",renderGame)
});
 

function renderGame(){
    chekWinner();
    if(flag){
    randEl.textContent = randavl();
    chooseEl.textContent = this.value;
    winner();
    RandScore.textContent = scoreCamputer;
    ChooseScore.textContent = scorePlayer;
    }
    
}


function randavl(){
    let rand =Math.floor(Math.random()*3);
    return randArr[rand];
}

function winner(){
    let player = chooseEl.innerHTML;
    let computer = randEl.innerHTML;

    if(player == computer){
        alert("teko")
    }
    if(player == "rock"){
        if(computer == "papper"){
            scoreCamputer++;
        }else if(computer == "scissor"){
            scorePlayer++;
        }
    }
    if(player == "papper"){
        if(computer == "scissor"){
            scoreCamputer++;
        }else if(computer == "rock"){
            scorePlayer++;
        }
    }
    if(player === "scissor"){
        if(computer === "rock"){
            scoreCamputer++;
        }else if(computer === "papper"){
            scorePlayer++;
        }
    }
}

function chekWinner(){
    if(scorePlayer == 3){
        alert('player win');
        flag = false;
        location.reload();
    }
    if(scoreCamputer == 3){
        alert('computer win');
        flag = false;
        location.reload();
    }
}