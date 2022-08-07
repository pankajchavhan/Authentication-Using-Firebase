import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from 'src/app/interface/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  signUp(payload: SignUpRequest): Observable<SignUpResponse> {
    const reqPayload = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    return this.http.post<SignUpResponse>(environment.signUpApi, reqPayload);
  }

  signIn(payload: SignInRequest): Observable<SignInResponse> {
    const reqPayload = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    return this.http.post<SignInResponse>(environment.signInApi,reqPayload);
  }

  signOut(){
    this.isLoggedIn().next(false);
  }

  isLoggedIn(){
    return this.isLoggedIn$;
  }
}
