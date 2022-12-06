var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var gameState = []
var currentState = 0
//ship
//var Ship = new Image();
//Ship.src = "images/SpaceShip"
//score variable
var score = 0
var highScore = 0
//ship variables
var ship = new PlayerShip();



function PlayerShip(){
    //ctx.drawImage(ship,0,0,1000,800);
    this.x = canvas.width/2; 
    this.y = canvas.height/2; 
    this.width = 20; 
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    //for the actual ship
    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0,-10);
        ctx.lineTo(10,10);
        ctx.lineTo(-10,10);
        ctx.lineTo(0,-10);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;
        //add boundaries to canvas
        //bottome boundary
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2;
            this.vy = 0;
        }
        //top boundary
        if(this.y < this.height/2){
            this.y = this.height/2;
            this.vy = 0;
        } 
        //right boundary
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
        }
        //left boundary
        if(this.x < this.width/2){
            this.x = this.width/2;
            this.vx = 0;
        }
    }
    


}
    //event listener is for inputs on your website so like movement on a game
    document.addEventListener("keydown",pressKeyDown);
    document.addEventListener("keyup",pressKeyUp);

    function pressKeyDown(e){
        if(!gameOver){
         //you wouldn't use a switch with an if, if you need multiple actions
         if(e.keyCode == 87){
            //(w)up movement 
            ship.up = true
        }
        if(e.keyCode == 65){
            //(a)left movement 
            ship.left = true
        }
        if(e.keyCode == 68){
            //(d)right movement 
            ship.right = true
        }
        if(e.keyCode == 83){
            //(s)down movement
            ship.down = true 
        }
        if(e.keyCode == 38){
            //(arrow)up movement 
            ship.up = true
        }
        if(e.keyCode == 37){
            //(arrow)left movement
            ship.left = true 
        }
        if(e.keyCode == 39){
            //(arrow)right movement
            ship.right = true 
        }
        if(e.keyCode == 40){
            //(arrow)down movement 
            ship.down = true
        }
        }
        //for gameover
        if(gameOver){
            if(e.keyCode == 32){
                gameOver = false;
                currentState = 1;
                scoreTimer();
                main();
            }
        }
    }

    function pressKeyUp(e){
        if(!gameOver){
        //you wouldn't use a switch with an if, if you need multiple actions
        if(e.keyCode == 87){
            //(w)up movement 
            ship.up = false
        }
        if(e.keyCode == 65){
            //(a)left movement 
            ship.left = false
        }
        if(e.keyCode == 68){
            //(d)right movement 
            ship.right = false
        }
        if(e.keyCode == 83){
            //(s)down movement
            ship.down = false 
        }
        if(e.keyCode == 38){
            //(arrow)up movement 
            ship.up = false
        }
        if(e.keyCode == 37){
            //(arrow)left movement
            ship.left = false 
        }
        if(e.keyCode == 39){
            //(arrow)right movement
            ship.right = false 
        }
        if(e.keyCode == 40){
            //(arrow)down movement 
            ship.down = false
        }
    }
    }

//variables for Asteroid Craetions
var numAsteroids = 20;
var asteroids = [];

//class for asteriod objects
function Asteroid(){
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width - this.radius, this.radius);
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height;;
    this.vy = randomRange(10,5);
    this.color = "white";

    this.drawAsteroid = function(){
        //commands to draw Asteroids
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
//for loop to create the first asteroids
for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
}



    if(!gameOver){
        timer = requestAnimationFrame(main);
    }
    //check to see if we needto add more asteroids
    while(asteroids.length < numAsteroids){
        //add and create new asteroids in the array
        asteroids.push(new Asteroid());
    }

//utility function
function randomRange(high,low){
    return Math.random() * (high-low) + low;
}
function detectCollision(distance, calcDistance){
    return distance<calcDistance;
}
function scoreTimer(){
    if(!gameOver){
        score++;

        //adding this to make the game harder by adding more asteroids
        if(score %5 == 0){
            numAsteroids += 10;
            console.log(numAsteroids);
        }
        setTimeout(scoreTimer, 1000)
    }
}

//Asteroid Game State Machine


//main menu
gameState[0] = function(){
    ctx.save();
    ctx.font = '30px Arial';
    ctx.fillStyle= "white"
    ctx.textAlign = "center"
    ctx.fillText("Asteroids Avoider", canvas.width/2, canvas.height/2 - 30);
    ctx.font - "15px Arial";
    ctx.fillText("Press Space To Start", canvas.width/2, canvas.height/2 + 20);
    ctx.restore();
}


//Game Scene
gameState[1] = function(){
    //drawing a score to canvas
    ctx.save();
    ctx.font = "15px Arial";
    ctx.fillStyle = 'White';
    ctx.fillText("Score: " + score.toString(), canvas.width -150, 30);

    ctx.restore();

    //setup vertical movement
    if(ship.up){
        ship.vy =-10;
    }else{
        ship.vy = 3;
    }
    //setup horizontal movement
    if(ship.left){
        ship.vx = -5;
    }else if(ship.right){
        ship.vx = 5;
    }else{
        ship.vx = 0;
    }
       




    for(var i = 0; i<asteroids.length; i++){
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX*dX)+(dY*dY));

        if(detectCollision(distance, (ship.height/2 + asteroids[i].radius))){
            //alert("Hit Asteroid Game Over")
            gameOver = true;
        }
        
        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height;

        }
        //draw asteroids
        asteroids[i].y += asteroids[i].vy;
        asteroids[i].drawAsteroid();


    }
    //ship drawn below :
    ship.drawShip();
    ship.moveShip();
    while(asteroids.length < numAsteroids){
        //add and create new asteroids in the array
        asteroids.push(new Asteroid());
}
}

function main(){
    //clears canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //drawing ship
    //ctx.drawImage(Ship,0,0,1000,800);
    gameState[currentState]();
 //check to see if we needto add more asteroids

    if(!gameOver){
        timer  = requestAnimationFrame(main);
    }
 }
