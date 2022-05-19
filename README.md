# Project 1: Burger Builder
## "Welcome to Burger Monarch, may I take your order?"

### <ins>Technologies Used</ins>
* HTML
* CSS
* Flexbox
* Plain Javascript

### <ins>Wireframes and User Stories</ins>
[Wireframe concept and game plan](https://raw.git.generalassemb.ly/cailey90/Project-1-Burger-Game/master/Burger%20Game%20Wireframe%2BConcept.jpg?token=AAAKQEI5YRB5D2HI6E4SWQ3CR74KI)
* User Stories
  * As a new player, I want to see the rules so I can understand how to play before I begin.
  * As a new player, I want to click a button so I can begin the game when I'm ready.
  * As a player, I want to see the structure of the burger which is my objective, so I know in which order I should be catching ingredients.
  * As a player, I want to be able to manipulate the cursor in the form of a burger bun, so I can catch ingredients and build my burger.
  * As a player, I want to see my ingredients stacked up as I catch them, so I can identify my progress and see if I am matching the objective.
  * As a victorious player, I want to see a message indicating my victory, so I clearly know I have successfully completed the level.
  * As a victorious player, I want to see my completed burger, so I know I have correctly matched the objective.
  * As a victorious player, I want to click a marked progression button, so I can proceed to the next level of the game.
  * As a losing player, I want to see a message indicating my loss, so I clearly know I have failed to complete the level.
  * As a losing player, I want to click a marked restart button, so I can replay the game from the start.

### <ins>Planning and Development</ins>
### Planning
* The planning stage was relatively straightforward; of the few ideas I had, the concept of a burger building game seemed the most engaging and most viable. I felt that the concept of having an established objective to work towards while randomised burger components fall from the top of the screen was a solid idea for a simple gameplay loop, and would lend itself well to variety as the game progressed by facilitating a wider range of ingredients, more complex burgers to construct, and faster falling rates for the components.

### Development, Day 1
* My objective for Day 1 was to stake out the basic layout elements of which the game would comprise, i.e. the sidebar, the drop pipes, the start button, and the bun base which would serve as the player cursor. This was a relatively swift process consisting of very basic <div> elements with plain text.
* The next objective was applying basic styling to the existing elements. The pipes needed to be spaced evenly at the top of the screen; the natural solution to this problem was to simplify the process by employing Flexbox. The other elements were simple enough to place with standard CSS rules.
* After this came the time to implement some basic functionality. The first task I opted to tackle was making it possible for the player to move the "bottom bun" of their burger, so that the core mechanic of catching ingredients at various drop points could be facilitated. This task worked by the end of Day 1, but took up the entire day in the process. Ultimately, the solution to this was simple enough -- it proved to be a matter of logging the positions of the drop pipes at the top of the screen, storing them in variables, and employing an if/else if function to log key presses and move the cursor left or right to the pipe location beside its current position.

### Development, Day 2
* After getting the cursor to move on a left/right key press, the next step was implementing the falling burger components. After using DOM manipulation to create a "burger patty" div and add adequate styling to it, I built a function containing a setInterval method which would randomly select one of the four drop pipes, spawn the ingredient directly below it, and cause it to move vertically down the screen towards the bottom of the game area. Unfortunately it would take a great deal more work to get the ingredient to stop falling beyond the edge of the game area.
* The rest of Day 2 was spent trying to get the cursor to catch ingredients, which was eventually accomplished by detecting if the ingredient had hit the precise Y-coordinate on the screen which indicated the bottom of the game area while the cursor was in that same position. With some assistance from the class instructor, I was also able to get the ingredients to stack on top of each other. However, this introduced a fresh challenge where ingredients would continue to respawn at the drop pipes and, in doing so, remove themselves from the visible stack of ingredients. This had been enough progress for one day; the rest could wait until tomorrow.

### Development, Day 3
* Day 3 was a day of major breakthroughs all around. A few hours of hard graft yielded results in getting missed ingredients to be randomly rerolled and respawned at a new drop point, and the problem of vanishing burger components was solved by creating a list of the ingredients for the level and splicing them from the list once caught, until all ingredients available had been caught. This was a sub-optimal solution, since it would mean less variety of ingredients to catch was available as the game progressed, but as it meant the game was closer to being functional, it was an acceptable trade-off.
* Further work resulted in the creation of "win" and "lose" states for the game; if an array of the components in the player's constructed burger was identical to an array of the components in a pre-set "target" array, the player would win; otherwise, if the arrays were not in the same order, the player would lose.
* The next step was to get the game to progress to a "new level" after successfully passing the round, or starting over if the round was failed. Starting over was easily accomplished by re-setting all variables which had been changed in the course of the game to their initial states, but moving on to a new level with extra ingredients and a new objective proved unfeasible with the game in its current state. Every issue present in the early stages of building the first level reared their ugly heads once again, and after a day of multiple successes, this seemed to be a fine place to leave it.

### Development, Day 4
* With the remaining time growing ever shorter, resolutions had to be made; level progression as I had originally envisioned it would have to be revised. I managed to implement some of my original concepts by creating multiple elements with the same class to stand in as "identical" copies for each ingredient, so that the variety of random drops wouldn't appear as visibly impacted by catching them as before. The win condition was rewritten to check that each ingredient in the two comparison arrays would check for the classes of those elements, rather than the element names themselves; the finishing touch to the code itself came with implementing at least _some_ indication of level progression by incrementing the rate at which the ingredients would descend by 0.5px per level completed, and resetting back to default when the player loses.
* The rest of the day was occupied by therapeutic CSS styling and sourcing some appropriately fast food-themes resources for backgrounds. The hard part was done, and now I could take it (relatively) easy.

### <ins>Unsolved Problems and Future Goals</ins>
* I would really like to implement my original plan for each level having new burgers of increasing complexity to construct, and I'd also like to replace some of the resources used in styling with others which are less rudimentary and a little more aesthetically pleasing. If I could eventually meet these goals, I would consider the project a resounding success.

### <ins>Solving for the Win</ins>
* The win condition was ultimately achieved by establishing three things:
  1. An array (`burgArr`) tracking the burger in the process of construction by the player, to which each caught ingredient was pushed;
  2. A pre-established array within an object (`target.level1`) containing all the ingredients required by the player to win, in the order required _to_ win;
  3. A function which would check the class of each element in `burgArr` and `target.level1`, check if both arrays were in the same order, and if so, register the win condition.

### <ins>Favourite Functions</ins>
* The two functions I'm the most pleased with are:
  1. `moveBurg`, as it was the first breakthrough I had in developing the game's core mechanics:
 
 ```document.onkeydown = moveBurg;
function moveBurg(e) {
    e = e || window.event;
    if (e.keyCode == '37' && startPos != 0) {
        // left arrow
        burg.style.left = locArr[startPos-1]+"px";
        startPos -= 1
    }
    else if (e.keyCode == '39' && startPos != 3) {
        // right arrow
        burg.style.left = locArr[startPos+1]+"px";
        startPos += 1     
    }
    else if ((e.keyCode == '37' || e.keyCode == '39') && (startPos === 0 || startPos === 3)){
        console.log("You're at the end of the counter! You'll drop the burger!")
    }
}```
 
  2. and `areEqual`, as it was the function which ultimately signified my breakthrough in establishing the win condition for the game by comparing the player and goal arrays:
 
 '''function areEqual(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            elementClass = element.getAttribute("class");
            arr2Class = array2[index].getAttribute("class")
            if (elementClass === arr2Class) {
                return true;
        }
        return false;
      });
    } 
    return false;
  }'''
