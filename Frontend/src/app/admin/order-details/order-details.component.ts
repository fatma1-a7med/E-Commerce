import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from './orderservice.service';



@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  orders: any[] = [];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe(data => {
      console.log(data);
      
      // Check if the data is an object and convert it to an array if necessary
      if (Array.isArray(data)) {
        this.orders = data;
      } else if (typeof data === 'object') {
        this.orders = [data];
      }
    });
  }
  updateOrderState(orderId: number, newState: string) {
    this.orderService.updateOrderState(orderId, newState).subscribe(() => {
      // Optionally, handle success or error messages
      console.log(`Order ${orderId} state updated to ${newState}`);
      // Refresh the order list after updating the state
      this.loadOrders();
    });
  }
}


