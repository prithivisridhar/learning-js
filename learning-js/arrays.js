var someNumbers = new Array(1,2,3,4);
var someMoreNumbers = Array(5,6,7,8,9);
var someMixedNumbers = Array(1,2,3,"Ruchira","Pune"); //looselytyped
console.log(someNumbers instanceof Array);

//forEach
var brics = ["India","China","Brazil","Sri Lanka","Russia"];
brics.forEach(function(el,ix){
  console.log(el);
})
//filter -- returns the objects of the array, matching the condition
var employees = [
{name:"Ruchira",id:106456,location:"pune"},
{name:"Lakshmi",id:67872,location:"bangalore"},
{name:"Iqbal",id:43535,location:"pune"},
{name:"Nimmi",id:67872,location:"mysore"}
];
var returnedEmps = employees.filter(function(el,ix){
if(el.location == "pune"){
  return el.location;
}
});
console.log(returnedEmps);

//projection / map -- changes the items in an resultant array 
var listEmpsLoc = employees.map(function(el,ix){
  return el.name;
})
console.log(listEmpsLoc);

//splice
console.log(brics.splice(2,1));

//push/ pop/ shift/ unshift
