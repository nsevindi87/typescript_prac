import {Product} from "./Product"


//Sadece method imzalari tanimlanacak.
//Body yer almayacak
interface IProductService{
    getById(id:number): Product;
    getProducts(): Array<Product>;
    //getProducts(): Product[];
    saveProduct(product: Product):void;
    deleteProduct(product:Product): void;
}