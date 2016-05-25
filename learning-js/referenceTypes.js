//this is what is called the JSON notation for objects
var user = {
    name: "niranjan",
    location:"Pune"
}

function AlterUser(u) {
    u.name = "name_altered";
}
AlterUser(user);
console.log(user.name);


var locations = ["Pune", "Bangalore", "Mysore", "Chandigarh"];
console.log(locations instanceof Array);

var remainingLocations = ["Mumbai", "Delhi"];
var mergerLocations = locations.concat(remainingLocations);
console.log(mergerLocations);

var mysore = mergerLocations.filter(function (el, idx) {
    return el == "Mysore";
});
console.log(mysore);

var users = [
    { name: "fsdf", location: "Pune" },
    { name: "fsdf", location: "Pune" },
    { name: "fsdf", location: "Mysore" },
    { name: "fsdf", location: "Delhi" },
    { name: "fsdf", location: "Bangalore" },
    { name: "fsdf", location: "Pune" },
    { name: "fsdf", location: "Pune" },
    { name: "fsdf", location: "Pune" },
    { name: "fsdf", location: "Mysore" },
    { name: "fsdf", location: "Mysore" },

];
var mysoreUsers = users.filter(function (el, indx) {
    return el.location == "Mysore";
});
console.table(mysoreUsers);