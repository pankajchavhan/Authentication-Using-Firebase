import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface SigninCredentials{
  username:string,
  password:string,
  returnSecureToken:true
}

interface signinResponse{
  email:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  rootUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94';
  constructor(private http: HttpClient) { }

  signUp(email:any, password:any){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })

  }

  signIn(Credentials:SigninCredentials){
    return this.http.post<signinResponse>(this.rootUrl,Credentials)
  }
}
