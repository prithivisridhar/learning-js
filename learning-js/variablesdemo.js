console.log("hello world!!");

var myName = "niranjan awati";
console.log(typeof myName);
myName = 2334;
console.log(typeof myName);


console.log(myName);

var empno = 41993;
console.log(empno);

var precision = 2.3;
console.log(precision);
console.log(typeof precision);

var position;
console.log(position);
console.log(typeof position);
console.log(position === undefined);

//JSON style of making new objects
var user = {
    name: "niranjan awati",
    empno: 41993,
    location: "pune",
    profile: "lecturer"
};

console.log(typeof user);

var locations = ["Pune", "Mysore", "Bangalore", "Chandigarh", "Hyderbad"];
console.log(typeof locations);

var nullObject = null;
console.log(typeof nullObject);

var myStatus = false;
console.log(typeof myStatus);

//expression == delegate, lambda expression, callback
var calcWeight = function (gravity, planet) {

};
console.log(typeof calcWeight);


/*
fsdkfsdkljfjksdfhjkdshfkjsd
fdsjfhdsjkfhkdsfhkdjsfhdjks
fsdfjkdsfhdksjfhdsljfdsljfsd
fldsjhfdfhsdkjfhd,j
*/

//function, c`tor function
function Dothis(param1, param2) {
    return param1 + param2;
}
console.log(typeof Dothis);
console.log(Dothis(10, 20));
console.log(Dothis(10));