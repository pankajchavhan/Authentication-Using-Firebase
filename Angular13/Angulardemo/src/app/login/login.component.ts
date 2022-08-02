import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginform = new FormGroup({
      email: new FormControl('',Validators.email),
      password: new FormControl('',Validators.required)
    })
  }

  onSubmit() {
    if (this.loginform.invalid) {
      return;
    }
    this.authService.signIn(this.loginform.value).subscribe((res:any)=>{
      console.log(res);
      console.log(this.loginform.get('email'));
      console.log(this.loginform.get('password'));
      this.router.navigate([RoutePaths.LANDING_PAGE])
    });
    //console.log(this.loginform.value);
  }

  registerUser() {
    this.router.navigate([RoutePaths.REGISTRATION]);
    console.log('navigate to registration page')
  }

  getErrorMessage(){

  }

  get form(){
    console.log(this.loginform.get('email'));
    return this.loginform.get('email');
  }
}
