let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];

// console.log(arr1.slice(3,7));

// console.log(arr1.concat(arr2));
// console.log(...arr1,...arr2);
// console.log(..."This is example of : ",..."Concatination");
// console.log(..."This is second array : ",...arr2);
// console.log(...arr1,..." : This is second array. ");
// console.log("Hello");

// console.log([...arr1.slice(5),...arr1.slice(0,5)]);

console.log(
    [
        arr1.slice(5),
        arr1.slice(0,5)
    ]
);

console.log(
    [
        arr1.slice(5).reduce((currentVal,nextVal)=>{
            return currentVal+nextVal;
        }) ,
        arr1.slice(0,5).reduce((currentVal,nextVal)=>{
            return currentVal+nextVal;
        })
    ]
);

console.log(
    [
        arr1.slice(5).reduce((currentVal,nextVal)=>{
            return currentVal+nextVal;
        }) ,
        arr1.slice(0,5).reduce((currentVal,nextVal)=>{
            return currentVal+nextVal;
        })
    ].reduce((currentVal,nextVal)=>{
        return currentVal+nextVal;
    })
);