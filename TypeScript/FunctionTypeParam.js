var DbOne = /** @class */ (function () {
    function DbOne(passCode, success, failure) {
        if (passCode == "admin")
            console.log(success());
        else
            console.log(failure());
    }
    return DbOne;
}());
var mysql = new DbOne("Admin", function () { return "Connected to DB"; }, function () { return "Error"; });
