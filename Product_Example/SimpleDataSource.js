"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "Samsung S4", "Telefon", 4000), new Product_1.Product(3, "Samsung S3", "Telefon", 5000), new Product_1.Product(4, "Samsung S2", "Telefon", 7000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
//let p = new SimpleDataSource() dedigimiz anda bu constructer calisir ve products arrayin icine bu veriler atanir.
//Bunu database olarak olusturduk. Fake olarak
