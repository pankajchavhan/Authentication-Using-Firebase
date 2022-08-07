import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';
import { SignInErrorConstants } from '../constants/signIn-error.constants';
import { SignInRequest, SignInResponse } from '../interface/auth.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  errorMsg!: string;
  isShowerror = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ]),
    });
  }

  get email(): FormControl {
    return this.loginform.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginform.get('password') as FormControl;
  }

  onSubmit(): void {
    const payload: SignInRequest = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.signIn(payload).subscribe(
      (res: SignInResponse) => {
        this.router.navigate([RoutePaths.LANDING_PAGE]);
        this.authService.isUser$.next(true);
      },
      (err: HttpErrorResponse) => {
        this.isShowerror = true;
        if (err.error?.error?.message === 'EMAIL_NOT_FOUND') {
          console.log('inside EMAIL_NOT_FOUND');
          this.errorMsg = SignInErrorConstants.EMAIL_NOT_FOUND;
        } else if (err.error?.error?.message === 'INVALID_PASSWORD') {
          console.log('inside INVALID_PASSWORD');
          this.errorMsg = SignInErrorConstants.INVALID_PASSWORD;
        } else if (err.error?.error?.message === 'USER_DISABLED') {
          console.log('inside USER_DISABLED');
          this.errorMsg = SignInErrorConstants.USER_DISABLED;
        }
      }
    );
  }

  registerUser(): void {
    this.router.navigate([RoutePaths.REGISTRATION]);
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.loginform.controls;
  }
}
