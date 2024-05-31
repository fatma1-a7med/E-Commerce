
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule ,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm, FormsModule } from '@angular/forms';

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
    private http: HttpClient,
    private router: Router
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

    this.http.post('http://localhost:8000/api/register', formData).subscribe(
      (data: any) => this.handleResponse(data),
      (error: HttpErrorResponse) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    // Assuming data.access_token is returned by your API
    localStorage.setItem('access_token', data.access_token);
    this.router.navigateByUrl('/profile');
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
