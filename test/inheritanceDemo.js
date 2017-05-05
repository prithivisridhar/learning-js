// Prototypal Inheritance
// Protoype literal meaning is the template from which the final product emerges.
// Somewhat like the base class the prototypes in JS are mimicing
// what the base class tend to do in most of the OO programming languages.
// Array -> Array Prototype -> -> -> object
// Strings -> Strings Prototype -> -> -> object

// var Movie = {title:"",releaseDate:"",production:""}; // base class
// var Movie = new Movie();
var Movie = new Object();//constructor function
Movie.title = "Baahubali";
Movie.releaseDate ="2-05-2017";
Movie.actors =["Prabhas","Rana","Tamnaah"];

var AvengersMovie = Object.create(Movie);//Movie is the object template for avengers movie
AvengersMovie.title = "Avengers";
AvengersMovie.releaseDate ="12-05-2017";
AvengersMovie.actors =["x","y","Robert"];
console.log(typeof AvengersMovie);//object
console.log(typeof Movie);//object
console.log(typeof AvengersMovie.__proto__ === typeof Movie.__proto__);//true
console.log(typeof AvengersMovie.__proto__ === typeof Movie); //true
console.log(Movie.isPrototypeOf(AvengersMovie));//true
console.log(AvengersMovie.isPrototypeOf(Movie));//false
//following statement is true as the Object.prototype is on the top of the prototype chain.
console.log(typeof AvengersMovie.__proto__.__proto__ ===typeof Object.prototype);
