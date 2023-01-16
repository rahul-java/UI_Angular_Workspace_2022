function f1() {
    x = 100;
    console.log(" x = ".concat(x));
    var x; //Hoisting
}
f1();
