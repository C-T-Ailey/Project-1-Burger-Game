# Project 1: Burger Builder
## "Welcome to Monarch Burger, may I take your order?"

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
* After this came the time to implement some basic functionality. The first task I opted to tackle was making it possible for the player to move the "bottom bun" of their burger, so that the core mechanic of catching ingredients at various drop points could be facilitated. This task worked by the end of Day 1, but took up the entire day in the process. Ultimately, the solution to this was simple enough -- it proved to be a matter of logging the positions of the drop pipes at the top of the screen, storing them in variables, and employing a keypress function to move the cursor left or right to the pipe location beside its current position.

### Development, Day 2

### <ins>Unsolved Problems and Future Goals</ins>

### <ins>Solving for the Win</ins>

### <ins>Favourite Functions</ins>
