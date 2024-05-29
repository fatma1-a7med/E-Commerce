import { Component, OnInit } from '@angular/core';
import { ProfileService, User, Order } from '../../_services/profile.service'; // Adjust import paths accordingly
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode = false;
  isOrderMode = false;
  profile: User = {
    username: '',
    email: '',
    gender: ''
  };
  orders: Order[] = [];
  userId: number = 1; // Replace this with the actual user ID

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.loadProfile();
    this.loadOrders();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.isOrderMode = false;
  }

  toggleOrderMode() {
    this.isOrderMode = !this.isOrderMode;
    this.isEditMode = false;
  }

  loadProfile() {
    this.profileService.getUsers().subscribe(data => {
      this.profile = data;
    });
  }

  saveProfile() {
    this.profileService.updateProfile(this.profile).subscribe(response => {
      console.log('Profile updated successfully', response);
      this.isEditMode = false; 
    }, error => {
      console.error('Error updating profile', error);
    });
  }

  loadOrders() {
    this.profileService.getOrders(this.userId).subscribe(data => {
      this.orders = data;
    });
  }
  cancelOrder(orderId: number) {
    const confirmed = confirm('Are you sure you want to cancel this order?');
    if (confirmed) {
      this.profileService.cancelOrder(orderId).subscribe(response => {
        console.log('Order cancelled successfully', response);
        this.loadOrders();
      }, error => {
        console.error('Error cancelling order', error);
      });
    }
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8000/images/products/${imageName}`;
  }
  
  

  selectedOrder: Order | null = null;
  orderWithDetails: Order | null = null;

  toggleOrderDetails(order: Order) {
      if (this.selectedOrder === order) {
          this.selectedOrder = null;
          this.orderWithDetails = null;
      } else {
          this.selectedOrder = order;
          this.orderWithDetails = order;
      }
  }
}
