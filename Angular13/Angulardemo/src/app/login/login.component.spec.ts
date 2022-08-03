import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';
import { RoutePaths } from '../enums/route-paths';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: jasmine.SpyObj<Router>;
  let authService:jasmine.SpyObj<AuthService>;
  
  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    authService = jasmine.createSpyObj('AuthService', ['signIn','isUser$']);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: router },
        HttpClientModule,
        {provide: AuthService, useValue: authService }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('it should call buildform', () => {
      spyOn(component, 'buildForm');
      component.ngOnInit();
      expect(component.buildForm).toHaveBeenCalled;
    });
  });

  xdescribe('buildForm', () => {
    it('it should ', () => {});
  });

  xdescribe('onSubmit', () => {
    it('it should navigate to registration page when click on "Create new accout?"', () => {
      component.registerUser();
      expect(authService.isUser$).toBeTrue();
      expect(router.navigate).toHaveBeenCalledWith([RoutePaths.LANDING_PAGE]);
    });
  });

  describe('registerUser', () => {
    it('it should navigate to registration page when click on "Create new accout?"', () => {
      component.registerUser();
      expect(router.navigate).toHaveBeenCalledWith([RoutePaths.REGISTRATION]);
    });
  });
});
