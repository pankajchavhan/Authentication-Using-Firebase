import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutePaths } from '../enums/route-paths';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUser!:Observable<boolean>;
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.isUser=this.authService.isUser$;
  }

  login() {
    this.router.navigate([RoutePaths.LOGIN]);
  }

  logout(){
    this.authService.signOut();
    this.router.navigate([RoutePaths.LOGIN]);
  }
}
