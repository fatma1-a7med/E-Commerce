import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { HttpClient } from '@angular/common/http';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,SharedComponent, OrderDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E_commereceApp';
}
