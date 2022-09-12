import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ResetPasswordRequest,
  ResetPasswordResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from 'src/app/core/interface/auth.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/core/enums/route-paths';

//import firebase from "firebase/app";
import 'firebase/auth';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _isLoggedIn$ = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

 
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
    return this.http.post<SignInResponse>(environment.signInApi, reqPayload);
  }

  // Sign in with google
  googleSignIn() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Sign in with Facebook
  FacebookSignIn() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((response) => {
        this.setLoggedInStatus(response);
        this.router.navigate([RoutePaths.LANDING_PAGE]);
        console.log('google signin successfully',response);
      })
      .catch((error) => {
        console.log("google sigin api error",error);
      });
  }

  signOut() {
    this.setLoggedInStatus(null);
  }

  getLoggedInStatus(): Observable<any> {
    return this._isLoggedIn$.asObservable();
  }

  setLoggedInStatus(signInRes:any) {
    this._isLoggedIn$.next(signInRes);
  }

  resetPassword(
    reqPayload: ResetPasswordRequest
  ): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(
      environment.resetPasswordApi,
      reqPayload
    );
  }
}
