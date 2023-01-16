let arr1=[1,2,3,4,5,6,7,8,9];

//  console.log(arr1.splice(5,2));
//  console.log(arr1.splice(5,2));
//  console.log(arr1);
// arr1.splice(5,0,6,7);
// console.log(arr1);
// arr1.splice(9,0,10);
// console.log(arr1);


// console.log(arr1.findIndex((element,index)=>{
// return element===6;
// }));


// let index=arr1.findIndex((element,index)=>{
//     return element===9;
// });
// let totalNo=1;
// arr1.splice(index,totalNo);
// console.log(arr1);

//OR

arr1.splice(arr1.findIndex((element,index)=>{
    return element===9;
}),1);
console.log(arr1);

