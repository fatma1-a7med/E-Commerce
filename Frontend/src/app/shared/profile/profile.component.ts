import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  isEditMode = false;
  isOrderMode=false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.isOrderMode = false;
  }
  toggleOrderMode(){
    this.isOrderMode= !this.isOrderMode;
    this.isEditMode = false; 
  }

  profile = {
    username: 'fatma123',
    email: 'fatma123@gmail.com',
    gender: 'Female'
  };
  orders = [
    { id: 1, status: 'Accepted' },
    { id: 2, status: 'Rejected' },
    { id: 3, status: 'Pending' }
  ];

  saveProfile() {
    // Save profile logic here
    // After saving, switch back to display mode
    this.isEditMode = false;
  }
  cancelOrder(orderId: number) {
    // Find the order by ID and change its status to 'Cancelled'
    const order = this.orders.find(o => o.id === orderId);
    if (order && order.status === 'Pending') {
      order.status = 'Cancelled';
    }
  }
}
