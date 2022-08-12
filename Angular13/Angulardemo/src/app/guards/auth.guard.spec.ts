import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../services/auth/auth.service';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { RoutePaths } from '../enums/route-paths';
import { mockSignInApiErrorResponse } from '../mock-api-response/SignInApiErrorResponse.mock';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(()=>{
    authServiceSpy = jasmine.createSpyObj('AuthService',['getLoggedInStatus']);
    routerSpy = jasmine.createSpyObj('Router', ['createUrlTree']);
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy}
      ],
    }).compileComponents();
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('#canLoad', () => {

    it('it should return true when getLoggedInStatus() return true', () => {
      //Arrange
      authServiceSpy.getLoggedInStatus.and.returnValue(of(true));
      //Act
      
      //expect
      const obs = guard.canLoad()as any;
      obs.subscribe((result: any)=>{
        expect(result).toBe(true);
      })
      expect(authServiceSpy.getLoggedInStatus).toHaveBeenCalled();
      
    });

    it('it should navigate to Login Page if authService.getLoggedInStatus() return false ', () => {
      //Arrange
      authServiceSpy.getLoggedInStatus.and.returnValue(of(false));
      //Act
      const obs = guard.canLoad()as any;
      obs.subscribe();
      //expect
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });

    it('it should navigate to Login page on API failure', () => {
      //Arrange
      authServiceSpy.getLoggedInStatus.and.returnValue(throwError({ error : "Api failure"}));
      //Act
      const obs = guard.canLoad()as any;
      obs.subscribe();
      //expect
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });

  });
});
