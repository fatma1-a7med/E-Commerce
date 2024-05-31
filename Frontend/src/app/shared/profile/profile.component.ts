import { Component, OnInit } from '@angular/core';
import { ProfileService, User, Order } from '../../_services/profile.service'; // Adjust import paths accordingly
import { TokenService } from '../../_services/token.service'; // Import TokenService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditMode = false;
  isOrderMode = false;
  profile: User = {
    username: '',
    email: '',
    gender: '',
    image:''
  };
  orders: Order[] = [];
  userId: number = 1; 

  constructor(private profileService: ProfileService, private tokenService: TokenService) {} // Inject TokenService

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
    const token = this.tokenService.get(); // Get token
    if (token) {
      this.profileService.getUserProfile(token).subscribe(data => { // Pass token to service
        this.profile = data;
      });
    } else {
      console.error('No token found');
    }
  }

  saveProfile() {
    const token = this.tokenService.get(); // Get token
    if (token) {
      this.profileService.updateProfile(this.profile, token).subscribe(response => { // Pass token to service
        console.log('Profile updated successfully', response);
        this.isEditMode = false; 
      }, error => {
        console.error('Error updating profile', error);
      });
    } else {
      console.error('No token found');
    }
  }

  loadOrders() {
    const token = this.tokenService.get(); // Get token
    if (token) {
      this.profileService.getOrders(this.userId, token).subscribe(data => { // Pass token to service
        this.orders = data;
      });
    } else {
      console.error('No token found');
    }
  }

  cancelOrder(orderId: number) {
    const token = this.tokenService.get(); // Get token
    if (token) {
      const confirmed = confirm('Are you sure you want to cancel this order?');
      if (confirmed) {
        this.profileService.cancelOrder(orderId, token).subscribe(response => { // Pass token to service
          console.log('Order cancelled successfully', response);
          this.loadOrders();
        }, error => {
          console.error('Error cancelling order', error);
        });
      }
    } else {
      console.error('No token found');
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
