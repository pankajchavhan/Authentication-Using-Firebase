import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(()=>{
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post']);
  })
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
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
    it('it should set isUser$ false when click on SignOut', () => {
      service.signOut();
      expect(service.isUser$).toBeFalsy
    });
  });
});
