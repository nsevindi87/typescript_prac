import {IProductService} from "./IProductService";
import { Product } from './Product';

//Implement interface dedigimiz zaman interface icindekiler buraya geliyor.
//Farkli datanaselerin kullaniminda degisim daha kolay olacakmis.
class ProductService implements IProductService{

    
    getById(id: number): Product {
        throw new Error("Method not implemented.");
    }

    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }

    saveProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }

    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }

}