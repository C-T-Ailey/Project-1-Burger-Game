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
    //console.log(array1.length)
    //console.log(array2.length)
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            elementClass = element.getAttribute("class");
            arr2Class = array2[index].getAttribute("class")
            //console.log(elementClass)
            //console.log(arr2Class)
            if (elementClass === arr2Class) {
                return true;
        }
  
        return false;
      });
    }
  
    return false;
  }

var burg = document.getElementById("burger");
console.log(burg.childNodes)
var bottomBun = document.querySelector("#bun-bottom");
var startButton = document.querySelector("#stButton");
//console.log(startButton)
var gameArea = document.querySelector("#gameWindow");
var titleDiv = document.getElementById("title")
var titleText = document.getElementById("textTitle")
var correctOrders = document.querySelector("#correct")
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
const patty2 = document.createElement("div");
const patty3 = document.createElement("div");
patties = [patty, patty2, patty3];
patty.setAttribute("id","patty");
patties.forEach(element => {
    element.setAttribute("class","patty");
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "10px";
    element.style.width = "90px";
    element.style.marginLeft = "15px";
    element.style.backgroundColor = "rgb(56, 38, 26)";
});
console.log("Patties! ", patties)

const tomato = document.createElement("div");
const tomato2 = document.createElement("div");
const tomato3 = document.createElement("div");
tomatoes = [tomato, tomato2, tomato3];
tomato.setAttribute("id","tomato");
tomatoes.forEach(element =>{
    element.setAttribute("class", "tomato");
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "10px";
    element.style.width = "50px";
    element.style.marginLeft = "35px";
    element.style.backgroundColor = "red";
});
console.log("Tomatoes!", tomatoes)

const cheese = document.createElement("div");
const cheese2 = document.createElement("div");
const cheese3 = document.createElement("div");
cheeses = [cheese, cheese2, cheese3];
cheese.setAttribute("id","cheese");
cheeses.forEach(element => {
    element.setAttribute("class", "cheese")
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "5px";
    element.style.width = "70px";
    element.style.marginLeft = "25px";
    element.style.backgroundColor = "orange";
});
console.log("Cheeses christ! ", cheeses)

const lettuce = document.createElement("div");
const lettuce2 = document.createElement("div");
const lettuce3 = document.createElement("div");
lettuces = [lettuce, lettuce2, lettuce3]
lettuce.setAttribute("id","lettuce");
lettuces.forEach(element => {
    element.setAttribute("class", "lettuce")
    element.style.position = "absolute";
    element.style.left = locArr[0]+"px";
    element.style.top = "50px";
    element.style.height = "5px";
    element.style.width = "85px";
    element.style.marginLeft = "17px";
    element.style.backgroundColor = "lawngreen";
});
console.log("Lettuce pray!", lettuces)

const topBun = document.createElement("div");
const topBun2 = document.createElement("div");
topBuns = [topBun, topBun2]
topBun.setAttribute("id","topBun");
topBuns.forEach(element => {
    element.setAttribute("class", "topBun")
    element.style.position = "absolute";
    element.style.top = "35px";
    element.style.marginLeft = "10px";
    element.style.height = "20px";
    element.style.width = "100px";
    element.style.borderRadius = "150px 150px 0 0";
    element.style.backgroundColor = "rgb(232, 167, 83)";
});



let ingredients=[patty, cheese, tomato, lettuce, topBun]
let levelIngredients = {
    level1: [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun, topBun2]

    //level2: [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun]
}

function restock(){
    levelIngredients.level1 = [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun,topBun2]
    //levelIngredients.level2 = [patty, patty2, patty3, cheese, cheese2, cheese3, tomato, tomato2, tomato3, lettuce, lettuce2, lettuce3, topBun]
}

const target = {
    level1: [bottomBun, patty, cheese, lettuce, tomato, topBun],
    level2: [bottomBun, lettuce, patty, cheese, lettuce, patty, cheese, topBun]
}


console.log("level 1 ingredients list")
/*burgArr.forEach(element => {
    console.log(element.getAttribute("class"))
});

console.log("")
console.log("level 2 ingredients list")
target.level1.forEach(element => {
    if (element.getAttribute("id")!="bun-bottom"){
        console.log(element.getAttribute("id"))
    }
});*/

burgArr = [bottomBun]

/*function compareResult(array1,array2){
    arr1 = []
    array1.forEach(element => {
        
    });
}*/

document.onkeydown = moveBurg;
function moveBurg(e) {
    e = e || window.event;
    if (e.keyCode == '37' && startPos != 0) {
        // left arrow
        burg.style.left = locArr[startPos-1]+"px";
        startPos -= 1
        console.log("leftpress")
    }
    else if (e.keyCode == '39' && startPos != 3) {
        // right arrow
        burg.style.left = locArr[startPos+1]+"px";
        startPos += 1
        console.log("rightpress")
        
    }
    else if ((e.keyCode == '37' || e.keyCode == '39') && (startPos === 0 || startPos === 3)){
        console.log("You're at the end of the counter! You'll drop the burger!")
    }
}

var speed = 2;
var currentLevel = 0;

