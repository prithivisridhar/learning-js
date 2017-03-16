//alert("Hi from the script file");
console.log("Hi from the script.js file");

// Data variables
var num = 10; // Number
console.log(num);
console.log(typeof num);
num = "Day1";
console.log(num);
console.log(typeof num);

var num1 = 1.2;
console.log(typeof num1);

var myName = 'Ruchira'; //string "" ''
console.log(myName);
console.log(typeof myName);

var flag = true;// Boolean
console.log(flag);
console.log(typeof flag);

var id;
console.log(id); // undefined
console.log(typeof id);

var empId = null;
console.log(empId);
console.log(typeof empId); // object

var numStr = "13";
console.log(typeof numStr); //string
var myNum1 = Number(numStr);
console.log(typeof myNum1);// number

// object literal
var obj = {
  name : "Ruchira",
  id : 106456,
  dept : "ENGCR"
}
console.log(obj);
console.log(typeof obj);
// objects are dynamic in nature, giving us overwriting capabilities
obj.dept = "ENG";
console.log(obj);

//Array Literals
var namesArray = ["Ruchira","Ansh","Aprajita"];
console.log(namesArray);
console.log(typeof namesArray);