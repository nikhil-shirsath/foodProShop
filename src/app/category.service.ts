import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db :AngularFireDatabase) { }


  /** here this type of query passing has been deprecated so the 
   * solution is pass the query using a method 
   */
  // getCategories(){
  //   return this.db.list('/categories',{
  //     query: {
  //       orderByChild : 'name'
  //     }
  //   });
  // }

  getAll(){
    return this.db.list('/categories', ref => (ref.orderByChild('name')) );
  }
}
