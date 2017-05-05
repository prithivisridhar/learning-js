//Parameterized Functions
var genPosition = 2;
function doThisNow(empName, empId){
  console.log(genPosition);
  //console.log(currentRole); will result in an error
  genPosition = 4;
  return ("Name of employee: "+empName + " Employee id: " +empId);
}
console.log(doThisNow("Ruchira",106456));
//this also executes despite the fact that we pass only one argument
//console.log(doThisNow("Ruchira"));

//Variable scopes
 // global variable
function doThisAsWell(){
  var currentRole = 3; //local to the function
  return "Role " + currentRole + " Position "+genPosition;
}
console.log(doThisAsWell());
