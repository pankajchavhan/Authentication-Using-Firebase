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
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
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
      this.router.navigate([RoutePaths.LANDING_PAGE]);
    });
  }

  registerUser(): void {
    this.router.navigate([RoutePaths.REGISTRATION]);
  }

  get form() {
    return this.loginform.get('email');
  }
}
