"use strict";
exports.__esModule = true;
var ProductComponent_1 = require("../Components/ProductComponent");
var device = new ProductComponent_1.ProductComponent();
device.DeviceId = 101;
device.DeviceName = "Laptop";
device.ProductName = "HP";
device.ProductPrice = 70000;
device.ProductQuantity = 5;
device.ShowProduct();
