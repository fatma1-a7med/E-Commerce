import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm, FormsModule  } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  
    constructor(private http:HttpClient,
      // private Jarwis: JarwisService,
      // private Token: TokenService,
      private router: Router,
      private Auth: AuthService
    ) { }
  
    onSubmit() {

      return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
        data => console.log(data),
        error =>this.handleError(error)
      )
      // this.Jarwis.login(this.form).subscribe(
      //   data => this.handleResponse(data),
      //   error => this.handleError(error)
      // );
    }
  
    // handleResponse(data) {
    //   this.Token.handle(data.access_token);
    //   this.Auth.changeAuthStatus(true);
    //   this.router.navigateByUrl('/profile');
    // }
  
    handleError(error:any) {
      this.error = error.error.error;
    }
    ngOnInit() {
    }
  
  }

