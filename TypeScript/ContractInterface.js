var prod = {
    name: "Laptop",
    cost: 60000,
    quantity: 2,
    isAvailable: true,
    totalAmount: function () {
        return this.cost * this.quantity;
    },
    display: function () {
        console.log("\n         ".concat(this.name, "\n\n         ").concat(this.cost, "\n\n         ").concat(this.quantity, "\n\n         ").concat(this.isAvailable, "\n\n         ").concat(this.totalAmount(), "\n         "));
    }
};
//prod.name="Mobile";
prod.display();
