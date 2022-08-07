import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { RoutePaths } from '../enums/route-paths';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth/auth.service';
import { of, throwError } from 'rxjs';
import { mockSignInSuccessResponse } from '../mock-api-response/SignInApiSuccessresponse.mock';
import { HttpErrorResponse } from '@angular/common/http';
import { SignInErrorConstants } from '../constants/signIn-error.constants';
import {
  mockSignInApiErrorResponse,
  mockSignInApiErrorResponse1,
  mockSignInApiErrorResponse2,
} from '../mock-api-response/SignInApiErrorResponse.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn','isLoggedIn']);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('it should call buildform', () => {
      spyOn(component, 'buildForm');

      expect(component.buildForm).toHaveBeenCalled;
    });
  });

  describe('onSubmit', () => {
    it('it should call Authservice.SignIn method with valid request', () => {
      authServiceSpy.signIn.and.returnValue(of());
      const mockSignInRequest = {
        email: 'pankaj@gmail.com',
        password: '12345678',
      };
      component.email.setValue('pankaj@gmail.com');
      component.password.setValue('12345678');
      component.onSubmit();

      expect(authServiceSpy.signIn).toHaveBeenCalledWith(mockSignInRequest);
    });

    xit('it should navigate to Landing page when signIn api success response', () => {
      authServiceSpy.signIn.and.returnValue(of(mockSignInSuccessResponse()));

      component.onSubmit();

      expect(routerSpy.navigate).toHaveBeenCalledWith([
        RoutePaths.LANDING_PAGE,
      ]);
    });

    it('it should set errorMsg equal to SignInErrorConstants.EMAIL_NOT_FOUND  when errormsg is"EMAIL_NOT_FOUND" ', () => {
      authServiceSpy.signIn.and.returnValue(
        throwError(mockSignInApiErrorResponse)
      );
      component.onSubmit();

      expect(component.errorMsg).toEqual(SignInErrorConstants.EMAIL_NOT_FOUND);
    });

    it('it should set errorMsg equal to SignInErrorConstants.INVALID_PASSWORD  when errormsg is"INVALID_PASSWORD" ', () => {
      // const mockErrorData = {...mockSignInApiErrorResponse().error, message:'INVALID_PASSWORD'};
      // console.log('from spec',mockErrorData)
      // const mockErrorResponse = {...mockSignInApiErrorResponse(),error: mockErrorData};
      // console.log('from spec 2',mockErrorResponse)
      authServiceSpy.signIn.and.returnValue(
        throwError(mockSignInApiErrorResponse1)
      );
      component.onSubmit();

      expect(component.errorMsg).toEqual(SignInErrorConstants.INVALID_PASSWORD);
    });

    it('it should set errorMsg equal to SignInErrorConstants.USER_DISABLED  when errormsg is"USER_DISABLED" ', () => {
      // const mockErrorData = {...mockSignInApiErrorResponse().error, message:'INVALID_PASSWORD'};
      // console.log('from spec',mockErrorData)
      // const mockErrorResponse = {...mockSignInApiErrorResponse(),error: mockErrorData};
      // console.log('from spec 2',mockErrorResponse)
      authServiceSpy.signIn.and.returnValue(
        throwError(mockSignInApiErrorResponse2)
      );
      component.onSubmit();

      expect(component.errorMsg).toEqual(SignInErrorConstants.USER_DISABLED);
    });
  });

  describe('registerUser', () => {
    it('it should navigate to registration page when click on "Create new accout?"', () => {
      component.registerUser();
      expect(routerSpy.navigate).toHaveBeenCalledWith([
        RoutePaths.REGISTRATION,
      ]);
    });
  });
});
