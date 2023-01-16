interface Product{
    name:string;  //readonly name:string; //we can not change
    cost:number;
    quantity:number;
    isAvailable ? :boolean;  //optional not compulsory to implement

    totalAmount():number;
    display():void;
}

let prod:Product={

    name:"Laptop",
    cost:60000,
    quantity:2,
   // isAvailable:true,

    totalAmount():number{
        return this.cost*this.quantity;
    },

    display():void{
       
        console.log(`
         ${this.name}\n
         ${this.cost}\n
         ${this.quantity}\n
         ${this.isAvailable}\n
         ${this.totalAmount()}
         `);

    }

}

//prod.name="Mobile";
prod.display();