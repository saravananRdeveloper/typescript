"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = exports.myFullName = void 0;
exports.myFullName = "pan";
var product = /** @class */ (function () {
    function product(id, name, prrice) {
        this.pId = id;
        this.pName = name;
        this.pPrice = prrice;
    }
    product.prototype.productDetails = function () {
        return "Id:".concat(this.pId, " Name:").concat(this.pName, " Price:").concat(this.pPrice);
    };
    return product;
}());
exports.product = product;
