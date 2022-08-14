import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ResetPasswordRequest, ResetPasswordResponse, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from 'src/app/interface/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 _isLoggedIn$ = new BehaviorSubject<boolean>(false);
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
    this.setLoggedInStatus(false);
  }

  getLoggedInStatus():Observable<boolean>{
    return this._isLoggedIn$.asObservable();
  }

  setLoggedInStatus(value: boolean){
   this._isLoggedIn$.next(value);
  }

  resetPassword(reqPayload:ResetPasswordRequest):Observable<ResetPasswordResponse>{
   return this.http.post<ResetPasswordResponse>(
    environment.resetPasswordApi,reqPayload
    );
  }
}
