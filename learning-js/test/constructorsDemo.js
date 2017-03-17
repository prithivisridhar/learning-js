// Constructor functions in JS
// object template
function Employee(empName,empId,empLocation){
  this.eName = empName; // properties / name / member variables
  this.eId = empId;
  this.eLocation = empLocation;
  this.myFunction = function(){

  }
};

var myEmployee = new Employee("Ruchira",106456,"Pune");
var myEmployee1 = new Employee("Ansh",83265,"Pune");
var myEmployee2 = new Employee("Manish",4365,"Pune");
var myEmployee3 = new Employee("Vishakha",435435,"Pune");
console.log(typeof myEmployee);
console.log(typeof myEmployee1);
console.log(typeof myEmployee2);
console.log(typeof myEmployee3);
