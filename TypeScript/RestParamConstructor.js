var DB = /** @class */ (function () {
    function DB(param1) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        console.log(param1);
        for (var _a = 0, param_1 = param; _a < param_1.length; _a++) {
            var item = param_1[_a];
            console.log(item);
        }
        for (var item in param) {
            console.log("".concat(item, " : ").concat(param[item])); // in the form of index and value
        }
        console.log(param1);
    }
    return DB;
}());
var query = new DB("select", "insert", "update", "delete");
