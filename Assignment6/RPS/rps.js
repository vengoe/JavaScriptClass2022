var canvas = document.getElementById('c');
var ctx = canvas.getContext("2d");


//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    //alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                //alert(`You Tied`)
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                ctx.font = "45px 'Courier New', Courier, monospace";
                ctx.fillStyle = "Green";
                ctx.textAlign = "center";
                ctx.fillText("Computer chose rock. Its a tie", canvas.width/2, 100);
            }
            else if(cChoice === 1)
            {
                //display a loss
                //alert(`You Lost`)
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                ctx.font = "45px 'Courier New', Courier, monospace";
                ctx.fillStyle = "Red";
                ctx.textAlign = "center";
                ctx.fillText("Computer chose Paper. CPU Wins", canvas.width/2, 100);
            }
            else
            {
                //display a win
                //alert(`You Won`)
                ctx.clearRect(0, 0 , canvas.width, canvas.height);
                ctx.font = "45px 'Courier New', Courier, monospace";
                ctx.fillStyle = "Blue";
                ctx.textAlign = "center";
                ctx.fillText("Computer chose Scissors. You Win", canvas.width/2, 100);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Win`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Red";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose rock. You Win", canvas.width/2, 100);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`Tie`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Green";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose Paper. Its a tie", canvas.width/2, 100);
                }
                else
                {
                    //display a win
                    //alert(`You Lost`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Blue";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose Scissors. CPU Wins", canvas.width/2, 100);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Lost`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Blue";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose rock. CPU Wins", canvas.width/2, 100);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`You Win`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Red";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose Paper.You Win", canvas.width/2, 100);
                }
                else
                {
                    //display a win
                    //alert(`You Tie`)
                    ctx.clearRect(0, 0 , canvas.width, canvas.height);
                    ctx.font = "45px 'Courier New', Courier, monospace";
                    ctx.fillStyle = "Green";
                    ctx.textAlign = "center";
                    ctx.fillText("Computer chose Scissors. Its a tie", canvas.width/2, 100);
                }
             break;
    }
}
