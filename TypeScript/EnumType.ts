//setting constant 

enum HttpStatus{
    PageNotFound=404,
    Ok=200,
    ServerError=500
}

enum ServerStatus{
    ServerNotFound,
    Ok,
    ServerError
}

enum Status{
    ServerNotFound=404,
    Ok,
    ServerError
}

enum CheckStatus{
    ServerNotFound=404,
    Ok="Created...",
    ServerError="ERROR..."
}

enum Expression{
    x=10,
    y=20,
    z=x+y
}

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

console.log("x = "+Expression.x);
console.log("y = "+Expression.y);
console.log("z = "+Expression.z);
