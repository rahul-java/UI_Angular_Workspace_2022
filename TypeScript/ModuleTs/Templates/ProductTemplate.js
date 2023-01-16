"use strict";
exports.__esModule = true;
exports.ProductTemplate = void 0;
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
    }
    ProductTemplate.prototype.Display = function () {
        console.log("\n          Device Id : ".concat(this.DeviceId, "\n\n          Device Name : ").concat(this.DeviceName, "\n\n          Product Name : ").concat(this.ProductName, "\n\n          Product Price : ").concat(this.ProductPrice, "\n\n          Product Quantity : ").concat(this.ProductQuantity, "\n\n          Total Cost : ").concat(this.TotalCost(), "\n\n          "));
    };
    return ProductTemplate;
}());
exports.ProductTemplate = ProductTemplate;
