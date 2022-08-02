import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from '../enums/route-paths';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate([RoutePaths.LOGIN]);
    console.log('navigate to login page')
  }

}
