function sample():any{

    let obj={
        "name":"Rahul Pandey",
        "salary":75500,
        "add":"CKT"
    }
    return obj;

}

console.log(sample());

let s1=sample();
for(var prop in s1)
 console.log(`${prop} : ${s1[prop]}`);

