//addition
console.log(4+3); // 7

var num1 = 10;
var num2 = 20;
// Parameterized functions
function addNumbers(x,y){ //parameters
  return x+y;
}
console.log(addNumbers(num1,num2));//arguments
console.log(addNumbers());

//addition
console.log("*****Addition****");
console.log(4+undefined);//NaN
console.log(10+null);//null is treated as zero -- 10
console.log(10+30);
console.log("3"+"ruchi");
console.log("ruchira" +null);//null is treated as a string

var myFirstName = "Ruchira";
var myLastName ="Agarwal";
var result = myFirstName +myLastName;
console.log("The concatenated string is " +result);

//subtract
console.log("*****Subtraction****");
console.log(num2-num1);
console.log("abc" -"dskfh");//NaN
console.log(num2 - null);
console.log("dsjfg" -null);//NaN

// multiply
console.log("***Multiplication*****");
console.log(num2*num1);
console.log("abc" *"dskfh");//NaN
console.log(num2 * null); // 0
console.log("dsjfg" *null);//NaN
console.log(undefined * 8);

//division
console.log("***Division*****");
console.log(num2/num1);
console.log(num2/null); //Infinity
console.log(10/2);//5
console.log(10/0);//Infinity
console.log("abc" /"dskfh");//NaN
console.log("dsjfg" /null);//NaN
console.log(undefined/8);//NaN

//remainder
console.log("***Remainder*****");
console.log(num2%num1); //0
console.log(num2%null); //NaN
console.log(10%2);// 0
console.log(10%0);//NaN
console.log("abc" %"dskfh");//NaN
console.log("dsjfg" %null);//NaN
console.log(undefined%8);//NaN

//Boolean -- true false
console.log("****Boolean Values ****");
//truthy values or falsy Values
//truthy values -- true
console.log(Boolean(10));//true
console.log(Boolean(num2));//true
console.log(Boolean("Ruchira"));//true
console.log(Boolean("dsjfgjdsgf"));
console.log(Boolean("10"));//true
console.log(Boolean(-30));
// console.log(Boolean("false"));
// console.log(Boolean("true"));
//Falsy values -- false
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(!!(false));

// &&  -- logical and
var num3 = 10;
var num4 = 11;
if (num3 ==10 && num4 >=10) {
  console.log("Hurray, the condition for logical and is true");
}

var num5 = undefined;
var num6 = 11;
//if first operand is truthy, it returns second operand , else it returns the first operand
if (num5 && num6) { // condition has to be true for the following block of code to be executed
  console.log("Showcasing truthy/falsy values for logical and");
}

// || -- logical or
var num7 = 10;
var num8 = 11;
if (num7 ==10 || num8 >=10) {
  console.log("Hurray, the condition for logical or and is true");
}

var num9 = undefined;
var num10 = 11;
//if first operand is truthy, it returns first operand , else it returns the second operand
if (num9 || num10) {
  console.log("Showcasing truthy/falsy values for logical or");
}
