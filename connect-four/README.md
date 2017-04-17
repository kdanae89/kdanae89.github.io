# Connect Four

This Connect Four game was made using the following technologies
  * JavaScript
  * JQuery
  * CSS

### Link to Live Site!!
https://kdanae89.github.io/connect-four/index.html

There is no installation required!

#### Functionality

Starting with just some bare-bones HTML (div gameboard and headers to insert text into and remove from), I added everything else dynamically using JS and JQuery. So i created playable spaces by creating and appending divs via a for loop. The loop appended 42 divs for a 6 x 7 gameboard. The go here buttons were created in the same manner. I chose this style of position play so that I could loop through the columns to fill the board from bottom to the top per click, as would happen in a classic connect four game. Classes pertaining to color are assigned through click events and a toggle function for true and false (black and blue), CSS following color class display. Winning conditions take place in a massive array of arrays, which is looped through via nested for loops each time a space is played. Upon win, the board is removed and the winner is announced, where there is a reset button to whipe the board and play again!!

#### Improvements I'd Like to Make

I was still working on my click events. You will notice each button has a separate click event... even though they all implement the same function on their rows. I was working on getting one event listener to loop over a specific part of a loop when a specific button was click but I wasn't getting anywhere. That would make my code much more DRY. Also I would like to implement an AI so a single player could enjoy this game!

#### Gameplay

If you've never played connect four, basically you choose a color to represent you, the player. In turns you each decide where to place a piece (blue or black) in an attempt to connect four of your color horizontally, vertically, or diagonally while simultaniously defensively blocking the other player from doing just that. The first player to get four in a row wins the game.
