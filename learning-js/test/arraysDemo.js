
//Array declaration
var myArray1 = ["Ruchira",2,true,4]; // loosely typed
var myNames = new Array("Anand","Ankit","Ansh");
var myNames1 = Array(1,2,3,4,5,6);

// forEach
var myArray = [1,2,3,4,5,6,7,8,9,10]; // array of numbers
var myNoValues = myArray.forEach(function(el){
  if (true) {
    console.log(el);
  }
});

//Array of objects
var forecast = [
  {day:"Sunday",humidity:10},
  {day:"Monday",humidity:30},
  {day:"Wednesday",humidity:50},
  {day:"Friday",humidity:10}
];

//map -- projection
var humid = forecast.map(function(el){
  return el.humidity;
})
console.log(humid);
console.log("Humidtity :" +humid);

// filter -- returns an array
var testScores = [100,95,45,32,78];
//function expression
var passingScore = function(el){
  return el >60;
};
var graduatedNums = testScores.filter(passingScore);
console.log(graduatedNums);

//same stuff using for loops
var graduation = [];
for (var i = 0; i < testScores.length; i++) {
  if (testScores[i]>60) {
    graduation.push(testScores[i]);
  }
}
console.log(graduation);

//Map -- returns an array
var rooms = [101,102,103];
//rooms[1] = 104; //bad practice
console.log(rooms);

var newRooms = rooms.map(function(el){
  if(el == 102){
    return 104;
  }
  else{
    return el;
  }
});
console.log(newRooms);

//for loops
