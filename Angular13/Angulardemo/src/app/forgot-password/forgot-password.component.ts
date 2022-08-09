import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resetPasswordErrorConstants } from '../constants/reset-password.constants';
import { RoutePaths } from '../enums/route-paths';
import { resetPasswordRequest, resetPasswordResponse } from '../interface/auth.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  show=true;
  forgotPasswordForm!:FormGroup;
  errorMsg!: string;
  showErrorOfForgotPassword=false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required])});

  }
    // convenience getter for easy access to form fields
    get form() {
      return this.forgotPasswordForm.controls;
    }
    
  get forgotPasswordEmail(): FormControl {
    return this.forgotPasswordForm.get('email') as FormControl;
  }
  
  sendResetPasswordLink(){
    const reqPayload:resetPasswordRequest = {
      email: this.forgotPasswordEmail.value,
      requestType:"PASSWORD_RESET"
    };
    this.authService.resetPassword(reqPayload).subscribe(email=>{
      this.show=false;
      this.showErrorOfForgotPassword=false;
    },
    (err: HttpErrorResponse) => {
      this.showErrorOfForgotPassword = true;
      if (err.error?.error?.message === 'EMAIL_NOT_FOUND') {
        this.errorMsg = resetPasswordErrorConstants.EMAIL_NOT_FOUND;
      }
    }
    );
  }

  login(){
    this.router.navigate([RoutePaths.LOGIN]);
  }

}
