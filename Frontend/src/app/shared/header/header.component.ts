import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenService } from '../../_services/token.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public loggedIn: boolean | undefined;


constructor(
  private Auth: AuthService,
  private router: Router,
  private Token: TokenService
) { }

ngOnInit() {
  this.Auth.authStatus.subscribe(value => this.loggedIn = value);
}

logout(event: MouseEvent) {
  event.preventDefault();
  this.Token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/login');
}


}