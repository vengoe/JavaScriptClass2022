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
ctx.fillStyle ="yellow"
ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.fillRect(85,301,100,100);
ctx.strokeRect(85,301,100,100);






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
ctx.stroke();

//star
ctx.beginPath();
ctx.strokeStyle = "rgb(32,32,32)";
ctx.fillStyle ="#ffff00";
ctx.lineWidth = "5";
ctx.moveTo(636,496);
ctx.lineTo(668,553);
ctx.lineTo(737,567);
ctx.lineTo(689,616);
ctx.lineTo(697,683);
ctx.lineTo(637,654);
ctx.lineTo(574,683);
ctx.lineTo(583,615);
ctx.lineTo(536,566);
ctx.lineTo(603,553);
ctx.closePath();
ctx.fill();
ctx.stroke();

//circle

ctx.strokeStyle = "red";
ctx.fillStyle = "#ffff00";
ctx.lineWidth = "5";
ctx.beginPath();
ctx.arc(385,441,68,0, (2* Math.PI) , false);

ctx.closePath();
ctx.fill();
ctx.stroke();





