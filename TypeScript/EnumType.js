//setting constant 
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["PageNotFound"] = 404] = "PageNotFound";
    HttpStatus[HttpStatus["Ok"] = 200] = "Ok";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
var ServerStatus;
(function (ServerStatus) {
    ServerStatus[ServerStatus["ServerNotFound"] = 0] = "ServerNotFound";
    ServerStatus[ServerStatus["Ok"] = 1] = "Ok";
    ServerStatus[ServerStatus["ServerError"] = 2] = "ServerError";
})(ServerStatus || (ServerStatus = {}));
var Status;
(function (Status) {
    Status[Status["ServerNotFound"] = 404] = "ServerNotFound";
    Status[Status["Ok"] = 405] = "Ok";
    Status[Status["ServerError"] = 406] = "ServerError";
})(Status || (Status = {}));
var CheckStatus;
(function (CheckStatus) {
    CheckStatus[CheckStatus["ServerNotFound"] = 404] = "ServerNotFound";
    CheckStatus["Ok"] = "Created...";
    CheckStatus["ServerError"] = "ERROR...";
})(CheckStatus || (CheckStatus = {}));
var Expression;
(function (Expression) {
    Expression[Expression["x"] = 10] = "x";
    Expression[Expression["y"] = 20] = "y";
    Expression[Expression["z"] = 30] = "z";
})(Expression || (Expression = {}));
console.log(HttpStatus.PageNotFound);
console.log(HttpStatus.Ok);
console.log(HttpStatus.ServerError);
console.log(ServerStatus.ServerNotFound);
console.log(ServerStatus.Ok);
console.log(ServerStatus.ServerError);
console.log(Status.ServerNotFound);
console.log(Status.Ok);
console.log(Status.ServerError);
console.log(CheckStatus.ServerNotFound);
console.log(CheckStatus.Ok);
console.log(CheckStatus.ServerError);
console.log("x = " + Expression.x);
console.log("y = " + Expression.y);
console.log("z = " + Expression.z);
