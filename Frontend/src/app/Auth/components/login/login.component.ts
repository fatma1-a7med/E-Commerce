import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { NgForm, FormsModule  } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JarwisService } from '../../../_services/jarwis.service';
import { TokenService } from '../../../_services/token.service';
import { asyncScheduler } from 'rxjs';
import { AuthService } from '../../../_services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form = {
      email: null,
      password: null
    };
  
    public error = null;
  
    constructor(
      private Jarwis: JarwisService,
      private Token: TokenService,
      private router: Router,
      private Auth : AuthService
    ) { }
  
    onSubmit() {

     
      this.Jarwis.login(this.form).subscribe(
        //data => console.log(data),
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  
    handleResponse(data:any) {
      this.Token.handle(data.token);
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/products');
    }
  
    handleError(error:HttpErrorResponse) {
      this.error = error.error.error;
    }
    ngOnInit() {
    }
  
  }

