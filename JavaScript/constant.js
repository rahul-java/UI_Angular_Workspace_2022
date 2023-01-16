// const c=10;
// c=100;  //TypeError: Assignment to constant variable.
// console.log(c);

// const c_arr=[1,2,3,4,5,6,7,8,9,10];
// c_arr[0]=100; //valid
// console.log(c_arr);
// //c_arr=[10,20,30,40,50];  //TypeError: Assignment to constant variable.
// console.log(c_arr);

const c_obj={id:10, name:"Amit"};
//c_obj={id:20, name:"Abhishek"};  //TypeError: Assignment to constant variable.
c_obj.id=100;
c_obj.name="Rahul";
console.log(c_obj);