import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email:any, password:any){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_gepdS1dZuxZAGu6R2_Qb0wUpJDUOh94',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })

  }
}
