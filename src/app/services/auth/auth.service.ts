import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ResetPasswordRequest, ResetPasswordResponse, SignInRequest, SignInResponse, SignUpRequest, SignUpResponse} from 'src/app/interface/auth.model';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

//import firebase from "firebase/app";
import "firebase/auth";
import * as firebase from 'firebase/compat';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient,private afAuth:AngularFireAuth,private router:Router) {}

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

  // googleSignIn(){
  //  // this.afAuth.signInWithRedirect(new firebase..GoogleAuthProvider())
  // }
  
  googleSignIn() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.setLoggedInStatus(true);
        this.router.navigate([RoutePaths.LANDING_PAGE]);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

    // Sign in with Facebook
    FacebookAuth() {
      return this.AuthLogin(new FacebookAuthProvider());
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
