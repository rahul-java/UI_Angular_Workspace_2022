interface Product{
    name:string;
    cost:number;
    isAvailable:boolean;
}

class Device{
    constructor(item:Product){

        for(var prop in item){
            console.log(`${prop} : ${item[prop]}`)

        }

    }
}

let laptop=new Device({
    name:'HP',
    cost:50000,
    isAvailable:true
});