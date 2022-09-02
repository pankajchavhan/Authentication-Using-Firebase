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
  
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const urlTree = this.router.createUrlTree([RoutePaths.LOGIN]);
    return this.authService.getLoggedInStatus().pipe(map(loggedInResponse => {
      if (loggedInResponse) {
        return true;
      } else {
        return urlTree;
      }
    }),catchError(()=>{
      return of(urlTree);
    }));
  }
}
