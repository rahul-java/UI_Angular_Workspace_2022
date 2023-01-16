let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[10,20,30,40,50,60,70,80,90,100];
let arr3=[100,200,300,400,500,600,700,800,900,1000];

//includes()
console.log(arr1.includes(5));

//copyWithin(indx) where indx:CopyInIndx from the starting of array indx 0 to rest index
arr1.copyWithin(3);
console.log(arr1);

//copyWithin(indx1,indx2) where indx1:CopyInIndx indx2:CopyFromIndx then after remaining data according to rest indexes. 
arr2.copyWithin(3,5);
console.log(arr2);

//copyWithin(startingIndx,includeIndx,ixcludeIndx) then remaing data will be printed according to index no.
arr3.copyWithin(2,5,7);
console.log(arr3);