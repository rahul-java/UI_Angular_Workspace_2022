var ConnectionDB = /** @class */ (function () {
    function ConnectionDB(dbName) {
        if (dbName == undefined) {
            console.log("Not Connected...");
        }
        else {
            console.log("Connected to..." + dbName);
        }
    }
    ConnectionDB.prototype.insert = function () {
        console.log("data inserted successfully");
    };
    return ConnectionDB;
}());
var con = new ConnectionDB();
var conn = new ConnectionDB("PostgreSql");
conn.insert();
