var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 50;
var finish = 750;

//car variable to make it move
var carPos = 2;
var startFuel = randomNumber(canvas.width, 600);
var fuel = startFuel;
var fuelBarWidth = 300;
var speed = 5;
var gameOver = true;
var carWidth = 50;
//start timer variable
var seconds = 3;
var fps = 60;
var frames = fps;

//game sprite
var carSprite = new Image()
carSprite.src = "images/car.png"


carSprite.onload = function(){
    main();
}
//add the event handler for starting the game
document.addEventListener("keydown", pressSpace);

//add key handler function here
function pressSpace(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false;
    }
    if(fuel <=0){
        restartGame();
    }
}
function main(){
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(gameOver){
        //Main Menu Screen
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "40px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        if(!gameOver && seconds>0){
            runStartTimer();
            drawStartTimer();
        }else{ 
            if(fuel>0){
                //update care position
                carPos+=speed;
                fuel-=speed; 
                }
            
        }        


    drawStartFinishLines();
    //draw the actual car(box for now as a placeholder)
    drawCar();
    drawFuelBar();
    if(fuel<=0 || carPos + carWidth > finish){
        drawResults();
    }
    }
    //refresh the main function by calling the timer again
    timer = requestAnimationFrame(main);
}

function drawStartFinishLines(){
       //draw start line
       ctx.fillStyle = "black";
       ctx.fillRect(start,50,10,500);
       //draw Finish Line
       ctx.fillRect(finish,50,10,500);
}
function drawCar(){
    //ctx.fillStyle = "red";
    //ctx.fillRect(carPos,canvas.height/2,40,20);
    ctx.drawImage(carSprite,carPos,canvas.height/2,40,20);
}

function drawFuelBar(){
    //Draw fuel bar hud
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "Maroon";
    ctx.fillRect(start,30,fuelBarWidth,10);
    ctx.font = "25px Arial";
    ctx.fillStyle = "Orange";
    ctx.fillText("Fuel",start,25)
    if(fuel>0){
        ctx.fillStyle = "Teal";
        ctx.fillRect(start,30,currentBarWidth,10);
}
}
function drawResults(){
    //results for the race
    if(carPos + 40 > finish){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "25px Arial"
        ctx.textAlign = "center";
        ctx.fillText("You Finished the Race!", canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        ctx.save()
        ctx.fillStyle = "black";
        ctx.font = "25px Arial"
        ctx.textAlign = "center";
        ctx.fillText("Ran Out of Fuel :(", canvas.width/2, canvas.height/2);
        ctx.restore();
    }
}
//utility function 
function randomNumber(high,low){
    return Math.round(Math.random() * (high-low) + low);
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames<0){
        frames = fps;
        seconds -= 1;
    }
}
function restartGame(){
    location.reload();
}
function drawStartTimer(){
    if(seconds > 0){
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText(seconds, canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GO!", canvas.width/2, canvas.height/2);
        ctx.restore();
    }
}