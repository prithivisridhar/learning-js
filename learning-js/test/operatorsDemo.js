// addition
//console.log(4+3);
var num1 = 10;
var num2 = 20;
// Parameterized functions
function addingOfNums(x,y){ //parameters
  return (x + y); // + as an addition operator, x and y are called as operands
}
console.log(addingOfNums(num1,num2)); //arguments
//console.log(addingOfNums()); // NaN
var myFirstName = "Ruchira";
var myLastName ="Agarwal";
var myName = myFirstName +" " +myLastName;
console.log("The value of myName is: "+ myName);
console.log(4 +null); // null is treated as zero
console.log("RA" +null); //null is considered as string
console.log(16 +undefined);
//console.log("3" +"56");
//console.log(10 +"Ruchira");

//subtract
console.log("*****Subtraction*****");
var result = num2 - num1;
console.log(result);
console.log(10 - null); // null is treated as zero
console.log("hello" -"bye");
console.log(25 - undefined);

// multiply
console.log("****Multiplication****");
console.log(num1 *num2);
console.log(5 *4);
console.log(14 * null); // null is zero

//division
console.log("***Division***");
console.log(10/2);
console.log(10/0);
//null will be treated as zero

//remainder
console.log("***Remainder***");
console.log(10%2);
console.log(4%3);

//Boolean -- true false
console.log("****Boolean Values ****");
//truthy values or falsy Values
//truthy values -- true
console.log(Boolean(10));
console.log(!!(10));
console.log(Boolean("Ruchira"));

//Falsy values -- false
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(-0));

// &&  -- logical and
var num3 = 10;
var num4 = 11;
if (num3 == 10 && num4 >10) {
  console.log("condition true");
}

var num5 = undefined;
var num6 = 11;
//if first operand is truthy, it returns second operand , else it returns the first operand
console.log(num5 && num6);

// || -- logical or
var num7 = 10;
var num8 = 11;
if (num7 == 10 || num8 >10) {
  console.log("condition true");
}

var num9 = undefined;
var num10 = 11;
//if first operand is truthy, it returns first operand , else it returns the second operand
console.log(num9 || num10);
