import { Product } from "./Product";
import {ProductService} from "./ProductService";

let _productService = new ProductService();

let result;

//result = _productService.getProducts();
result = _productService.getById(2)

let p = new Product();
p.id=1;
p.name = "IPhone";
p.price =222;
p.category = "Phone";

_productService.saveProduct(p);
//_productService.deleteProduct(result);
result = _productService.getProducts();


console.log(result)