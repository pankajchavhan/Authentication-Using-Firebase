import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SignUpErrorConstants, SignUpSuccessConstant } from 'src/app/constants/signUp.constants';
import { RoutePaths } from 'src/app/enums/route-paths';
import { mockSignUpErrorResponse, mockSignUpErrorResponse1, mockSignUpErrorResponse2, mockSignUpErrorResponse3 } from 'src/app/mock-api-response/SignUpApiErrorResponse.mock';
import { mockSignUpSuccessResponse } from 'src/app/mock-api-response/SignUpApiSucessResponse.mock';

import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authServiceSpy = jasmine.createSpyObj('AuthService',['signUp'])
    
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy} 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('it should call buildform', () => {
      spyOn(component, 'buildForm');
      component.ngOnInit();
      expect(component.buildForm).toHaveBeenCalled;
    });
  });

  describe('#onSubmit', () => {

    it('it should call Authservice.SignUp method with valid request', () => {
      authServiceSpy.signUp.and.returnValue(of());
      const mockSignUpRequest ={
        email: 'pankaj@gmail.com',
        password: '12345678'
      };
      component.email.setValue('pankaj@gmail.com');
      component.password.setValue('12345678');
      component.onSubmit();

      expect(authServiceSpy.signUp).toHaveBeenCalledWith(mockSignUpRequest);
    });

    it('it should show Registration Success alert message', () => {
      
      authServiceSpy.signUp.and.returnValue(of(mockSignUpSuccessResponse()))
      
      component.onSubmit();
   
      expect(component.regSuccessMsg).toEqual(SignUpSuccessConstant.REGISTRATION_SUCCESS);
    });

    it('it should set errorMsg equal to SignUpErrorConstants.EMAIL_EXISTS  when errormsg is"EMAIL_EXISTS" ', () => {

      authServiceSpy.signUp.and.returnValue(throwError(mockSignUpErrorResponse()));
      component.onSubmit();
   
      expect(component.errorMsg).toEqual(SignUpErrorConstants.EMAIL_EXISTS);
    });

    it('it should set errorMsg equal to SignUpErrorConstants.TOO_MANY_ATTEMPTS_TRY_LATER  when errormsg is"TOO_MANY_ATTEMPTS_TRY_LATER" ', () => {

      authServiceSpy.signUp.and.returnValue(throwError(mockSignUpErrorResponse1()));
      component.onSubmit();
   
      expect(component.errorMsg).toEqual(SignUpErrorConstants.TOO_MANY_ATTEMPTS_TRY_LATER);
    });

    it('it should set errorMsg equal to SignUpErrorConstants.OPERATION_NOT_ALLOWED  when errormsg is"OPERATION_NOT_ALLOWED" ', () => {

      authServiceSpy.signUp.and.returnValue(throwError(mockSignUpErrorResponse2()));
      component.onSubmit();
   
      expect(component.errorMsg).toEqual(SignUpErrorConstants.OPERATION_NOT_ALLOWED);
    });

    it('it should set errorMsg equal to SignUpErrorConstants.INVALID_EMAIL  when errormsg is"INVALID_EMAIL" ', () => {

      authServiceSpy.signUp.and.returnValue(throwError(mockSignUpErrorResponse3()));
      component.onSubmit();
   
      expect(component.errorMsg).toEqual(SignUpErrorConstants.INVALID_EMAIL);
    });
  });

  describe('#redirectToLogIn', () => {
    it('it should navigate to login page when click on "Have an Account?"', () => {
      component.redirectToLogIn();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });
  });

});
