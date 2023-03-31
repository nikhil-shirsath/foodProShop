import { Product } from './models/product';
import { AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireAuth) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated : new Date().getTime()
       
      });

    }

    private getCart(cartId :string){
      return this.db.object('/shopping-carts/'+cartId);
    }

    private async getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      if(cartId) return cartId;

        let result = await this.create();
        localStorage.setItem('cartId',result.key);
        return result.key;
   
    }

   async addToCart(product :Product){
      let cartId = await this.getOrCreateCartId();
      let item$ = this.db.object('/shopping-carts/'+cartId+'/items'+product.$key)
    
      item$.take(1).subscribe(item =>{
        if(item.$exist()) item$.update({ quantity : item.quantity +1});
        else item$.set({product:product ,quantity:1});
      });
    }
}

