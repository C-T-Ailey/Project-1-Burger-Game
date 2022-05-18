function range(num1,num2){
    arr = []
    if(num1>num2){
        return "First argument must be less than second.";
    }
    else {
        for (i=num1; i<=num2-1; i++){
            arr.push(i);
        }
    }
    return arr;
}

function areEqual(array1, array2) {
    if (array1.length === array2.length) {
      return array1.every((element, index) => {
        if (element === array2[index]) {
          return true;
        }
  
        return false;
      });
    }
  
    return false;
  }

var burg = document.getElementById("burger");
var bottomBun = document.querySelector("#bun-bottom");
var startButton = document.querySelector("#stButton");
//console.log(startButton)
var gameArea = document.querySelector("#gameWindow")
//console.log(gameArea)

//console.log(document.getElementById("pipe-1").offsetLeft);
pipe1Left = document.getElementById("pipe-1").offsetLeft

//console.log(document.getElementById("pipe-2").offsetLeft);
pipe2Left = document.getElementById("pipe-2").offsetLeft

//console.log(document.getElementById("pipe-3").offsetLeft);
pipe3Left = document.getElementById("pipe-3").offsetLeft

//console.log(document.getElementById("pipe-4").offsetLeft);
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
//console.log("Patty left pos " + patty.style.left)
//console.log( "burger xpos " + burg.style.left)
//gameArea.appendChild(patty)
//patty.style.display = "none";

/*burg.appendChild(patty);
patty.style.position = "absolute";
patty.style.left = "0px"
patty.style.marginLeft = "5px"
patty.style.top = "80%";*/

const tomato = document.createElement("div");
tomato.setAttribute("id","tomato");
tomato.style.position = "absolute";
tomato.style.left = locArr[0]+"px";
tomato.style.top = "50px";
tomato.style.height = "10px";
tomato.style.width = "50px";
tomato.style.marginLeft = "35px";
tomato.style.backgroundColor = "red";

const cheese = document.createElement("div");
cheese.setAttribute("id","cheese");
cheese.style.position = "absolute";
cheese.style.left = locArr[0]+"px";
cheese.style.top = "50px";
cheese.style.height = "5px";
cheese.style.width = "70px";
cheese.style.marginLeft = "25px";
cheese.style.backgroundColor = "orange";

const lettuce = document.createElement("div");
lettuce.setAttribute("id","lettuce");
lettuce.style.position = "absolute";
lettuce.style.left = locArr[0]+"px";
lettuce.style.top = "50px";
lettuce.style.height = "5px";
lettuce.style.width = "85px";
lettuce.style.marginLeft = "17px";
lettuce.style.backgroundColor = "lawngreen";

const topBun = document.createElement("div");
topBun.setAttribute("id","topBun");
topBun.style.position = "absolute";
topBun.style.top = "35px";
topBun.style.marginLeft = "10px";
topBun.style.height = "20px";
topBun.style.width = "100px";
topBun.style.borderRadius = "150px 150px 0 0";
topBun.style.backgroundColor = "rgb(232, 167, 83)";



let ingredients=[patty, cheese, tomato, lettuce, topBun]
let levelIngredients = {
    level1: [patty, cheese, tomato, lettuce, topBun],
    level2: [patty, patty, lettuce, lettuce, cheese, topBun]
}
let arr = []
const target = {
    level1: [bottomBun, patty, cheese, lettuce, tomato, topBun],
    level2: [bottomBun, lettuce, patty, cheese, lettuce, patty, cheese, topBun]
}

burgArr = [bottomBun]

document.onkeydown = moveBurg;
function moveBurg(e) {
    e = e || window.event;
    if (e.keyCode == '37' && startPos != 0) {
        // left arrow
        burg.style.left = locArr[startPos-1]+"px";
        startPos -= 1
        console.log("leftpress")
        //console.log("burg offset " + burg.offsetLeft)
        //console.log("locArr[startPos]" + locArr[startPos])
        //console.log((burg.offsetLeft-10)===locArr[startPos])
        //bottomBun.style.left  = 100+"px";
        //console.log(bottomBun.style.left)
    }
    else if (e.keyCode == '39' && startPos != 3) {
        burg.style.left = locArr[startPos+1]+"px";
        startPos += 1
        //console.log("rightpress")
        //console.log("burg offset " + burg.offsetLeft)
        //console.log("locArr[startPos]" + locArr[startPos])
        //console.log((burg.offsetLeft-10)===locArr[startPos])

        // right arrow
        //bottomBun.style.left  = (posLeft+10)+"px";
        //console.log(bottomBun.style.left)
    }
    else if ((e.keyCode == '37' || e.keyCode == '39') && (startPos === 0 || startPos === 3)){
        console.log("You're at the end of the counter! You'll drop the burger!")
    }
}



