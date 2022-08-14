import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let _isLoggedInSpySubject$: BehaviorSubject<boolean>;
  let routerSpy: jasmine.SpyObj<Router>;
  let angularFireAuthSpy: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(()=>{
    _isLoggedInSpySubject$ = new BehaviorSubject<boolean>(false);
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post']);
  })
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: Router, useValue: routerSpy},
        {provide: AngularFireAuth, useValue: angularFireAuthSpy}
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#signUp', () => {
    it('it should call http.post with apiEndpoint and payload', () => {
      const mockSignUpRequest = {
        email: "pankaj1@gmail.com",
        password: "12345678",
        returnSecureToken: true,
      };
      service.signUp(mockSignUpRequest);
      expect(httpClientSpy.post).toHaveBeenCalledWith(environment.signUpApi,mockSignUpRequest);
    });
  });

  describe('#signIn', () => {
    it('it should call http.post with apiEndpoint and payload', () => {
      const mockSignInRequest = {
        email: "pankaj12@gmail.com",
        password: "123456781",
        returnSecureToken: true,
      };
      service.signIn(mockSignInRequest);
      expect(httpClientSpy.post).toHaveBeenCalledWith(environment.signInApi,mockSignInRequest);
    });
  });

  describe('#signOut', () => {
    it('it should set setLoggedInStatus false when click on SignOut', () => {
      //Arrange
      spyOn(service, "setLoggedInStatus")
      //Act
      service.signOut();
      //expect
      expect(service.setLoggedInStatus).toHaveBeenCalledWith(false);
    });
  });
 
  describe('#setLoggedInStatus', () => {
    it('it should set _isLoggedIn$  when click on setLoggedInStatus', () => {
      //Arrange
     
      //Act
      service.setLoggedInStatus(true);
      //expect
      expect(service._isLoggedIn$).toBeTrue;
    });
  });

  describe('#getLoggedInStatus', () => {
    it('it should set _isLoggedIn$  when click on getLoggedInStatus', () => {
      //Arrange
     
      //Act
      service.getLoggedInStatus();
      //expect
      expect(service._isLoggedIn$).toBeFalse;
    });
  });

  describe('#resetPassword', () => {
    it('it should call http.post with apiEndpoint and payload', () => {
      //Arrange
      const mockResetPasswordRequest = {
        email: 'pankaj@gmail.com',
        requestType:"PASSWORD_RESET"
      };
      //Act
      service.resetPassword(mockResetPasswordRequest);
      //expect
      expect(httpClientSpy.post).toHaveBeenCalledWith(environment.resetPasswordApi, mockResetPasswordRequest);
    });
  });

});
