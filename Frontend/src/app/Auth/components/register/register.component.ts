
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule ,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { JarwisService } from '../../../_services/jarwis.service';
import { TokenService } from '../../../_services/token.service';
import { AuthService } from '../../../_services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form = {
    email: '',
    username: '', // updated from name to username
    password: '',
    password_confirmation: '',
    gender: '',
    image: null as File | null
  };

  public error: any = {}; // Initialize error as an object

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth :AuthService

  ) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('email', this.form.email);
    formData.append('username', this.form.username); // updated from name to username
    formData.append('password', this.form.password);
    formData.append('password_confirmation', this.form.password_confirmation);
    formData.append('gender', this.form.gender);
    if (this.form.image) {
      formData.append('image', this.form.image);
    }

    this.Jarwis.signup(formData).subscribe(
     // data => console.log(data),
      data=> this.handleResponse(data),
      error=> this.handleError(error)
    );
  }
  handleResponse(data: any) {
    console.log('API Response:', data);
    console.log('Token:', data.token);
    this.Token.handle(data.token);
    this.router.navigateByUrl('/products');
  }
  
  

  handleError(error: HttpErrorResponse) {
    this.error = error.error.errors;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.form.image = file;
    }
  }

  ngOnInit() {
  }

}
