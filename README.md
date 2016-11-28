This Connect Four game was made using JavaScript/JQuery and some CSS.

Starting with just some bare-bones HTML, ie the gameboard div, I added everything else dynamically using JS and JQuery.

If you want to check out my live site, the link is https://kdanae89.github.io

There is no installation required

So due to limited time, as you can see there is a RESET button, but it isn't functioning. I was in the middle of working out getting my board to reset using the button. I had tried wiping out the boards inner HTML and then setting my initial board-building loops to functions and calling all the functions to rebuild my board but it wasn't quite working out as I had planned. I did some debugging but ran out of time. If you want to restart the game, refresh the page.

One more thing I was working on, and why I ran out of time with my reset button was my click events. If you look, each button has a separate click event... even though they all implement the same effect on their rows. I was working at getting one event listener to loop over a specific part of a loop when a specific button was click but I wasn't getting anywhere. That would make my code much more DRY.

If you've never played connect four, basically you choose a color to represent you, the player. In turns you each decide where to place a piece (blue or black) in an attempt to connect four of your color horizontally, vertically, or diagonally while simultaniously defensively blocking the other player from doing just that. The first player to get four in a row wins the game.
