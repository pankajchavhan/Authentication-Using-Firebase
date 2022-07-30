import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoutePaths } from 'src/app/enums/route-paths';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
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
      ],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
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

  describe('redirectToLogIn', () => {
    it('it should navigate to login page when click on "Have an Account?"', () => {
      component.redirectToLogIn();
      expect(router.navigate).toHaveBeenCalledWith([RoutePaths.LOGIN]);
    });
  });

});
