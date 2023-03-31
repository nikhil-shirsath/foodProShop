import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService , private router : Router) {

   }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean {
    return this.auth.user$.pipe(map((user: boolean |any) => {
       if (user)
         return true;
       this.router.navigate(['/login']) ,{queryParams :{returnUrl:  state.url }};
       return false;
     }));
  }
}
