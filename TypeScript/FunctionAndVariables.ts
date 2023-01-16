class Friends{

    name:string;

    constructor(message:string)
    {
        this.name=message;
    }
    greet():string{
        return "Hello "+this.name;

    }
}
let friend=new Friends("Rahul");
console.log(friend.greet());
