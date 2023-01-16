let product:any={

    name : "Mobile",
    price : 20000,
    quantity : 2,
    inStock : true,
    shipmentTo : ["Bhopal","Hyd"],

    total :function(){
        return this.quantity*this.price;
    },

    print:function(){

        console.log(`
        Name : ${this.name} \n
        Price : ${this.price} \n
        Quantity : ${this.quantity}\n
        In Stock : ${this.inStock}\n
        Shipment : ${this.shipmentTo}\n
        Total Bill : ${this.total()}
        `);
    }
}
product.print();