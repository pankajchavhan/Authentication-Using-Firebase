import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject, of } from 'rxjs';
import { mockGoogleSignInApiResponse } from 'src/app/mock-api-response/googleSignInAPIResponse.mock';
import { mockSignInSuccessResponse } from 'src/app/mock-api-response/SignInApiSuccessresponse.mock';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let _isLoggedInSpySubject$: BehaviorSubject<any>;
  let routerSpy: jasmine.SpyObj<Router>;
  let angularFireAuthSpy: jasmine.SpyObj<AngularFireAuth>;

  beforeEach(()=>{
    _isLoggedInSpySubject$ = new BehaviorSubject<any>(null);
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post']);
    angularFireAuthSpy = jasmine.createSpyObj('AngularFireAuth',['signInWithPopup'])
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
    it('should call http.post with apiEndpoint and payload', () => {
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
    it('should call http.post with apiEndpoint and payload', () => {
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
    it('should call setLoggedInStatus with null when click on SignOut', () => {
      //Arrange
      spyOn(service, "setLoggedInStatus")
      //Act
      service.signOut();
      //expect
      expect(service.setLoggedInStatus).toHaveBeenCalledWith(null);
    });
  });
 
  describe('#setLoggedInStatus', () => {
    it('should call setLoggedInStatus with correct parameters', () => {
      //Arrange
      
      //Act
      //in setLoggedInStatus parameter it can be "signIn" Api res or "social signIn Res"
      service.setLoggedInStatus(mockGoogleSignInApiResponse());
      
      //expect
      service._isLoggedIn$.subscribe(result =>{
        expect(result).toEqual(mockGoogleSignInApiResponse());
      })
    });
  });

  describe('#getLoggedInStatus', () => {
    it('should return _isLoggedIn$ value', () => {
      //Arrange
      //in next parameter it can be "signIn" Api res or "social signIn Res"
      service._isLoggedIn$.next(mockSignInSuccessResponse());
      //Act
      service.getLoggedInStatus();
      //Assert
      service._isLoggedIn$.subscribe((result)=>{
        expect(result).toEqual(mockSignInSuccessResponse())
      });
    });
  });

  describe('#resetPassword', () => {
    it('should call http.post with apiEndpoint and payload', () => {
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

  describe('#googleSignIn', () => {
    it('should call Authlogin with GoogleAuthProvider', () => {
      //Arrange
      spyOn(service, 'AuthLogin')
      //Act
      service.googleSignIn();
      //expect
      expect(service.AuthLogin).toHaveBeenCalledWith(new GoogleAuthProvider);
    });
  });

  describe('#FacebookSignIn', () => {
    it('should call Authlogin with FacebookAuthProvider', () => {
      //Arrange
      spyOn(service, 'AuthLogin')
      //Act
      service.FacebookSignIn();
      //expect
      expect(service.AuthLogin).toHaveBeenCalledWith(new FacebookAuthProvider);
    });
  });

  xdescribe('#AuthLogin', () => {
    it('should call signInWithPopup with GoogleAuthProvider', (done) => {
      //Arrange
      spyOn(service, 'setLoggedInStatus');
      //Act
      service.AuthLogin(new GoogleAuthProvider());
      //expect
    })
  });
});
