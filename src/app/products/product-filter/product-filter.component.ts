import { CategoryService } from './../../category.service';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categoryService$;
@Input('category') category!: string ;
  constructor(categoryService : CategoryService){
    this.categoryService$ = categoryService.getAll();
  }

}
