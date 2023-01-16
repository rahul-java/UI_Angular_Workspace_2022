class ConnectionDB{

    constructor(private dbName?:string){
        if(dbName==undefined)
        {
            console.log("Not Connected...");
        }
        else
        {
            console.log("Connected to..."+dbName);
        }
    }


    insert(){
        console.log("data inserted successfully"+this.dbName);
    }
}
let con=new ConnectionDB();
let conn=new ConnectionDB("PostgreSql");
conn.insert();