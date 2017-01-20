# Connect Four

This Connect Four game was made using the following technologies
  * JavaScript
  * JQuery
  * CSS

Starting with just some bare-bones HTML, ie the gameboard div, I added everything else dynamically using JS and JQuery.

If you want to check out my live site, the link is https://kdanae89.github.io

There is no installation required

I was still working on my click events. If you look, each button has a separate click event... even though they all implement the same effect on their rows. I was working at getting one event listener to loop over a specific part of a loop when a specific button was click but I wasn't getting anywhere. That would make my code much more DRY.

If you've never played connect four, basically you choose a color to represent you, the player. In turns you each decide where to place a piece (blue or black) in an attempt to connect four of your color horizontally, vertically, or diagonally while simultaniously defensively blocking the other player from doing just that. The first player to get four in a row wins the game.
