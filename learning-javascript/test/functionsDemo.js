// function defintion -- function signature
function myFunction(){
//body -- implementation
  console.log("Hi from the myFunction");
};
// call the function
myFunction();
//function expressions
// anonymous functions
var doThis = function(){
  //implementation == body
  return 100;
};
// var result = doThis();
// console.log(result);
console.log(typeof doThis);//function
console.log(typeof doThis());//number

//conditional statements
var myNumber = 10;
if (myNumber <5){
  //do something
  console.log("Hurray, the condition is true");
}
else if (myNumber == 10) {
  console.log("The number is equal to 10");
}
else{
  console.log("if all above condition statements are false,Do something else");
}

//switch example 2 --
// switch (myNumber) {
//   case (myNumber == 10):
//     console.log("myNumber is 10");
//     break;
//   case (myNumber ==11):
//     console.log("myNumber is 11");
//     break;
//   case (myNumber == 12):
//     console.log("do something else");
//     break;
//   default:
//     console.log("if all above conditions are false, this is executed");
// }
var counter = 1;
switch (counter) {
  case 0:
    console.log(counter);
    break;
  case 1:
    console.log("this is also run if no break in previous case!");
    break;
  default:
    console.log("when none of the values match the value of expression");
    break;
}
//loops
//arrays
for (var i = 0; i < 10; i++) {
console.log(i);
}

//when you want to test against a condition
var myVariable = 10;
while (myVariable <=15) {
  console.log("hi from while");
  myVariable++;
}

//some tasks to be done atleast once
do {
  console.log("hi from dowhile, this will be executed atleast once");
  myVariable++;
} while (myVariable <=15);

var myObj2 = {
  x:1,
  y:2,
  z:3
}
for (var prop in myObj2) {
  console.log(prop);// x, y,z
  console.log(myObj2[prop]);// 1,2,3
}
//infinite
// for(;;){
//
// }
