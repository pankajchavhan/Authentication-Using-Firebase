import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';
import { resetPasswordErrorConstants } from '../constants/reset-password.constants';
import { SignInErrorConstants } from '../constants/signIn-error.constants';
import { PasswordStrengthValidator } from '../custom-form-validators/password-strength.validators';
import { SignInRequest, SignInResponse } from '../interface/auth.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  forgotPasswordForm!:FormGroup;
  errorMsg!: string;
  isShowerror = false;
  passwordHide = true;
  forgotPassword=false;
  showSuccessMsgOfForgotPassword=false;
  showErrorOfForgotPassword=false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        PasswordStrengthValidator()
      ]),
    });

    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required])});

  }

  get email(): FormControl {
    return this.loginform.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginform.get('password') as FormControl;
  }
  
  get forgotPasswordEmail(): FormControl {
    return this.forgotPasswordForm.get('email') as FormControl;
  }

  onSubmit(): void {
    const payload: SignInRequest = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.signIn(payload).subscribe(
      (res: SignInResponse) => {
        this.router.navigate([RoutePaths.LANDING_PAGE]);
        this.authService.isLoggedIn().next(true);
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

  resetPassword(){
    this.router.navigate([RoutePaths.FORGOT_PASSWORD]);
  }

  sendCode(){
    const reqPayload = {
      email: this.forgotPasswordEmail.value,
      requestType:"PASSWORD_RESET"
    };
    this.authService.resetPassword(reqPayload).subscribe(email=>{
      this.showSuccessMsgOfForgotPassword=true;
      this.showErrorOfForgotPassword=false;
      this.forgotPassword=false;
    },
    (err: HttpErrorResponse) => {
      this.showSuccessMsgOfForgotPassword=false;
      this.showErrorOfForgotPassword = true;
      if (err.error?.message === 'EMAIL_NOT_FOUND') {
        this.errorMsg = resetPasswordErrorConstants.EMAIL_NOT_FOUND;
      }
    }
    );
  }
}
