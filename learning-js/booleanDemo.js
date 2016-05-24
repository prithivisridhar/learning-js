var myStatus = false;
myStatus = !myStatus; //this is for toggling the boolean value

console.log("the value of the variable is :" + myStatus);

var number = 42;
//that if it is not falsey then it is true!
console.log("the value of the number as boolean is : " + !!number);

var name = "niranjan";
console.log("the boolean value for name is :" + !!name);

var status;
console.log("the boolean value for the status is :" + !!status);


var result = 42 + undefined;
console.log("the boolean representation of result : " + !!result);

var message = "";
console.log("the boolean reprentation of message is :" + !!message);


//var value;
//console.log(new Boolean(value));
//var condition = new Boolean(value);
////this is not always the notation to check for true
//if (condition ==true) {
//    console.log("the value of 'value' is found to be true");
//}


var condition = false;
if (condition == true){
    
}
else  {
    console.log("this condition is not satisfied");
}
var values = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
//this notation is optional .. and only to showoff yourself
values.forEach(function (el, idx) {
    console.log(el);
});

while (condition ==true) {

}
do {
    
} while (condition ==true);