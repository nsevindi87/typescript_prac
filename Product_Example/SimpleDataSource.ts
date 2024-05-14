import { Product } from "./Product";


export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Telefon", 1000),
            new Product(2, "Samsung S4", "Telefon", 4000),
            new Product(3, "Samsung S3", "Telefon", 5000),
            new Product(4, "Samsung S2", "Telefon", 7000),
        );
    }

    getProducts(): Product[]{
        return this.products;
    }
}

//let p = new SimpleDataSource() dedigimiz anda bu constructer calisir ve products arrayin icine bu veriler atanir.
//Bunu database olarak olusturduk. Fake olarak