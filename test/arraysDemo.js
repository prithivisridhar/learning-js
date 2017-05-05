
//Array declaration
var myArray1 = ["Ruchira",2,true,4]; // loosely typed
var myNames = new Array("Alvita","Ashif","Hadiya");
var myNames1 = Array(1,2,3,4,5,6);

// forEach
var myArray = [1,2,3,4,5,6,7,8,9,10]; // array of numbers
var myArrayValues = myArray.forEach(function(el,ix){
  //do something
  console.log(el);
});



//map -- projection
var rooms = [101,102,104,105] ;
//rooms[2] = 103; //not recommended
var newRooms = rooms.map(function(rm){
  if(rm == 104) {return 103;}
  else{return rm;}
});
console.log("***Arry.Map***");
console.log(newRooms); // [101,102,103,105]
console.log(rooms); //[101,102,104,105]

var forecast = [
  {day:"Monday",humidity:10},
  {day:"Sunday",humidity:30},
  {day:"Tuesday",humidity:40}
];

//same stuff using for loops
var humid = [];
for (var i = 0; i < forecast.length; i++) {
  humid.push(forecast[i].humidity);
}
console.log(humid);
var humidMap = forecast.map(function(el){
  return el.humidity;
});
console.log(humidMap);

//filter
var filteredHumidity = forecast.filter(function(el){
  return el.humidity > 20;
});
console.log("***Filtered Humidity***");
console.log(filteredHumidity);

//Array of objects
var myArrayOfObjs = [
  {x:1,y:2,z:3},
  {x:20,y:30,z:40},
  {x:30,y:40,z:40}
]
//filter
var filteredArray = myArrayOfObjs.filter(function(el){
  return el.x > 20;
});
console.log("***Filtered Array***");
console.log(filteredArray);
