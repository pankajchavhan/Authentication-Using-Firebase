import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';
import { SignInRequest, SignInResponse } from '../interface/auth.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),
      Validators.minLength(8)]),
    });
  }

  onSubmit(): void {
    if (this.loginform.invalid) {
      return;
    }
    const payload: SignInRequest = {
      email: this.loginform.value.email,
      password: this.loginform.value.password,
    };

    this.authService.signIn(payload).subscribe((res: SignInResponse) => {
      this.authService.isUser$.next(true);
      console.log(this.authService.isUser$);
      this.router.navigate([RoutePaths.LANDING_PAGE]);
    });
  }

  registerUser(): void {
    this.router.navigate([RoutePaths.REGISTRATION]);
  }

    // convenience getter for easy access to form fields
    get form() { return this.loginform.controls; }

}
