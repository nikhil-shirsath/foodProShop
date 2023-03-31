import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular-4-data-table/src/tools/data-table-resource';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy{
  products!:Product[];
  filteredProducts!: any[];
  subscription :Subscription;
  tableResource!: DataTableResource<Product>;
  items :Product[] = [];
  itemCount!: number;    //Property 'itemCount' has no initializer and is not definitely assigned in the constructor. this error removed using this ! operator.

constructor( private productService : ProductService){
  this.subscription = this.productService.getAll()
  .subscribe(products =>{

    this.filteredProducts = this.products =  products;
    this.initilizeTable(products);
  } );
}

private initilizeTable(products : Product[]){
  this.tableResource = new DataTableResource(products);
  this.tableResource.query({offset :0})
    .then(items => this.items = items);
  this.tableResource.count()
    .then( count => this.itemCount = count);
}

//i have removed this function from its html file
// reloadItems( params){

//   if(! this.tableResource) return;
//   this.tableResource.query({offset :0})
//   .then(items => this.items = items);
// }


filter(query:string){         // this code is for searching client side
  this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

  this.initilizeTable(this.filteredProducts);
}

ngOnInit(): void {
    
}

ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
