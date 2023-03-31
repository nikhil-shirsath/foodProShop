import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
categories$;
product = {};
id;
  constructor (
    private router:Router,
    private route :ActivatedRoute,
    private categoryService : CategoryService ,
    private productService : ProductService){ 
    this.categories$ = this.categoryService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product:object){ // there is a error that the product is internally any return type so i made it as an object.
    
    if(this.id) this.productService.update(this.id,product);
    else  this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }


  delete(){
    if(!confirm('Are you sure you want to delete the product')) return ;

      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);    //this line sends the admin to the previous active route.

    
  }
}
