var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//line
ctx.beginPath();
ctx.strokeStyle ="rgb(255,0,0)";
ctx.lineWidth = "5"
ctx.lineTo(85,682);
ctx.lineTo(277,548);
ctx.stroke();
ctx.closePath();

//square
ctx.fillRect(85,301,100,100);
ctx.fillStyle ="yellow"
ctx.stroke = "black";
ctx.linewidth = "5";
ctx.moveTo(226,100);
ctx.fill();
ctx.closePath();

//hex

ctx.beginPath();
ctx.strokeStyle ="#00ffff";
ctx.fillStyle ="#ff00ff";
ctx.lineWidth = "5";
ctx.moveTo(557,308);
ctx.lineTo(668,284);
ctx.lineTo(726,380);
ctx.lineTo(652,466);
ctx.lineTo(545,420);
ctx.closePath();
ctx.fill();

//star
ctx.beginPath();
ctx.strokeStyle ="rgb(32,32,32";
ctx.fillStyle ="#ffff00";
ctx.lineWidth = "5";
ctx.moveTo(636,496);
ctx.lineTo(667,553);
ctx.lineTo(737,567);
ctx.lineTo(688,616);
ctx.lineTo(697,682);
ctx.lineTo(635,654);
ctx.lineTo(575,682);
ctx.lineTo(583,615);
ctx.lineTo(536,566);
ctx.lineTo(603,553);
ctx.closePath();
ctx.fill();

//circle
ctx.strokeStyle = "red";
ctx.fillStyle = "#ffff00";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385,441,67,0, (2* Math.PI) , false);
ctx.lineTo(385,441);
ctx.closePath();
ctx.fill();





