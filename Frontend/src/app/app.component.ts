import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedComponent } from './shared/shared.component';

import { NgForm, FormsModule } from '@angular/forms';


import { HttpClient, HttpClientModule,HttpContextToken } from '@angular/common/http';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { ProductDetailsComponent } from './admin/products/product-details/product-details.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';


@Component({
  selector: 'app-root',
  standalone: true,


  imports: [RouterOutlet,RouterLink,SharedComponent, OrderDetailsComponent,HttpClientModule, ProductDetailsComponent,AdminHeaderComponent,FormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'E_commereceApp';
  
}
