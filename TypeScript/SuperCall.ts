class SuperClass{
    constructor(){
        console.log("Super Class is being called.....");
    }
}
class SubClass extends SuperClass{

    constructor(){
        super();
        console.log("Sub Class is being called.....");
    }
}
let obj=new SubClass();