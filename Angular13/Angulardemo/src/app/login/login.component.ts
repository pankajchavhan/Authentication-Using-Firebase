import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(
    private router: Router
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
    console.log(this.loginform.value);
  }

  registerUser() {
    this.router.navigate([RoutePaths.REGISTRATION]);
    console.log('navigate to registration page')
  }

}
