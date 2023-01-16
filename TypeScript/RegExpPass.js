var pass = "Rahul_123";
var regExpPass = /(?=.*[A-Z])\w{6,12}/;
if (pass.match(regExpPass)) {
    console.log("Strong Password : ".concat(pass));
}
else {
    if (pass.length < 6)
        console.log("Poor Password : ".concat(pass, " the Length is shorter ").concat(pass.length));
    else
        console.log("Weak Password : ".concat(pass, " Does not match the Criteria given bellow :").concat(regExpPass));
}
