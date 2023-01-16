function fun_One(userName:string):string{
   return `Hello , ${userName}`;
}

function fun_Two(x:string|number):string|number{
    
       return  x;
       
 }

class Test{
    display(){
        console.log(fun_One("Rahul Kumar Pandey"));
        console.log(fun_Two("Welcome"));
        console.log(fun_Two(73500));
    }
}
let obj1=new Test();
obj1.display();