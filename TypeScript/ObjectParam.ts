class Database{
    constructor(connection:any){
       for(var property in connection)
          console.log(`${property} : ${connection[property]}`)
    }
}
let postgreSql=new Database({
    driver:'PostgresDriver',
    user:'admin',
    password:'admin'
});