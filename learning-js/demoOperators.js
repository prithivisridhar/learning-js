console.log(5 + 3);
console.log("niranjan" + "awati");
var result = 5.1 + 3.3;

console.log(result.toFixed(2));
console.log(5 + "10");
console.log("5" + "10");
console.log("hello" + 42 + 34);

console.log(200 + null);
console.log(200 + undefined);
console.log(200 + NaN);

console.log("and now for the minus op");
console.log("10" - "5");
console.log("hello" - "5");
result = 5.1 - 3.3;

console.log(result.toFixed(1));


var user = {
    valueOf: function () {
        return 10;
    }
}

console.log(10 - user);
console.log(10 + user);

console.log(10 * 10);
console.log(10 / 10);
console.log(10 / 0);
