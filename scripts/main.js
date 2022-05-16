burg = document.getElementById("burger");
startButton = document.getElementById("stButton");

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

//var gameStart = false;


document.onkeydown = detectKey;
function detectKey(e) {
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

