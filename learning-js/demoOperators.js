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

console.log("this is where we look at the unary ops");
var baseValue = 9;
console.log(baseValue++);
console.log(++baseValue);

var result = baseValue++ * 10;
console.log(result);

result = ++baseValue * 10;
console.log(result);


console.log("we are here to test the boolean values");
console.log(true && true);
console.log(false && true);
console.log(false && false);
var obj = { attr: "niranjan" };
console.log(obj && true);
console.log(obj && false);
console.log(obj && 99);
console.log(true && obj);
console.log(false && obj);

console.log("trying for the or ops ");
console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log(obj || true);
console.log(obj || false);
console.log(obj || 99);
console.log(true || obj);
console.log(false || obj);


console.log("equality operators");
console.log(true == true);
console.log(false == false);
console.log(42 == 42);
console.log(42 == "42");


var obj = { valueOf: function () { return 42; } };
console.log(42 == obj);

console.log(42 === "42");
console.log(42 === obj);