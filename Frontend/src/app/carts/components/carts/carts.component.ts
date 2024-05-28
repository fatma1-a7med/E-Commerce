import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../../carts/services/carts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  standalone: true,
  imports: [CommonModule], // Add FormsModule here
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private cartsService: CartsService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartsService.getCartItems();
  }

  getImageUrl(imageName: string): string {
    return `http://localhost:8000/images/${imageName}`;
  }

  showDetails(item: any): void {
    console.log('Show details of:', item);
  }

  editItem(item: any): void {
    console.log('Edit:', item);
  }

  deleteItem(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    console.log('Deleted:', item);
  }

  checkout(): void {
    console.log('Proceed to checkout with items:', this.cartItems);
  }

  incrementQuantity(item: any): void {
    item.quantity++;
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
}
