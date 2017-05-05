// function defintion -- function signature
console.log("*****Functions****");
function myFunction(){
//body -- implementation
  console.log("Hi from the myFunction");
};
// call the function
myFunction();
//function expressions
// anonymous functions
console.log("*****Function expressions****");
var doThis = function(){
  //implementation == body
  return 100;
};
// var result = doThis();
// console.log(result);
console.log(typeof doThis);//function
console.log(typeof doThis());//number

//conditional statements
console.log("*****if else****");
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
console.log("*****Switch Example1****");
var myTestVariable = 10;
switch (myTestVariable) { //expression
  case 10: //condition
    console.log("myNumber is equal to 10");
    break;
  case 11:
    console.log("myNumber is 11");
    break;
  case 12:
  case 13:
    console.log("do something else");
    break;
  default:
    console.log("if all above conditions are false, this is executed");
}

console.log("*****Switch Example2****");
var counter = 0;
switch (counter) {
  case 0:
    console.log("counter value is 0");
    //break;
  case 1:
    console.log("this is also run if no break in previous case!");
    break;
  default:
    console.log("when none of the values match the value of expression");
    break;
}
//loops
//arrays
console.log("*****For Loop****");
for (var i = 0; i < 10; i++) {
console.log(i);
}

//when you want to test against a condition
console.log("*****While Loop****");
var myVariable = 10;
while (myVariable <=15) {
  console.log("hi from while");
  myVariable++;
}

//some tasks to be done atleast once
console.log("*****Do While Loop****");
do {
  console.log("hi from dowhile, this will be executed atleast once");
  myVariable++;
} while (myVariable <=15);

console.log("*****For in Loop****");
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
