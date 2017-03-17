// Prototypal Inheritance
// Protoype literal meaning is the template from which the final product emerges.
// Somewhat like the base class the prototypes in JS are mimicing
// what the base class tend to do in most of the OO programming languages.

var Movie = {title:"",releaseDate:"",production:""}; // base class
var AvengersMovie = Object.create(Movie); // used to inherit from movie // sub class
AvengersMovie.title="Avengers, re assmeble";
AvengersMovie.releaseDate = "31/12/2016";
AvengersMovie.production="Marvel comics";
AvengersMovie.actors = ["Robert. D.J","sadgsaj"];

console.log(Movie.isPrototypeOf(AvengersMovie)); // true
console.log(typeof AvengersMovie.__proto__ === typeof Movie); // true
console.log(typeof AvengersMovie.__proto__.__proto__ ===typeof Object.prototype);// true
