function fun_DataTypes()
{
    var name:string="Rahul Kumar Pandey";
    let email:string="rahul@gmail.com";
    const id:number=101;
    let binaryId:number=0b1100101; //binary : 0b
    let octalId:number=0o145; //octal : 0c
    let hexaDemicalId:number=0x65; //hexaDemical : 0x
    let salary:null=null; 
    let job:undefined=undefined;
    let male:boolean=true;

    document.write(` Name : ${name} <br>
     Email : ${email} <br>
     ID : ${id} <br>
     BinaryId : ${binaryId} <br>
     OctalId : ${octalId} <br>
     HexaDemicalId : ${hexaDemicalId} <br>
     Salary : ${salary} <br>
     Job : ${job} <br>
     Male : ${male} <br>`
    );


}
fun_DataTypes();