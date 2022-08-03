import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from 'src/app/interface/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUser$ = new Subject<boolean>();
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
    this.isUser$.next(false);
  }
}
