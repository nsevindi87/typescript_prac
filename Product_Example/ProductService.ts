import {IProductService} from "./IProductService";
import { Product } from './Product';
import { SimpleDataSource } from "./SimpleDataSource";

//Implement interface dedigimiz zaman interface icindekiler buraya geliyor.
//Farkli datanaselerin kullaniminda degisim daha kolay olacakmis.
class ProductService implements IProductService{

    private dataSource: SimpleDataSource;
    private products: Array<Product>

    //Database den gelen listeyi yeni olusturdugumuz products array icine atiyoruz.
    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p))
    }
    
    getById(id: number): Product {
        return this.products.filter(p=>p.id === id)[0];
    }

    getProducts(): Product[] {
        return this.products;
    }


    //0 veya null ise yeni bir Id üret ve array icine gönder.
    //degilse yani id varsa ürün varsa ürünün indexini bul ve splice ile yerlestir.
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id == null){
            product.id = this.generateId();
            this.products.push(product);
        }else{
            let index = this.products.indexOf(product);
            this.products.splice(index,1, product);
        }
    }
    

    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index >0){
            this.products.splice(index,1);
        }
    }

    //yeni bir ID olusturmak icin kullaniyoruz.
    private generateId():number{
        let key = 1;
        while(this.getById(key)!= null){
            key++;
        }
        return key;
    }

}