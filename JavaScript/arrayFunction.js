let arr1=[1,2,3,4,5,6,7,8,9];

/*
console.log(arr1);
console.log(arr1[0],arr1[8]);
console.log(arr1[10],arr1[-1]);
console.log(arr1.length);

delete arr1[5];
delete arr1[3];
delete arr1[8];
console.log(arr1);
console.log(arr1.length);
*/


/*
console.log(arr1.map((elemnet,index)=>{
    return elemnet*100;
}));
console.log(arr1.map((elemnet,index)=>{
    return "$"+elemnet;
}));
console.log(arr1.map((elemnet,index)=>{
    return elemnet+"%";
}));


console.log([1,2,3,4,5,6,7,8,9].filter((element,index)=>{
    return element>=5;
}));


console.log(arr1.map((element,index)=>{
    return element*10;
}).filter((element,index)=>{
    return element>=50;
}));

*/

/*
console.log(arr1.reduce((currentValue,nextValue)=>{
     return currentValue+nextValue;
}));

console.log(arr1.map((element,index)=>{
    return element*10;
}).filter((element,index)=>{
    return element>=50;
}).reduce((currentValue,nextValue)=>{
    return currentValue+nextValue;
}));

let array_one=["Aditech","To","Welcome"];
console.log(array_one.reduceRight((firstVal,nextVal)=>{
    return firstVal+" "+nextVal;
}));

*/

console.log(arr1.push(100)); //push(100) returns the total length of the array after adding element.
console.log(arr1);

console.log(arr1.unshift(99));
console.log(arr1);
console.log(arr1[0],arr1[10]);

console.log(arr1);
console.log(arr1.pop()); //remove 1 element from behind.
console.log(arr1);
console.log(arr1.shift()); //remove 1 element from begining.
console.log(arr1);