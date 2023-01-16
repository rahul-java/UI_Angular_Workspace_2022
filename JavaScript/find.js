let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];

// console.log(arr1.find((element,index)=>{
//      return element===3;
// }));

arr1.find((element,index)=>{
    return element===3;
}) ;

//search an element , if available then find its index then delete this element

if(arr1.find((element,index)=>{
    return element===3;
}))
   {
    arr1.splice(2,1);
   }
   console.log(arr1);

let searchElement=arr2.find((element,index)=>{
    return element===13;
   })
   if(searchElement)
   {
    let index=arr2.findIndex((element,index)=>{
        return element===searchElement;
       })
    arr2.splice(index,1);
   }
   console.log(arr2);
