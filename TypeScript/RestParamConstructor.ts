class DB{
    constructor(param1:string,...param:string[])
    {
        console.log(param1);
      for(var item of param)
        {
            console.log(item);
        }
      
        for(var item in param)
        {
            console.log(`${item} : ${param[item]}`); // in the form of index and value
        }
        console.log(`${param1}`);
    }
}
let query=new DB("select","insert","update","delete");
