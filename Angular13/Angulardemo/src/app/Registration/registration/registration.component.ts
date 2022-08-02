import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';
import { SignUpRequest, SignUpResponse } from 'src/app/interface/auth.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit():void {
    this.buildForm();
  }

  buildForm():void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit():void {
    const payload: SignUpRequest = {
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };

    this.authService.signUp(payload).subscribe((res:SignUpResponse) => {
      console.log(res);
    });
  }

  redirectToLogIn():void {
    this.router.navigate([RoutePaths.LOGIN]);
  }
}
