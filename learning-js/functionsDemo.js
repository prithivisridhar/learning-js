//logic -- functions
function myFunction(a,b){
  //body of the function
  var result = a * b;
  return true;
}
console.log(myFunction(10,20));

//function expression
var calcFunc = function(){
  console.log("Hi from the function expression");
};
calcFunc();

console.log(typeof calcFunc);

//function expression
var sNames = function(){
  //logic statements
  console.log("Hi there class, from the sNames");
  return 10;
};

var doThis = sNames; // definition of the function
//var doThis = sNames();
console.log(doThis);// definition of the function
console.log(doThis()); // return value and the console.log
//console.log(typeof doThis); // function
console.log(typeof doThis()); //number -- which is the type of the return value
//console.log(sNames());


// conditions and loops
var id = 1;
if (id == 0) {
  //then do something
  console.log(id);
}
else if (id == 1) {
console.log(":id is 1");
}
else {
  console.log("if all above conditions are false");
}

var counter = 0
switch (counter) {
  case 0:
    console.log("counter is :" + counter);
  case 1:
  //do something else
    console.log("counter is :" + counter);
    break; // important so that the below cases are not executed
  default:
  console.log("all above cases are false");
}

//loops /iterations
var i = 0;
for (var i = 0; i <4;i++) {
console.log(i);
// if(i <4) break;
// i++;
}

while (i == 0) {
  i++;
}

do {
  //executed atleast once
  console.log(i);
  i ++;
} while (i == 1);

var obj = {
  x :1,
  y:2,
  z:3
};

//for in
for (var prop in obj) { // prop corresponds to the property names
console.log(obj[prop]); // prints the properties' values
console.log(prop); // prints property names
}

var sId = 10;
console.log(Boolean(sId)); // true
var myName = "Ruchi"
console.log(Boolean(myName));//true

if(Boolean(myName)){
  // this will be executed
}
var num1  = 0
console.log(!!num1); // false
//Boolean values -- truthy and falsy
// falsy -- null, NaN, "", undefined , 0 , -0 // false
