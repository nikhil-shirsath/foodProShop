import { AppUser } from './models/app-user';
import  firebase  from 'firebase/compat/app';
import { Injectable } from '@angular/core';


import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs-compat';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db :AngularFireDatabase) { }

  save(user :firebase.User){
    console.log(user.displayName);
    this.db.object('/users/'+user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid :string) : FirebaseObjectObservable <AppUser |null >{
    return this.db.object('/users/'+uid);
  }


}
