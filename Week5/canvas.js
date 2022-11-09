//this is a coment in JavaScript (Line Comment)
/*
Multiline JavaScript Comment
*/
//Definees variable to access the canvas properties
var canvas = document.getElementById("canvas");
//Defines the drawing context of canvas
var ctx = canvas.getContext("2d");

//Draw a rectangle

//Defines the fill color
ctx.fillStyle = "rgb(0,0,255)";
//Defines the outline color
ctx.strokeStyle = "green";
//Defines line width
ctx.lineWidth = "5";

//Finally draw the rectangle fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100); //in order stacked starting first
ctx.strokeRect(30,30,200,100);
 
//draw line
ctx.beginPath();
ctx.moveTo(50,0,);
ctx.lineTo(400,300);
ctx.lineTo(800,0);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="rgb(255,0,0)";
ctx.lineWidth = "5"
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//draw a circle
ctx.fillStyle = "#55ddef";
ctx.strokeStyle = "yellow";
ctx.lineWidth = "2";

ctx.beginPath();
ctx.arc(400,300,50,0, (3* Math.PI)/2  , false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//draw a shape

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(625,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();

//draw an image to canvas
//create instance of image
var mario = new Image();
mario.src ="images/mario.png"
mario.onload = function(){
    ctx.drawImage(mario, 600,300,200,300);
}