function startGame(){
    startButton.style.display = "none";     //Hide the start button
    console.log("")
    currentLevel = levelIngredients.level1      //Set the ingredients array for the current level
    
    
    //console.log("current ingredients:", currentLevel)
    
    function rollIngredient(){
        return currentLevel[Math.floor(Math.random()*(currentLevel.length))];
    }      // Generate the ingredient to drop

    function rollDropLocation(){
        return locArr[Math.floor(Math.random()*(locArr.length))];
    }       // Generate the pipe to drop ingredient from
    
    var ingredient = rollIngredient();
    //var ingredient = patty
    //console.log("ingredient= " + ingredient.getAttribute("id"))
    //ingredient.style.display = "block";
    
    var yPos = 50;  // Starting position of the element to drop (px from top of screen)
    var randomLoc = rollDropLocation();
    var xPos = randomLoc+"px";
    
    //ingredient.style.left = xPos;

    //console.log("array " + randomLoc)
    //console.log("xpos" + xPos)
    //var ingredientPos = locArr.indexOf(randomLoc)
    //console.log("ingredientPos ",ingredientPos)
    //console.log(xPos)
    var catchCap = gameArea.offsetHeight-100;
    var catchZone = range(catchCap,gameArea.offsetHeight);
    var levelFinished = false;

    var id = setInterval(drop, 5) 
    function drop(){
        do {
            gameArea.appendChild(ingredient);
            yPos+=2;
            //console.log(catchCap)
            //console.log(gameArea.offsetHeight)
            ingredient.style.top = yPos+"px"
            ingredient.style.left = xPos;
            if(yPos >= gameArea.offsetHeight && burg.offsetLeft-10!=randomLoc){
                console.log("Not caught!");
                yPos = 50;
                ingredient = rollIngredient()
                randomLoc = rollDropLocation()
                xPos = randomLoc+"px";
                console.log ("rerolled ingredient: ", ingredient.getAttribute("id"))
                console.log("rerolled location: ", xPos)
            }
            else if (catchZone.includes(yPos) && burg.offsetLeft-10===randomLoc){
                console.log("Caught!")
                burgArr.push(ingredient);
                console.log(burgArr)
                let ingr = ""
                let ingrHeight = 0
                burgArr.forEach(element => {
                    ingr = element.style.height.replace("px","")
                    if(ingr==''){
                        ingr=0;
                    }
                    ingrHeight += parseInt(ingr)
                });
                var positionHeight = ingredient.style.height.replace("px","")
                var positionTop = 90 - parseInt(ingrHeight)
                var ingrWidth = ingredient.style.width.replace("px","")
                var positionWidth = (100 - parseInt(ingrWidth))/2
                clearInterval(id)
                console.log("loop end")
                yPos = 50
                console.log((burg.offsetLeft-10)===randomLoc)

                burg.appendChild(ingredient)
                console.log(ingredient)
                console.log("burgArr", burgArr)
                ingredient.style.position = "absolute";
                ingredient.style.left = "0px";
                ingredient.style.marginLeft = positionWidth+"px";
                ingredient.style.top = positionTop+"px";
                let removeIndex = currentLevel.indexOf(ingredient)
                currentLevel.splice(removeIndex,1);
                console.log("after splice: ", currentLevel)
                //startButton.style.display = "inline-block";
                if (currentLevel.length > 0) {
                    startGame()
                    console.log("new loop")
                } else {
                    levelFinished = true;
                    console.log("Level finished!")
                    clearInterval(id)
                    if(areEqual(target.level1, burgArr)===true){
                        console.log("Congratulations! You got the order right.")
                        startButton.style.display = "inline-block";
                        startButton.innerHTML = "You got the order right!<br>Next Level"
                    } else {
                        console.log("You messed up, man! You're fired!")
                        console.log(burgArr)
                        burgArr = [bottomBun]
                        currentLevel = levelIngredients.level1
                        console.log(currentLevel)
                        
                        startButton.style.display = "inline-block";
                        startButton.innerHTML = "You got the order wrong!<br>Start Again"

                    }
                }
            }
        } while (levelFinished = false); 

        /*if (catchZone.includes(yPos) && burg.offsetLeft-10===randomLoc){
            //console.log(tomato.style.height)
            burgArr.push(ingredient);
            //var ingredient = burgArr[burgArr.length-1]
            console.log(burgArr)
            let ingr = ""
            let ingrHeight = 0
            burgArr.forEach(element => {
                //console.log(element, element.style.height)
                ingr = element.style.height.replace("px","")
                if(ingr==''){
                    ingr=0;
                }
                //console.log(ingr)
                ingrHeight += parseInt(ingr)
            });
            //console.log(ingrHeight)
            var positionHeight = ingredient.style.height.replace("px","")
            var positionTop = 90 - parseInt(ingrHeight)
            var ingrWidth = ingredient.style.width.replace("px","")
            var positionWidth = (100 - parseInt(ingrWidth))/2
            //console.log("positionTop", positionTop)
            clearInterval(id)
            console.log("loop end")
            yPos = 50
            //ingredient.style.position="absolute";
            //ingredient.style.display = "none"
            console.log((burg.offsetLeft-10)===randomLoc)

            burg.appendChild(ingredient)
            console.log(ingredient)
            console.log("burgArr", burgArr)
            ingredient.style.position = "absolute";
            ingredient.style.left = "0px";
            ingredient.style.marginLeft = positionWidth+"px";
            ingredient.style.top = positionTop+"px";
            let removeIndex = currentLevel.indexOf(ingredient)
            currentLevel.splice(removeIndex,1);
            console.log("after splice: ", currentLevel)
            startButton.style.display = "inline-block";
            //caught = true;
        }
        


        /*else if (yPos===gameArea.offsetHeight && burg.offsetLeft-10!=randomLoc) {
            console.log("Not caught!")
            yPos = 50;
            
        }
        else{
            yPos++;
            ingredient.style.top = yPos+"px"
        }*/
    }
}

//console.log("gameArea " + gameArea.offsetHeight)


startButton.addEventListener("click", startGame)



//dropIngredients()