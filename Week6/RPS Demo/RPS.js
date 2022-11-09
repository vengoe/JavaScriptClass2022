//canvas stuff
var canvas = document.getElementById('c');
var ctx = canvas.getContext("2d");

ctx.font = "40px squid";
ctx.fillStyle = "purple";
ctx.srokeStyle = "yellow";
ctx.fillText("Welcome to RPS Game", 200, 280);
ctx.strokeText("Welcome to RPS Game", 200, 280);

//alert('you stink');
//Array datatype
var rps = ["rock", "paper", "scissors"];
//Another way to define an array
var rps = new Array();
//Third way
var rps = [];
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"



document.getElementById("rock").addEventListener("click", function (e) {
    alert("You Clicked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    alert("You Clicked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    alert("You Clicked " + rps[2]);
    playGame(rps[2]);
});

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //its a tie
                alert('CPU chose Rock. Its a tie!');
            }
            else if (cpuChoice == 1) {
                alert('CPU chose Paper, You lose!');
            }
            else {
                alert("CPU chose Scissors. You win!");
            }
            break;
    }

    switch (playerChoice) {
        case "Paper":
            if (cpuChoice == 0) {
                //its a tie
                alert('CPU chose Rock. You Win!');
            }
            else if (cpuChoice == 1) {
                alert('CPU chose Paper, Its a tie!');
            }
            else {
                alert("CPU chose Scissors. You lose!");
            }
            break;
    }

    switch (playerChoice) {
        case "Scissors":
            if (cpuChoice == 0) {
                //its a tie
                alert('CPU chose Rock. You lose!');
            }
            else if (cpuChoice == 1) {
                alert('CPU chose Paper, You Win!');
            }
            else {
                alert("CPU chose Scissors. Its a tie!");
            }
            break;
    }

}
