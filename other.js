$(function() {

//global variables
var gameBoard = $('#board');
var buttons = $('.button');
var squares = $('.square');
var redBlack = true;


//make buttons
for(var b=0; b < 7; b++) {
  var divsB = $('<div>');
  gameBoard.append(divsB);
  divsB.attr('id', 'btn' + [b]);
  divsB.addClass('button');
}



//makeboard
for (var i=0; i < 42; i++) {
  //makes 42 divs
  var divs = $('<div>');
  gameBoard.append(divs);
  //gives each div a unique id for the array
  divs.attr('id', [i]);
  divs.addClass('square');
}

//function to toggle the color the square is assigned along with it's class... toggle player basically.

//this is an event handler
 var toggleFunction = function() {
   // toggle will alternate between true and false - x and o
   if (redBlack === true) {
     console.log('red turn');
   } else {
     console.log('black turn');
   }

   redBlack = !redBlack;
  //  this.removeEventListener('click', toggleFunction);
  //  win();
 }


//functions to handle my clicks and fill my squares
var fillSquare1 = function() {
  var arr1 = [$('#35'), $('#28'), $('#21'), $('#14'), $('#7'), $('#0')];
  for (a=0; a < arr1.length; a++) {
    if ([a] == $('.red')) {
      console.log('red');
    } else if ([a] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare2 = function() {
  var arr2 = [$('#36'), $('#29'), $('#22'), $('#15'), $('#8'), $('#1')];
  for (d=0; d < arr2.length; d++) {
    if ([d] == $('.red')) {
      console.log('red');
    } else if ([d] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare3 = function() {
  var arr3 = [$('#37'), $('#30'), $('#23'), $('#16'), $('#9'), $('#2')];
  for (e=0; e < arr3.length; e++) {
    if ([e] == $('.red')) {
      console.log('red');
    } else if ([e] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare4 = function() {
  var arr4 = [$('#38'), $('#31'), $('#24'), $('#17'), $('#10'), $('#3')];
  for (f=0; f < arr4.length; f++) {
    if ([f] == $('.red')) {
      console.log('red');
    } else if ([f] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare5 = function() {
  var arr5 = [$('#39'), $('#32'), $('#25'), $('#18'), $('#11'), $('#4')];
  for (g=0; g < arr5.length; g++) {
    if ([g] == $('.red')) {
      console.log('red');
    } else if ([g] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare6 = function() {
  var arr6 = [$('#40'), $('#33'), $('#26'), $('#19'), $('#12'), $('#4')];
  for (h=0; h < arr6.length; h++) {
    if ([h] == $('.red')) {
      console.log('red');
    } else if ([h] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
    }
  }
}
var fillSquare7 = function() {
  var arr7 = [$('#41'), $('#34'), $('#27'), $('#20'), $('#13'), $('#5')];
  for (j=0; j < arr7.length; h++) {
    if ([j] == $('.red')) {
      console.log('red');
    } else if ([h] == $('black')) {
      console.log('black');
    } else {
      console.log('empty');
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
