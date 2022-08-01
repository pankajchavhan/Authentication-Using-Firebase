import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from 'src/app/enums/route-paths';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  redirectToLogIn() {
    this.router.navigate([RoutePaths.LOGIN]);
    console.log('navigate to Login page')
  }
}