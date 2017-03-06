//operators
//string, nos,
// +
console.log("message" + "anothermessage"); // join / concatenation
console.log(2+3); // add the nos.
console.log("message" + 200);
console.log("100" +"300");
console.log(100 + null); // null values as zero when added with nos.
console.log("message" +null); //null is converted to string
console.log("message" + undefined);// treated as string
console.log(300 + undefined); // the output is NaN
// -
console.log("message" - "anothermessage"); // subtraction only works with nos.
console.log(4-2);
console.log(4 - "message");
console.log(4-null);
console.log(10-undefined);
// *
console.log(4*8);
console.log("messsage" *"someother");// NaN
console.log(7 * null); // null is treated as zero
console.log(17 * undefined);// NaN
console.log("Testing strings ----");
console.log("message" *3);
// / , %
console.log(4/2); // 4 and 2 are the operands
console.log(9/0);
console.log(-4/0);
console.log(10%3);

// Unary operators ++
var age = 10;
console.log(age);
console.log(age++);
console.log(age);
console.log(++age);
console.log(age);

//boolean operators
//Fasey values - NaN, undefined, "", null, 0 ,-0
console.log(Boolean("somestr"));//true
console.log(Boolean(7));// true
console.log(Boolean(0));// false

// ! boolean operator
console.log(!true);// false
console.log(!false); // true
console.log(!"message"); //false

// && do not use on strings
// console.log("'&&'operators");
// console.log("message" && "300");
// console.log("300" && "somemessage");
// console.log("sts" && true);
// console.log(400 && "othermessage");
// console.log(true && "str");

//
console.log(200 && true);
console.log(true && 100);


// Clear outputs / evident
console.log(false && 10);
console.log(0 && false);
console.log(false && 100);
console.log(50 && false);
console.log({} && 19);// the second parameter as result
console.log(true && {});// the result will be the object
console.log(null && 10);
console.log(undefined && 20);
console.log(null && "wedgjwg");
console.log("jgedhwd" && null);
console.log(undefined && "whkdh");
console.log(true && true);
console.log(false && false);
// equality operators
// == value comparison === type and values comparison
console.log(4==4);// true
console.log("4" == 4); // true
console.log("4" === 4); // false
console.log("4" === "4");// true
console.log(4 != "hi");
console.log("4" !== "4");
// <= >=
