//make board, will need 48 sqares.

//will require rows and columns, like i did the tic-tac-toe board. 48 squares.

//top row will be buttons for the players to click in order to fill the squares below.

//the player will need to be able to pick a square to fill and use the button to fill their square with their color. squares will be filled from bottom to top. Turns will alternate between red and black.

//each square should only be playable once.

//I have a 7X6 board and any combo of 4 will win. after each turn, i will need to check if there is a winning combo in any row, and then any column.

//if no win, the next player goes on and executes their turn, picking a square to play and clicking the respective button. then we will check to see if anyone has won, again, checking rows, and then columns.

//this will continue until during our checking for a win, we find that a player has a combo of four consecutive squares, either in a row, or a column. If there is a winning combo, that player will be annouced the winner.

//Then we will reseth the board and play again if we wish.
//////////////////////////////////////////////////////////////////////

//the board will be a div. the 48 squares will be divs within.

//48 divs, top row are all buttons (class, button). divs divided into 6 rows and 7 colums.

//events, for each button, on click red or black squares (toggle) and each bottom-most square needs to be filled.

//make sure each square is fillable only once

//how am i going to get the bottom most circle in each row to fill? I think which each button I'll need an if else statement since I wont be clicking the actual squares. I could try a loop, but I'm thinking if else...or a loop...

//WINNING CONDITIONS

//any combos of four: start with horizontal, then vertical, then diagonal....arrays? I think I'll assign classes that go horizontally and then vertiacally. In the end each square will have three classes(maybe?) I could annound winner by seeing if there are four "red" or "black" in a row... or maybe I could just do it with the arrays?

//ideas so far: with arrays i can loop through the rows and then columns similarly. If i have two classes for those, I can add a third class on click, red or black and then if any of the arrays have four red or black in a row thats a win. I'll come back to diagonal after I tackle that

//declaring a winner, getting my winner alert or message AFTER the last piece move is made, not before.

//what if I split up my js into two pages? winning conditions alone? well see on that too
///////////////////////////////////////////////////////////////////
$(function() {
//create board
var gameBoard = $('#board');
for (var i=0; i < 49; i++) {
  //makes 48 divs
  var divs = $('<div>');
  gameBoard.append(divs);
  //gives each div a unique id for the array
  divs.attr('id', [i]);
}




//click events... I am going to make the top row responsible for filling in the board bottom to top. So only the top row will have cllick events. then I'm going to use loops to change the css on the squares containing if else statements. one column at a time: so many if elses...

//event handler for my buttons
var dropInPiece = function() {
console.log('hehe');

}


//buttons - assign class buttons using ids 0-6. set event listener. tried to use a loop but it wasnt working so this will have to do for now
btn1 = $('#0');
btn2 = $('#1');
btn3 = $('#2');
btn4 = $('#3');
btn5 = $('#4');
btn6 = $('#5');
btn7 = $('#6');

// buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7];

// for (b=0; b < buttons.length; b++) {
//   buttons.addClass('button');
// }
//this is the least DRY thing i have ever seen, but my buttons now all have their class.
btn1.addClass('button');
btn2.addClass('button');
btn3.addClass('button');
btn4.addClass('button');
btn5.addClass('button');
btn6.addClass('button');
btn7.addClass('button');
//here is my click even for my buttons.
$('.button').on('click', dropInPiece);



// var toggleColor = function() {
//   var color = true;
//   var sq35 = $('#35');
//    if (color === true) {
//       sq35.css('background', )
//      this.classList.add('X');
//    } else {
//      this.innerHTML = "<img src='http://www.clker.com/cliparts/j/M/L/w/V/W/letter-o-md.png'>";
//      this.classList.add('O');
//    }
//    var h3 = document.querySelector('h3');
//
//    xo = !xo;
//    this.removeEventListener('click', toggleFunction);
//    win();
//  }
// }

//grab first clickable square
// var click0 = $('#0');
// //deal with the first column
// var columnOne = function () {
//   console.log("hehe");
//   sq35.css('background', toggleColor);
// }
// //first column click handler
// click0.on('click', columnOne);

























































})
