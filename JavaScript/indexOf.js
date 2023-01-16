let arr1=[1,2,3,1,2,4,5];

arr1.forEach((element,index)=>{
  //arr1.indexOf(element) : it will index of repeation terms
  console.log("Excluding Repeating element Index "+element+" is : "+arr1.indexOf(element)); 
  //arr1.indexOf(element,index) : it will return actual index of element
  console.log("Actual Index "+element+" is : "+arr1.indexOf(element,index));
  console.log(element,arr1.indexOf(element),index); 
  console.log();
  
});