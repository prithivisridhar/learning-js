// function defintion
function doThis(){
  //body of the function
  console.log("hi from doThis");
}
// call the function
doThis();
console.log(typeof doThis());

// var num = 10;
// console.log(num);
//function expressions
// anonymous function on RHS
var myFunction = function(){
console.log("from the myFunction");
//body
//return 10;
};

var result = myFunction;
console.log(myFunction); // function definition / signature
console.log(result); // function definition / signature
console.log(result()); // returned value plus any other implementation is executed
console.log(typeof result());// type of the returned value
console.log(typeof result);  //function -- this works similar to typeof prinitive datatypes


//conditional statements
var myVariable = 10;
if (myVariable > 5) {
  console.log("Condition is true, inside if");
}else if (myVariable < 10 ){
  console.log("above condition false, inside else");
}else{
  console.log("if all the above conditions are false");
}

// var counter = 20;
// switch (counter) {
//   case counter <5:
//     console.log("Case 1 successful");
//     break;
//   case counter >= 10 :
//     console.log("another case");
//     break;
//   default:
//     console.log("if all above cases are false, this is executed");
// }
var counter = 1;
switch (counter) {
  case 10:
    console.log(counter);
    break;
  case 1:
    console.log("this is also run if no break in previous case!");
  default:
    console.log("when none of the values match the value of expression");
    break;
}

//loops
var counters;
for (var i = 0; i < 10; i++) {
  console.log(i);
}

while (i <10) {
  console.log(i);
  i++;
}

do {
  console.log("this is run atleast once");
  i++;
} while (i <10);

var myObj = {
  x :1,
  y :2,
  z :3
}
//iterate over property names of an object
for (var prop in myObj) {
  console.log(prop);
  console.log(myObj[prop]);
  /*console.log(myObj.prop); this wouldn't work as it starts looking
  for a property named prop which is not valid and thus prints undefined*/
}
