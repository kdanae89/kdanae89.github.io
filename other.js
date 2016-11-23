$(function() {

//global variables
var gameBoard = $('#board');
var buttons = $('.button');
var squares = $('.square');
var whosTurn = $('h3');
var blue = [];
var black = [];
var turn = 0;
var blueBlack = true;



//make buttons
for(var b=0; b < 7; b++) {
  var divsB = $('<div>');
  gameBoard.append(divsB);
  divsB.attr('id', 'btn' + [b]);
  divsB.addClass('button');
  divsB.text('Go Here');
}



//makeboard
for (var i=0; i < 42; i++) {
  //makes 42 divs
  var divs = $('<div>');
  gameBoard.append(divs);
  //gives each div a unique id for the array
  divs.attr('id', [i]);
  divs.addClass('square');
  whosTurn.text('Black Player');
}

//giant array with all of my winning CONDITIONS
var winCombos = [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4 ,5], [3, 4, 5, 6],
[7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], [14, 15, 16, 17],
[15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], [22, 23, 24, 25],
[23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33],
[31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
[0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29],
[15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24],
[10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
[5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34],
[20, 27, 34, 41], [3, 9, 15, 21], [4, 10, 16, 22], [10, 16, 22, 28], [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [13, 19, 25, 31], [19, 25, 31, 37], [20, 26, 32, 38], [14, 22, 30, 38], [7, 15, 23, 31], [15, 23, 31, 39], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [3, 11, 19, 27]];

//function iterates over array winCombos
var whoWon = function(playerColor) {
  for (x=0; x < winCombos.length; x++) {
    //declare that there are no matches, setting matches as a variable to calculate winner
    var matches = 0;
    //iterate over the inner arrays
    for (y=0; y < winCombos[x].length; y++) {
      //iterate over the players color array
      for (z=0; z < playerColor.length; z++) {
        //checks player color positions against giant array
        if (winCombos[x][y] == playerColor[z]) {
          matches ++;
        }
      }
    }
    //declares the winning condition
    if (matches == 4) {
      return true;
    }
  }
  return false
}


var checkWinner = function() {
  //if blue's got 4 matches
  if (whoWon(blue) == true) {
    gameBoard.html('<h1>BLUE WINS</h1>');
    //if black has 4 matches
  } else if (whoWon(black) == true) {
    gameBoard.html('<h1>BLACK WINS</h1>');
    //when all squares are filled with no win
  } else if (turn == 42) {
    gameBoard.html('<h1>DRAW</h1>');
  }
  // var reset = $('button');
  // reset.on('click', resetGame);
}
//I looked back over the lesson on nested loops and used Thom's from the tic-tac-toe as a reference to create my nested loop for this game, it looks really similar because it's basically the same idea as the tic-tac-toe board just much bigger with more combos.



//function to toggle the color the square is assigned along with it's class... toggle player basically.

 var playerTurn = function() {
   turn++;
   blue.sort();
   black.sort();
   if (blueBlack === true){
   whosTurn.text('Blue Player')
 } else {
   whosTurn.text('Black Player')
 }
   blueBlack = !blueBlack;
  //  checkWinner();
 }


//functions to handle my clicks and fill my squares
var fillSquare1 = function() {
  var arr1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  for (a=0; a < arr1.length; a++) {
    if (arr1[a].hasClass('aqua')) {
      continue;
    } else if (arr1[a].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr1[a].css('background', 'aqua');
        arr1[a].addClass('aqua');
        blue.push(arr1[a].attr('id'));
        checkWinner();
        break;
      } else {
        arr1[a].css('background', 'black');
        arr1[a].addClass('black');
        black.push(arr1[a].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare2 = function() {
  var arr2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  for (d=0; d < arr2.length; d++) {
    if (arr2[d].hasClass('aqua')) {
      continue;
    } else if (arr2[d].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr2[d].css('background', 'aqua');
        arr2[d].addClass('aqua');
        blue.push(arr2[d].attr('id'));
        checkWinner();
        break;
      } else {
        arr2[d].css('background', 'black');
        arr2[d].addClass('black');
        black.push(arr2[d].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare3 = function() {
  var arr3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  for (e=0; e < arr3.length; e++) {
    if (arr3[e].hasClass('aqua')) {
      continue;
    } else if (arr3[e].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr3[e].css('background', 'aqua');
        arr3[e].addClass('aqua');
        blue.push(arr3[e].attr('id'));
        checkWinner();
        break;
      } else {
        arr3[e].css('background', 'black');
        arr3[e].addClass('black');
        black.push(arr3[e].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare4 = function() {
  var arr4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  for (f=0; f < arr4.length; f++) {
    if (arr4[f].hasClass('aqua')) {
      continue;
    } else if (arr4[f].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr4[f].css('background', 'aqua');
        arr4[f].addClass('aqua');
        blue.push(arr4[f].attr('id'));
        checkWinner();
        break;
      } else {
        arr4[f].css('background', 'black');
        arr4[f].addClass('black');
        black.push(arr4[f].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare5 = function() {
  var arr5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  for (g=0; g < arr5.length; g++) {
    if (arr5[g].hasClass('aqua')) {
      continue;
    } else if (arr5[g].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr5[g].css('background', 'aqua');
        arr5[g].addClass('aqua');
        blue.push(arr5[g].attr('id'));
        checkWinner();
        break;
      } else {
        arr5[g].css('background', 'black');
        arr5[g].addClass('black');
        black.push(arr5[g].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare6 = function() {
  var arr6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#5')];
  for (h=0; h < arr6.length; h++) {
    if (arr6[h].hasClass('aqua')) {
      continue;
    } else if (arr6[h].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr6[h].css('background', 'aqua');
        arr6[h].addClass('aqua');
        blue.push(arr6[h].attr('id'));
        checkWinner();
        break;
      } else {
        arr6[h].css('background', 'black');
        arr6[h].addClass('black');
        black.push(arr6[h].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}
var fillSquare7 = function() {
  var arr7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#6')];
  for (j=0; j < arr7.length; j++) {
    if (arr7[j].hasClass('aqua')) {
      continue;
    } else if (arr7[j].hasClass('black')) {
      continue;
    } else {
      playerTurn();
      if (blueBlack === true) {
        arr7[j].css('background', 'aqua');
        arr7[j].addClass('aqua');
        blue.push(arr7[j].attr('id'));
        checkWinner();
        break;
      } else {
        arr7[j].css('background', 'black');
        arr7[j].addClass('black');
        black.push(arr7[j].attr('id'));
        checkWinner();
        break;
      }
    }
  }
}

//button click listeners
$('#btn0').on('click', fillSquare1);
$('#btn1').on('click', fillSquare2);
$('#btn2').on('click', fillSquare3);
$('#btn3').on('click', fillSquare4);
$('#btn4').on('click', fillSquare5);
$('#btn5').on('click', fillSquare6);
$('#btn6').on('click', fillSquare7);





})
