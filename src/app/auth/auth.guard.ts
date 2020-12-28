import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { Role } from '../models/Role';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
      if(router.url === '/admin/auth') return true;

      return this.authService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        console.log(route.data)
        if (user) {
          if(route.data.roles && route.data.roles.indexOf(user.role) === -1){
            return this.router.createUrlTree([route.data.path === 'admin' ? '/admin/auth' : '/login'])
          }

          return true;
        }
        return this.router.createUrlTree([route.data.path === 'admin' ? '/admin/auth' : '/login']);
      })

    );
  }
  canActivateChild(childRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.canActivate(childRoute,state)
  }
}
