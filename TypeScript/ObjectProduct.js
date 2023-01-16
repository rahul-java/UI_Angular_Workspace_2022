var product = {
    name: "Mobile",
    price: 20000,
    quantity: 2,
    inStock: true,
    shipmentTo: ["Bhopal", "Hyd"],
    total: function () {
        return this.quantity * this.price;
    },
    print: function () {
        console.log("\n        Name : ".concat(this.name, " \n\n        Price : ").concat(this.price, " \n\n        Quantity : ").concat(this.quantity, "\n\n        In Stock : ").concat(this.inStock, "\n\n        Shipment : ").concat(this.shipmentTo, "\n\n        Total Bill : ").concat(this.total(), "\n        "));
    }
};
product.print();
