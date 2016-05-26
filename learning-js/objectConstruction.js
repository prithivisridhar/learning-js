var user = {
    name: "niranjan",
    location: "pune"
};
user.age = 35;
user.status = "fed up";

console.log(user.name);
console.log(user.status);


//var movie = {};
var movie = new Object();
movie.publishinYear = 2015;
movie.title = "Avengers , Age of ultron";

console.log(movie.publishinYear);


console.log(user.__proto__);
console.log(movie.__proto__);

console.log(typeof Object);

function DC(location, capacity) {
    this.location = location;
    this.capacity = capacity;
}
var puneDC = new DC("pune", 25000);
console.log(puneDC.capacity);

var bpoDC = Object.create(DC);
console.log(bpoDC.__proto__);

var bollywoodmovie = Object.create(movie);
console.log(bollywoodmovie.__proto__);
console.log(bollywoodmovie.__proto__.__proto__);



