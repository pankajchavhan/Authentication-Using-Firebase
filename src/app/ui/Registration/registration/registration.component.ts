import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SignUpErrorConstants,
  SignUpSuccessConstant,
} from 'src/app/core/constants/signUp.constants';
import { PasswordStrengthValidator } from 'src/app/custom-form-validators/password-strength.validators';
import { RoutePaths } from 'src/app/core/enums/route-paths';
import { SignUpRequest, SignUpResponse } from 'src/app/core/interface/auth.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMsg!: string;
  isShowerror = false;
  regSuccessMsg!: string;
  isRegSuccess = false;
  hide = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        PasswordStrengthValidator()
      ]),
    });
  }

  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  onSubmit() {
    const payload: SignUpRequest = {
      email: this.email.value,
      password: this.password.value,
    };

    this.authService.signUp(payload).subscribe(
      (res: SignUpResponse) => {
        console.log(res);
        this.isRegSuccess = true;
        this.isShowerror = false;
        this.regSuccessMsg = SignUpSuccessConstant.REGISTRATION_SUCCESS;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.isShowerror = true;
        this.isRegSuccess = false;
        if (err.error?.error?.message === 'EMAIL_EXISTS') {
          this.errorMsg = SignUpErrorConstants.EMAIL_EXISTS;
        } else if (
          err?.error?.error?.message === 'TOO_MANY_ATTEMPTS_TRY_LATER'
        ) {
          this.errorMsg = SignUpErrorConstants.TOO_MANY_ATTEMPTS_TRY_LATER;
        } else if (err?.error?.error?.message === 'OPERATION_NOT_ALLOWED') {
          this.errorMsg = SignUpErrorConstants.OPERATION_NOT_ALLOWED;
        } else if (err?.error?.error?.message === 'INVALID_EMAIL') {
          this.errorMsg = SignUpErrorConstants.INVALID_EMAIL;
        }
      }
    );
  }

  redirectToLogIn(): void {
    this.router.navigate([RoutePaths.LOGIN]);
  }

  get form() {
    return this.registrationForm.controls;
  }
}
