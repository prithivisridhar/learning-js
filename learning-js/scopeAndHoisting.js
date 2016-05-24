//this phenomenon is whatis called as hoisting
function doThis() {
    return "niranjan"
}
console.log(doThis());



var message = "this is the sample message";
console.log(message);


//this is where we jump on to scopes
//the variable is on global namespace
solarDeclination = 23.45;
console.log(solarDeclination);
console.log(this.solarDeclination);
console.log(window.solarDeclination);
console.log(this === window);

var julianDay = 91;
function CalcSunrise() {
    //var julianDay = 92;
    console.log(julianDay);
}
//console.log(julianDay);
//CalcSunrise();

console.log("here are the results from the closure");
//and this is how it works from the closures
function CalJulianDay(gregorianDay) {
    var julianDay = 92;
    function CalcSolarClock() {
        console.log(julianDay);
    }
    CalcSolarClock();
}
console.log(julianDay);
CalJulianDay();

