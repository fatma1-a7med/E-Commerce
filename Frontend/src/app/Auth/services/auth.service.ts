// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api';
  private jwtHelper = new JwtHelperService();
  isLoggedIn: boolean | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // isAuthenticated() {
  //   const token = localStorage.getItem('token');
  //   return token && !this.jwtHelper.isTokenExpired(token);
  // }

  // logout() {
  //   this.http.post(`${this.baseUrl}/logout`, {}).subscribe(
  //     res => {
  //       // Successfully logged out from the server, remove token from local storage
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/login']);
  //     },
  //     err => {
  //       console.error('Error logging out', err);
  //       // Handle error, but still remove token from local storage
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/login']);
  //     }
  //   );
  // }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }
  


  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  toggleLogin(status: boolean): void {
    // Update a variable or state to reflect the login status
    this.isLoggedIn = status;
  
    // Perform any other necessary actions, such as updating UI or redirecting
    if (this.isLoggedIn) {
      // User is logged in, update UI accordingly
      this.router.navigate(['/dashboard']);
    } else {
      // User is logged out, update UI accordingly
      this.router.navigate(['/login']);
    }
  }
}

