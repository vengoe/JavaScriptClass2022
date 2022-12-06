//canvas stuff
var canvas = document.getElementById('c');
var ctx = canvas.getContext("2d");
//progress
var progress = document.getElementById(health);
var ctx = canvas.getContext("2d");
//Health bar
var health = "healthBar"
var healthBar = 100;
//create instances for images rps
var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();
var bg = new Image();
var bg2 = new Image();    
rock.src = "images/rock.png"
hrock.src = "images/rock2.png"
paper.src = "images/paper.png"
hpaper.src = "images/paper2.png"
scissors.src = "images/scissors.png"
hscissors.src = "images/scissors2.png"
bg.src = "images/background.png"
bg2.src = "images/bg.png"
 

var result = "Select a buttom from above to choose."
hscissors.onload = function(){
    draw(rock, paper, scissors, rock, paper, scissors);
}

document.addEventListener("keydown", keyPressedDown);
document.addEventListener("keyup", keyPressedUp);

var gameOver = true;

function keyPressedDown(e){
    console.log(e.keyCode);

}

function keyPressedUp(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
        gameOver = false;
        draw(rock, paper, scissors, rock, paper, scissors);
    }
    //TRIED TO MAKE A RESET HERE BELOW
    if(health.value <=0){
        restartGame();
    }
}
function restartGame(){
    location.reload();
}
function drawResults(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg2,0,0,1000,600);
    ctx.save()
    ctx.fillStyle = "black";
    ctx.font = "30px Nerko One"
    ctx.textAlign = "center";
    ctx.fillText("You Lose, Please Refresh to Try Again", canvas.width/2, canvas.height/2);
    ctx.restore();
    

}
//TRIED AGAIN BUT FAILED
function draw(rock, paper, scissors, crock, cpaper, cscissors){
   if(gameOver == true){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg,0,0,1000,600);
    ctx.font = "30px Nerko One";
    ctx.textAlign = "center";
    ctx.fillStyle = "White";
    return;
    //if i wanted to add a background image it would go there
   }
   
   //clear canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(bg2,0,0,1000,600);
   ctx.font = "30px Nerko One";
   ctx.textAlign = "center";
   ctx.fillStyle = "White";
   ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 150);
   ctx.drawImage(paper, canvas.width/2 - paper.width/2, 150);
   ctx.drawImage(scissors, canvas.width/2 - scissors.width + 100, 150);
   
   ctx.fillText("Computer Choices", canvas.width/2, 325);
   ctx.drawImage(crock, canvas.width/2 - rock.width/2 - 100, 375);
   ctx.drawImage(cpaper, canvas.width/2 - paper.width/2, 375);
   ctx.drawImage(cscissors, canvas.width/2 - scissors.width + 100, 375);
   ctx.fillText(result, canvas.width/2, 525);
   console.log(document.getElementById("health").value , healthBar)
   if(document.getElementById("health").value <=0){
    drawResults();
   }

}


// ctx.font = "40px squid";
// ctx.fillStyle = "purple";
// ctx.srokeStyle = "yellow";
// ctx.fillText("Welcome to RPS Game", 200, 280);
// ctx.strokeText("Welcome to RPS Game", 200, 280);

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
    //alert("You Clicked " + rps[0]);
    playGame(rps[0]);
});
document.getElementById("paper").addEventListener("click", function (e) {
    //alert("You Clicked " + rps[1]);
    playGame(rps[1]);
});
document.getElementById("scissors").addEventListener("click", function (e) {
    //alert("You Clicked " + rps[2]);
    playGame(rps[2]);
});
function restartGame(){
    location.reload();
}
function playGame(playerChoice){
    if(gameOver == true){
        return;
    }
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "Rock":
            if (cpuChoice == 0) {
                //its a tie
                //alert('CPU chose Rock. Its a tie!');
                result = "CPU chose Rock. Its a tie"
                draw(hrock, paper, scissors, hrock, paper, scissors);
            }
            else if (cpuChoice == 1) {
                let health = document.getElementById("health")
                health.value -= 25;
                //alert('CPU chose Paper, You lose!');
                result = "CPU chose Paper. CPU Wins"
                draw(hrock, paper, scissors, rock, hpaper, scissors);
            }
            else {
                //alert("CPU chose Scissors. You win!");
                result = "CPU chose Scissors. You Win"
                draw(hrock, paper, scissors, rock, paper, hscissors);
            }
            break;
    }

    switch (playerChoice) {
        case "Paper":
            if (cpuChoice == 0) {
                //its a tie
                //alert('CPU chose Rock. You Win!');
                result = "CPU chose Rock. You Win"
                draw(rock, hpaper, scissors, hrock, paper, scissors);
            }
            else if (cpuChoice == 1) {
                //alert('CPU chose Paper, Its a tie!');
                result = "CPU chose Paper. Its a tie"
                draw(rock, hpaper, scissors, rock, hpaper, scissors);
            }
            else {
                let health = document.getElementById("health")
                health.value -= 25;
                //alert("CPU chose Scissors. You lose!");
                result = "CPU chose Scissors. CPU Wins"
                draw(rock, hpaper, scissors, rock, paper, hscissors);
            }
            break;
    }
    switch (playerChoice) {
        case "Scissors":
            if (cpuChoice == 0) {
                let health = document.getElementById("health")
                health.value -= 25;
                //its a tie
                //alert('CPU chose Rock. You lose!');
                result = "CPU chose Rock. CPU Wins"
                draw(rock, paper, hscissors, hrock, paper, scissors);
            }
            else if (cpuChoice == 1) {
                //alert('CPU chose Paper, You Win!');
                result = "CPU chose Paper. You Win"
                draw(rock, paper, hscissors, rock, hpaper, scissors);
            }
            else {
                //alert("CPU chose Scissors. Its a tie!");
                result = "CPU chose Scissors. Its a tie"
                draw(rock, paper, hscissors, rock, paper, hscissors);
            }
            break;
    }
}


