var Database = /** @class */ (function () {
    function Database(connection) {
        for (var property in connection)
            console.log("".concat(property, " : ").concat(connection[property]));
    }
    return Database;
}());
var postgreSql = new Database({
    driver: 'PostgresDriver',
    user: 'admin',
    password: 'admin'
});
