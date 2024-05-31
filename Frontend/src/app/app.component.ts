import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
<<<<<<< HEAD
import { HttpClient, HttpContextToken } from '@angular/common/http';
import { AuthService } from './Auth/services/auth.service';

import { NgForm, FormsModule } from '@angular/forms';

=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { ProductDetailsComponent } from './admin/products/product-details/product-details.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
>>>>>>> 44a40970cc9b9a097624c8ee9a2eceb127165521

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,RouterLink,SharedComponent,FormsModule],
=======
  imports: [RouterOutlet,RouterLink,SharedComponent, OrderDetailsComponent,HttpClientModule, ProductDetailsComponent,AdminHeaderComponent],
>>>>>>> 44a40970cc9b9a097624c8ee9a2eceb127165521
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'E_commereceApp';
  
}
