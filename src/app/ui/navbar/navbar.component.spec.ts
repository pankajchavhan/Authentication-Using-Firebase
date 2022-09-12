import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoutePaths } from 'src/app/core/enums/route-paths';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let authServiceSpy:jasmine.SpyObj<AuthService>;
  
  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['signOut','getLoggedInStatus']);
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
      declarations: [NavbarComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#login', () => {
    it('should navigate to login page when click on login button', () => {
      component.login();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });
  });

  describe('#logout', () => {
    it('should navigate to Login page when click on logout button', () => {
      component.logout();
      expect(authServiceSpy.signOut).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });
  });

  describe('#signUp', () => {
    it('should navigate to registration page when click on signUp button', () => {
      component.signUp();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.REGISTRATION]);
    });
  });

  describe('#navigateToDashboard', () => {
    it('should navigate to Dashboard page when click on Dashboard button', () => {
      component.navigateToDashboard();
      expect(routerSpy.navigate).toHaveBeenCalledWith([RoutePaths.DASHBOARD]);
    });
  });
});
