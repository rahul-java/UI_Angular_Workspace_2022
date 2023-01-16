var A = /** @class */ (function () {
    function A() {
        this.ns = 0;
        A.s = A.s + 1;
        this.ns = this.ns + 1;
    }
    A.prototype.view = function () {
        console.log("\n                    Static Member : ".concat(A.s, "\n                    Non-Static Member : ").concat(this.ns, "\n        "));
    };
    A.s = 0;
    return A;
}());
var obj1 = new A();
obj1.view();
var obj2 = new A();
obj2.view();
var obj3 = new A();
obj3.view();
