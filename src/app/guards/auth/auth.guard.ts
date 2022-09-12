import { Injectable } from '@angular/core';
import { CanLoad, Router,UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { catchError, map} from 'rxjs/operators';
import { RoutePaths } from 'src/app/core/enums/route-paths';

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
