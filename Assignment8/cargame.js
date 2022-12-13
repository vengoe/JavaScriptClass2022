var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var start = 58;
var finish = 956;

var car = new PlayerCar();

//car variable to make it move
var carPos = 50;
var startFuel = randomNumber(785, 900);
var fuel = startFuel;
var fuelBarWidth = 512;
var speed = 5;
var gameOver = true;
var carWidth = 50;
this.vx = 0;
this.vy = 0;
//start timer variable
var seconds = 3;
var fps = 60;
var frames = fps;

//game sprite
var carSprite = new Image()
carSprite.src = "images/car.png"
//background
var bg = new Image()
bg.src = "images/track.jpeg"

carSprite.onload = function(){
    main();
    //tried adding boundary to stop car from going off screen here
    this.carSprite = function(){
        this.x += this.vx;
        this.y += this.vy;
        } 
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
        }
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
        ctx.drawImage(bg,0,0,1024,768);
        ctx.save();
        ctx.fillStyle = "black";
        ctx.font = "40px Nerko One ";
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
        

    ctx.drawImage(bg,0,0,1024,768);
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
       ctx.fillStyle = "white";
       ctx.fillRect(start,100,10,600);
       //draw Finish Line
       ctx.fillRect(finish,100,10,600);
}
function drawCar(){
    //ctx.fillStyle = "red";
    //ctx.fillRect(carPos,canvas.height/2,40,20);
    ctx.drawImage(carSprite,carPos,canvas.height/2,40,40)
}

function drawFuelBar(){
    //Draw fuel bar hud
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "black";
    ctx.fillRect(start,75,fuelBarWidth,10);
    ctx.font = "25px Nerko One";
    ctx.fillStyle = "white";
    ctx.fillText("Fuel",start,70)
    if(fuel>0){
        ctx.fillStyle = "red";
        ctx.fillRect(start,75,currentBarWidth,10);
}
}

    function PlayerCar(){
    this.x = canvas.width/2; 
    this.y = canvas.height/2; 
    this.vx = 0;
    this.vy = 0;
        //tried adding boundary here
    this.moveCar = function(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
        carWidth.moveCar();}}}
function drawResults(){
    //results for the race
    if(carPos + 40 > finish){
        ctx.save();
        ctx.fillStyle = "White";
        ctx.font = "25px Nerko One"
        ctx.textAlign = "center";
        ctx.fillText("You Finished the Race!", canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        ctx.save()
        ctx.fillStyle = "White";
        ctx.font = "25px Nerko One"
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
        ctx.fillStyle = "White";
        ctx.font = "30px Nerko One";
        ctx.textAlign = "center";
        ctx.fillText(seconds, canvas.width/2, canvas.height/2);
        ctx.restore();
    }else{
        ctx.save();
        ctx.fillStyle = "White";
        ctx.font = "30px Nerko One";
        ctx.textAlign = "center";
        ctx.fillText("GO!", canvas.width/2, canvas.height/2);
        ctx.restore();
    }
}