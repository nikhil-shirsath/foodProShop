import { switchMap, map } from 'rxjs/operators';


import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';


import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor( private auth : AuthService , private userService: UserService) { }

  canActivate() :Observable<boolean>{
    return this.auth.appUser$
  .map(appUser => appUser.isAdmin)
  }
 


}
