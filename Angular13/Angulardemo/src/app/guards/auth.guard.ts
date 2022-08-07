import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { catchError, map, skipWhile, take, tap } from 'rxjs/operators';
import { RoutePaths } from '../enums/route-paths';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  isLoggedIn!: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn().pipe(map(res => {
      this.isLoggedIn = res;
      if (this.isLoggedIn) {
        return true;
      } else {
        return this.router.createUrlTree([RoutePaths.LOGIN]);
      }
    }),catchError(()=>{
      return of(this.router.createUrlTree([RoutePaths.LOGIN]));
    }))
  }
}
