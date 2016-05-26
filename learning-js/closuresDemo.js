var filter = function () {
    var state = 500;
    return function () {
        return state += 10;
    }
}

var flt = filter();
console.log(flt);
console.log(flt());
console.log(flt());
console.log(flt());