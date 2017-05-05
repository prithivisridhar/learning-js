alert("Hi from the script.js file");
var userInput = prompt("Please enter your name");
// variables
//dynamic
var num = 1;// RHS
console.log(num);
console.log(typeof num);// number

//loosely typed
num = "Ruchira";//string
console.log(num);
console.log(typeof num);//string

var myNum = 1.34;
console.log(myNum);
console.log(typeof myNum);//number

//string
var myName ="Ruchira Agarwal";
console.log(myName);
console.log(typeof myName);

//Boolean
var flag = true;
console.log(flag);
console.log(typeof flag);

//undefined
var id;
console.log(id);
console.log(typeof id); //undefined

//not anything
var myId = null;
console.log(myId);
console.log(typeof myId);//object

//Array Literal
var myNames = ["Ruchira","Mithra","Nisha","Prathima"];
console.log(myNames);
console.log(typeof myNames);// object

var myNumbers = new Array(1,2,3,4);
var myRandomArray = Array("Ruchira",1,3,4);

//object literal
var myObj = {
  x: 10,
  y:20,
  z:30
};
console.log(myObj);
console.log(myObj.x);
console.log(typeof myObj.x);
console.log(typeof myObj);
