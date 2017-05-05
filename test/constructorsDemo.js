// Constructor functions in JS
// object template
function Employee(empName,empId,empLocation){
  this.eName = empName;
  this.eId = empId;
  this.eLoc = empLocation;
  this.register = function(){
    //do something
  };
};
var employee1 = new Employee("Ruchira",106456,"Pune");
var employee2 = new Employee("Nisha",27351,"Bangalore");
console.log(employee1);
console.log(employee2);
employee1.register();
