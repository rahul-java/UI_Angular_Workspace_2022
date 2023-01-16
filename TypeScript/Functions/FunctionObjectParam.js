function sample() {
    var obj = {
        "name": "Rahul Pandey",
        "salary": 75500,
        "add": "CKT"
    };
    return obj;
}
console.log(sample());
var s1 = sample();
for (var prop in s1)
    console.log("".concat(prop, " : ").concat(s1[prop]));
