let compScore = 0;
let userScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
    const userScorepara = document.querySelector("#your-score");
    const compScorepara = document.querySelector("#Computer-score");
const drawGame = () =>{
    console.log("Game draw");
        msg.innerText = "Game was Draw! play again";
        msg.style.backgroundColor = "black";
}

const showWinner=(userWin , userChoice , comChoice)=>{
if(userWin)
{
    if(userScore - compScore == 2){
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "#00ff00";
    }
    else{
    userScore++;
    userScorepara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = "You Win!";
     msg.style.backgroundColor = "#00ff00";
    }
}
else{
    if(compScore - userScore == 2){
        msg.innerText = " finnaly You lost this game!";
        msg.style.backgroundColor = "#00ff00";
    }
    else{
    compScore++;
    compScorepara.innerText = compScore;
    console.log("You Lose!");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "#ff0000";
    }
}
};
const genComputerChoice=() =>{
    const option = ["Rock" , "Paper" , "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const playGame = (userChoice) =>{
console.log("user choice = ",userChoice);
const comChoice = genComputerChoice();
console.log("computer choice = " , comChoice);

if(comChoice === userChoice){
drawGame();
}
else{
let userWin = true;
if(userChoice === "Rock"){
    userWin = comChoice==="Paper"? false : true;
}
else if(userChoice==="Paper"){
userWin = comChoice === "Scissors"?false:true;
}
else{
    userWin = comChoice === "Rock"?false:true;
}
 showWinner(userWin,userChoice , comChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
const userChoice = choice.getAttribute("id");

playGame(userChoice);
    });
    
});