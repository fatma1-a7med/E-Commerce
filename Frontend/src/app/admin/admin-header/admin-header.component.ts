import { Component } from '@angular/core';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [OrderDetailsComponent,ProductDetailsComponent,RouterLink,RouterOutlet],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

}
