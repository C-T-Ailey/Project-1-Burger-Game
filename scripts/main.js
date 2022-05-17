var burg = document.getElementById("burger");
var startButton = document.getElementById("stButton");
var gameArea = document.getElementById("gameWindow")

console.log(burg.offsetLeft)

console.log(document.getElementById("pipe-1").offsetLeft);
pipe1Left = document.getElementById("pipe-1").offsetLeft

console.log(document.getElementById("pipe-2").offsetLeft);
pipe2Left = document.getElementById("pipe-2").offsetLeft

console.log(document.getElementById("pipe-3").offsetLeft);
pipe3Left = document.getElementById("pipe-3").offsetLeft

console.log(document.getElementById("pipe-4").offsetLeft);
pipe4Left = document.getElementById("pipe-4").offsetLeft

locArr = [pipe1Left,pipe2Left,pipe3Left,pipe4Left];

var startPos = 0

burg.style.left = locArr[startPos]+"px";


const patty = document.createElement("div");
patty.setAttribute("id","patty");
patty.style.position = "absolute";
patty.style.left = locArr[0]+"px";
patty.style.top = "50px";
patty.style.height = "10px";
patty.style.width = "90px";
patty.style.marginLeft = "15px";
patty.style.backgroundColor = "rgb(56, 38, 26)";
console.log(patty.style.left)
console.log(burg.style.left)
gameArea.appendChild(patty)
console.log("patty generated");


//var gameStart = false;


document.onkeydown = moveBurg;
function moveBurg(e) {
    var posLeft = burg.offsetLeft;
    e = e || window.event;
    if (e.keyCode == '37' && startPos != 0) {
        // left arrow
        burg.style.left = locArr[startPos-1]+"px";
        startPos -= 1
        console.log("leftpress")
        console.log(posLeft)
        //bottomBun.style.left  = 100+"px";
        //console.log(bottomBun.style.left)
    }
    else if (e.keyCode == '39' && startPos != 3) {
        burg.style.left = locArr[startPos+1]+"px";
        startPos += 1
        console.log("rightpress")
        console.log(posLeft)

        // right arrow
        //bottomBun.style.left  = (posLeft+10)+"px";
        //console.log(bottomBun.style.left)
    }
    else if (startPos === 0 || startPos === 3){
        console.log("You're at the end of the counter! You'll drop the burger!")
    }
}


function dropIngredients(){
    var ingredient = patty
    var yPos = 50;
    var xPos = locArr[Math.floor(Math.random()*(locArr.length-1))]+"px"
    console.log(xPos)
    ingredient.style.left = xPos;
    id = setInterval(frame, 5) 
    function frame(){
        if (yPos==gameArea.bottom){
            clearInterval(id)
            console.log("loop end")
        }
        else{
            yPos++;
            ingredient.style.top = yPos+"px"
            console.log(yPos)
        }
    }
}