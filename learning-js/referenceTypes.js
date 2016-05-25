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
    { name: "person1", location: "Pune" },
    { name: "person2", location: "Pune" },
    { name: "person3", location: "Mysore" },
    { name: "person4", location: "Delhi" },
    { name: "person5", location: "Bangalore" },
    { name: "person6", location: "Pune" },
    { name: "person7", location: "Pune" },
    { name: "person8", location: "Pune" },
    { name: "person9", location: "Mysore" },
    { name: "person10", location: "Mysore" },

];
var mysoreUsers = users.filter(function (el, indx) {
    return el.location == "Mysore";
});
console.table(mysoreUsers);

var userNames = users.map(function (el, idx) {
    return el.name;
});
console.table(userNames);