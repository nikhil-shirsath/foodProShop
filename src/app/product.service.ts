import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private db: AngularFireDatabase) { }

  create(product :object){          // this method is going to use in the product-form.ts files save method 
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }

  get(productId :string){   // this function is getting string parameter as a product id  mentioned in productformcomponents.ts
    return this.db.object('/products/'+productId);
  }

  update(productId:string , product:object){
   return this.db.object('/products/'+productId).update(product);
  }

  delete(productId :String){
    return this.db.object('/products/'+productId).remove();
  }
}

