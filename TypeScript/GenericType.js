//generic function
function viewRecord(args) {
    return args;
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.show = function (args) {
        return args;
    };
    return Test;
}());
var obj = new Test();
console.log("generic type Output  :" + obj.show(1000));
console.log("generic type Output  :" + obj.show("Hello"));
