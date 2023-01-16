function fun_One(userName) {
    return "Hello , ".concat(userName);
}
function fun_Two(x) {
    return "Hello , ".concat(x);
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.display = function () {
        console.log(fun_One("Rahul Kumar Pandey"));
        console.log(fun_Two("Welcome"));
        console.log(fun_Two(73500));
    };
    return Test;
}());
var obj1 = new Test();
obj1.display();
