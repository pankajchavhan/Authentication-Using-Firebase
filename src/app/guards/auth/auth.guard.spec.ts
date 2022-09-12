import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth/auth.service';
import { of, throwError } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/core/enums/route-paths';
import { mockSignInSuccessResponse } from 'src/app/mock-api-response/SignInApiSuccessresponse.mock';

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

    it('should return true when getLoggedInStatus() return signInSucess Response', () => {
      //Arrange
      authServiceSpy.getLoggedInStatus.and.returnValue(of(mockSignInSuccessResponse()));
      //Act
      const obs = guard.canLoad()as any;
      //Assert
      obs.subscribe((result: any)=>{
        expect(result).toBe(true);
      })
      expect(authServiceSpy.getLoggedInStatus).toHaveBeenCalled();
      
    });

    it('should navigate to Login Page if authService.getLoggedInStatus() return null ', () => {
      //Arrange
      authServiceSpy.getLoggedInStatus.and.returnValue(of(null));
      //Act
      const obs = guard.canLoad()as any;
      obs.subscribe();
      //expect
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });

    it('should navigate to Login page on API failure', () => {
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
