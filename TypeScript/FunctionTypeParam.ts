class DbOne{
    constructor(passCode:string, success:any, failure:any){

        if(passCode=="admin")
          console.log(success());
        else
          console.log(failure());


    }
}

let mysql=new DbOne("Admin", function(){ return "Connected to DB";},function(){ return "Error";});