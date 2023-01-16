let arr1=[1,2,3,4,5,1,6,3,7,8,9];

console.log(arr1.filter((element,index)=>{
    return element===index;
}));

//removing the duplicate value from arr1 
console.log(arr1.filter((element,index)=>{
    return arr1.indexOf(element)===index;
}));
