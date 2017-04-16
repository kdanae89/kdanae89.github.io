//_____DOM MANIPULATION FOR BIO PAGE________

//grab me some divs
var one = $('.one');
var two = $('.two');
var three = $('.three');
//am I connected?
console.log('hi');
//display only div with class one
var showOne = function() {
  two.hide(10);
  three.hide(10);
}
//INVOKE!!!!
showOne();
//runs after 9 sec to hide one and show two
var showTwo = function(){
  one.hide(800);
  two.show(800);
};
setTimeout(showTwo, 9000);
//runs after 18 sec to hide two and reveal three
var showThree = function(){
  two.hide(800);
  three.show(800);
};
setTimeout(showThree, 18000);

var reset = function() {
  showOne();
  one.show(800);
  setTimeout(showTwo, 9000);
  setTimeout(showThree, 18000);
};
setTimeout(reset, 27000);
