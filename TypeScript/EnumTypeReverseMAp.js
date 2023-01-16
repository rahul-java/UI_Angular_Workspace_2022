var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["PageNotFound"] = 404] = "PageNotFound";
})(HttpStatus || (HttpStatus = {}));
var statusCode = HttpStatus.PageNotFound;
console.log("Status Code of Page Not Found : ".concat(statusCode));
console.log("Status Message : " + HttpStatus[404]);
var statusMsg = HttpStatus[statusCode];
console.log(statusMsg);
