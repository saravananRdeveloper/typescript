"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getInfo = function () {
        return "".concat(this.name, " (ID: ").concat(this.id, ") - $").concat(this.price);
    };
    return Product;
}());
exports.Product = Product;
