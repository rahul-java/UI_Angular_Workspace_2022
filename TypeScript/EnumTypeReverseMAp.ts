
enum HttpStatus{
    PageNotFound=404
    }

    let statusCode=HttpStatus.PageNotFound;
    console.log(`Status Code of Page Not Found : ${statusCode}`);
    console.log("Status Message : "+HttpStatus[404]);
    let statusMsg=HttpStatus[statusCode];
    console.log(statusMsg);