function startGame(){
    
    startButton.style.display = "none";     //Hide the start button
    titleDiv.style.display = "none";
    console.log("")
    //console.log("Current Level: ", currentLevel)
    
    function setIngredients(){
        if (currentLevel===1){
            console.log("level1")
            return levelIngredients.level1;
        }
        else if (currentLevel===2){
            console.log("level2")
            return levelIngredients.level2;
        }
    }
    var currentIngredients = levelIngredients.level1;
    //var currentIngredients = setIngredients();
    //console.log("Level ingredients: ", currentIngredients)
    
    
    function rollIngredient(){
        return currentIngredients[Math.floor(Math.random()*(currentIngredients.length))];
    }      // Generate the ingredient to drop
    
    function rollDropLocation(){
        return locArr[Math.floor(Math.random()*(locArr.length))];
    }       // Generate the pipe to drop ingredient from
    
    var ingredient = rollIngredient();
    //var ingredient = patty
    //console.log("Rolled ingredient= " + ingredient.getAttribute("id"))
    //ingredient.style.display = "block";
    
    var yPos = 50;  // Starting position of the element to drop (px from top of screen)
    var randomLoc = rollDropLocation();
    var xPos = randomLoc+"px";
    

    function speedIncrease(){
        return speed += .5;
    }
    
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
        //do {
            gameArea.appendChild(ingredient);
            yPos+=speed;
            //console.log(catchCap)
            //console.log(gameArea.offsetHeight)
            ingredient.style.top = yPos+"px"
            ingredient.style.left = xPos;
            if(yPos >= gameArea.offsetHeight && burg.offsetLeft-10!=randomLoc){
                //console.log("Not caught!");
                yPos = 50;
                ingredient = rollIngredient()
                randomLoc = rollDropLocation()
                xPos = randomLoc+"px";
                //console.log ("rerolled ingredient: ", ingredient.getAttribute("id"))
                //console.log("rerolled location: ", xPos)
            }
            else if (catchZone.includes(yPos) && burg.offsetLeft-10===randomLoc){
                //console.log("Caught!")
                burgArr.push(ingredient);
                //console.log(burgArr)
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
                //console.log("loop end")
                yPos = 50
                //console.log((burg.offsetLeft-10)===randomLoc)

                burg.appendChild(ingredient)
                //console.log(ingredient)
                //console.log("burgArr", burgArr)
                ingredient.style.position = "absolute";
                ingredient.style.left = "0px";
                ingredient.style.marginLeft = positionWidth+"px";
                ingredient.style.top = positionTop+"px";
                let removeIndex = currentIngredients.indexOf(ingredient)
                currentIngredients.splice(removeIndex,1);
                //console.log("after splice: ", currentIngredients)
                //startButton.style.display = "inline-block";
                //levelFinished = true;
                if(areEqual(target.level1, burgArr)===true){
                    console.log("Level finished!")                    
                    clearInterval(id)
                    //if(areEqual(target.level1, burgArr)===true){
                        console.log("Congratulations! You got the order right.")
                        startButton.style.display = "inline-block";
                        titleDiv.style.display = "block";
                        titleText.innerHTML = "Another satisfied customer!"
                        startButton.innerHTML = "Next, please!"
                        currentLevel += 1
                        correctOrders.innerHTML = `Correct orders: ${currentLevel}`;
                        speedIncrease();
                        nextLevel = true;
                        burgArr = [bottomBun];
                        restock()
                        let burgLength = burg.childElementCount
                        //console.log(burgLength)
                        //console.log(burg.children.length)
                        //console.log(burg.children)
                        for (i=burgLength;i>1;i--){
                            //console.log("to remove: ", burg.children[1])
                            burg.removeChild(burg.children[1])
                            //console.log("Remaining removals: ", burg.children)
                            //console.log("remaining elements: ", burgLength)
                        }
                        burgLength = burg.childElementCount
                        //console.log(burgLength)
                        //console.log(burg)
                        console.log("Current level: ",currentLevel)
                        console.log("Speed = ", speed)
                        
                        startButton.style.display = "inline-block";
                } else if (burg.childElementCount > target.level1.length) {
                    console.log("Level finished!")                    
                    clearInterval(id)
                    console.log("You messed up, man! You're fired!")
                    startButton.style.display = "inline-block";
                    titleDiv.style.display = "block";
                    titleText.innerHTML = "You're fired!"
                    startButton.innerHTML = "New Hire"
                    currentLevel = 0;
                    correctOrders.innerHTML = "Correct orders: 0";
                    console.log(currentLevel)
                    speed = 2;
                    console.log(speed)
                    //console.log(burgArr)
                    burgArr = [bottomBun]
                    restock()
                    let burgLength = burg.childElementCount
                    //console.log(burgLength)
                    //console.log(burg.children.length)
                    //console.log(burg.children)
                    for (i=burgLength;i>1;i--){
                        //console.log("to remove: ", burg.children[1])
                        burg.removeChild(burg.children[1])
                        //console.log("Remaining removals: ", burg.children)
                        //console.log("remaining elements: ", burgLength)
                        
                    }
                    burgLength = burg.childElementCount
                    //console.log(burgLength)
                    //console.log(burg)
                    /*burg.childNodes.forEach(element => {
                        if (element != bottomBun && element.innerText != " "){
                            console.log(element)
                            burg.removeChild(element)
                            console.log("Child removed")
                        }
                    })*/

                    /*levelIngredients.level1.forEach(element => {
                        burg.removeChild(element)
                    });
                    console.log(levelIngredients.level1)*/
                    
                    
                    
//                    } else if (currentIngredients.length > 0) {
                    } else {

                        startGame()
                        //console.log("new loop")
                    }
                }
            }
        }
        //} while (levelFinished = false); 

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
    //}
//}

//console.log("gameArea " + gameArea.offsetHeight)


startButton.addEventListener("click", startGame)



//dropIngredients()