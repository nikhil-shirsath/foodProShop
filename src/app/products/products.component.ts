import { switchMap } from 'rxjs/operators';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products :Product[] = [];
  filterdProducts : Product[] = [];
  category!: string;
  constructor(
    route : ActivatedRoute,
    productService: ProductService ){

    productService
      .getAll()
      .switchMap(products => {
      this.products = products;
        return route.queryParamMap;
      })
      route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
    
        this.filterdProducts = (this.category) ?
          this.products.filter( p => p.category === this.category) :
          this.products;
      });





  }
}
