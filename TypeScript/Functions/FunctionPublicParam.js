var Test1 = /** @class */ (function () {
    function Test1() {
    }
    Test1.prototype.httpStatusCode = function () {
        if (this.viewName == "index.html")
            return "Response Status : OK";
        else
            return 404;
    };
    return Test1;
}());
var ob = new Test1();
ob.viewName = "index.html";
console.log(ob.httpStatusCode());
