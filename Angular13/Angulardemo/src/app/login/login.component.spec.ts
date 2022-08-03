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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy:jasmine.SpyObj<AuthService>;
  
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signIn','isUser$']);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientTestingModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        {provide: AuthService, useValue: authServiceSpy }
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

  describe('onSubmit', () => {
    it('it should navigate to registration page when click on "Create new accout?"', () => {
      component.registerUser();
      expect(authServiceSpy.isUser$).toBeTrue();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.LANDING_PAGE]);
    });
  });

  describe('registerUser', () => {
    it('it should navigate to registration page when click on "Create new accout?"', () => {
      component.registerUser();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.REGISTRATION]);
    });
  });
});
