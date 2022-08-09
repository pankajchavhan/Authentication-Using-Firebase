import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth/auth.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { RoutePaths } from '../enums/route-paths';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        {provide: AuthService, useValue: authServiceSpy}
      ],
    }).compileComponents();
    guard = TestBed.inject(AuthGuard);
  });

  beforeEach(()=>{
    authServiceSpy = jasmine.createSpyObj('AuthService',['isLoggedIn']);
    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('#canLoad', () => {
    it('it should call isLoggedIn and navigate to specified url', () => {
      authServiceSpy.isLoggedIn.and.returnValue(new BehaviorSubject<boolean>(true));
      guard.canLoad();
      expect(authServiceSpy.isLoggedIn).toHaveBeenCalled();
      expect(routerSpy.createUrlTree).toHaveBeenCalled();
    });

    it('it should call isLoggedIn and navigate to dashboard page', () => {
      authServiceSpy.isLoggedIn.and.returnValue(new BehaviorSubject<boolean>(false));
      guard.canLoad();
      expect(authServiceSpy.isLoggedIn).toHaveBeenCalled();
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith([RoutePaths.DASHBOARD,]);
    });

    // it('it should navigate to dashboard page', () => {
    //   authServiceSpy.isLoggedIn.and.returnValue(throwError());
    //   guard.canLoad();
    //   expect(authServiceSpy.isLoggedIn).toHaveBeenCalled();
    // });

  });
});
