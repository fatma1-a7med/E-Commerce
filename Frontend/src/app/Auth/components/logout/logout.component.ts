// src/app/Auth/components/logout/logout.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  imports: [FormsModule],
  standalone: true,
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe(
      () => {
      //  this.authService.removeToken();
        this.authService.toggleLogin(false);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.error('Logout failed', err);
        // Even if logout request fails, remove the token and update state
        //this.authService.removeToken();
        this.authService.toggleLogin(false);
        this.router.navigate(['/login']);
      }
    );
  }
}



