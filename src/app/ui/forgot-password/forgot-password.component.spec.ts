import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoutePaths } from 'src/app/core/enums/route-paths';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { resetPasswordErrorConstants } from 'src/app/core/constants/reset-password.constants';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordResponse } from 'src/app/core/interface/auth.model';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['resetPassword']);
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
      declarations: [ForgotPasswordComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
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

  describe('sendResetPasswordLink', () => {
    it('should call Authservice.resetPassword method with valid request', () => {
      authServiceSpy.resetPassword.and.returnValue(of());
      const mockResetPasswordRequest = {
        email: 'pankaj@gmail.com',
        requestType:"PASSWORD_RESET"
      };
      component.forgotPasswordEmail.setValue('pankaj@gmail.com');
      component.sendResetPasswordLink();

      expect(authServiceSpy.resetPassword).toHaveBeenCalledWith(mockResetPasswordRequest);
    });

    it('should set "show" and "showErrorOfForgotPassword" value as false on resetPassword api success response', () => {
      const mockResetPasswordnResponse :ResetPasswordResponse = {
        email: 'pankaj@gmail.com'
      }
      authServiceSpy.resetPassword.and.returnValue(of(mockResetPasswordnResponse));

      component.sendResetPasswordLink();

      expect(component.showErrorOfForgotPassword).toBe(false);
      expect(component.show).toBe(false);
    });

    it('should set errorMsg value when errorMsg equal to resetPassword.EMAIL_NOT_FOUND" ', () => {
      const error=new HttpErrorResponse({
        error:{
          error:{
            code:400,
            message: "EMAIL_NOT_FOUND"
          }
        }
      });
      authServiceSpy.resetPassword.and.returnValue(
        throwError(error)
      );
      component.sendResetPasswordLink();

      expect(component.errorMsg).toEqual(resetPasswordErrorConstants.EMAIL_NOT_FOUND);
    });
    });

    describe('login', () => {
      it('it should navigate login page', () => {
        component.login();
        expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.LOGIN]);
      });
    });
});
