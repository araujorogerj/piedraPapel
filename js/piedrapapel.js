var rock = "rock", paper = "paper", scissors = "scissors", win = "Ganaste", draw = "Empate", lose = "Perdiste";
var option, pcOption, result;

function pcSelect(){
    number = Math.floor(Math.random() * 3);
    if(number == 0){
        pcOption = rock;
    } else if(number == 1){
        pcOption = paper;
    } else{
        pcOption = scissors;
    }
    console.log("Opcion de la pc: ", pcOption);
    showImgs();
}

function showImgs(){
    var pcRock = document.getElementById("pc-rock");
    var pcPaper = document.getElementById("pc-paper");
    var pcScissors = document.getElementById("pc-scissors")

    if(pcOption == rock){
        pcRock.style.visibility="visible";
        pcRock.style.opacity="100%";
        pcPaper.style.visibility="hidden";
        pcPaper.style.opacity="0%";
        pcScissors.style.visibility="hidden";
        pcScissors.style.opacity="0%";
    } else if(pcOption == paper){
        pcRock.style.visibility="hidden";
        pcRock.style.opacity="0%";
        pcPaper.style.visibility="visible"
        pcPaper.style.opacity="100%";
        pcScissors.style.visibility="hidden";
        pcScissors.style.opacity="0%";
    } else if(pcOption == scissors){
        pcRock.style.visibility="hidden";
        pcRock.style.opacity="0%";
        pcPaper.style.visibility="hidden"
        pcPaper.style.opacity="0%";
        pcScissors.style.visibility="visible";
        pcScissors.style.opacity="100%";
    } 
    }

function refreshImg(){
    var pcRock = document.getElementById("pc-rock");
    var pcPaper = document.getElementById("pc-paper");
    var pcScissors = document.getElementById("pc-scissors");
    if (pcOption == "null"){
        pcRock.style.visibility="hidden";
        pcRock.style.opacity="0%";
        pcPaper.style.visibility="hidden"
        pcPaper.style.opacity="0%";
        pcScissors.style.visibility="hidden";
        pcScissors.style.opacity="0%";

    }
}


function selectRock(){
    option = rock;
    console.log("Opcion del usuario: ", option)
    gameLogic();
}

function selectPaper(){
    option = paper;
    console.log("Opcion del usuario: ", option)
    gameLogic();
}

function selectScissors(){
    option = scissors;
    console.log("Opcion del usuario: ", option)
    gameLogic();
}

function gameLogic() {
    pcSelect();
    if (option == paper && pcOption == scissors){
        result = lose;
        console.log(lose);
    } else if(option == paper && pcOption == rock){
        result = win;
        console.log(win);
    } else if(option == paper && pcOption == paper){
        result = draw;
        console.log(draw);
    } else if(option == rock && pcOption == paper){
        result = lose;
        console.log(lose);
    } else if(option == rock && pcOption == scissors){
        result = win;
        console.log(win);
    } else if(option == rock && pcOption == rock){
        result = draw;
        console.log(draw);
    } else if(option == scissors && pcOption == rock){
        result = lose;
        console.log(lose);
    } else if(option == scissors && pcOption == paper){
        result = win;
        console.log(win);
    } else {
        result = draw;
        console.log(draw);
    }

    showResult();
}

function showResult(){
    var resultContainer = document.getElementById("result-container");
    var winText = document.getElementById("win-text");
    var loseText = document.getElementById("lose-text");
    var drawText = document.getElementById("draw-text");

    if(result == win){
        resultContainer.style.visibility = "visible";
        resultContainer.style.opacity = "100%";
        winText.style.visibility = "visible";
        drawText.style.visibility = "hidden";
        loseText.style.visibility = "hidden";
    } else if(result == lose){
        resultContainer.style.visibility = "visible";
        resultContainer.style.opacity = "100%";
        winText.style.visibility = "hidden";
        drawText.style.visibility = "hidden";
        loseText.style.visibility = "visible";
    }
}

function restart(){
    var resultContainer = document.getElementById("result-container");

    resultContainer.style.visibility = "hidden";
    resultContainer.style.opacity = "0%";
    result = "";
    pcOption = "null";

    refreshImg();
}