// src/app/carts/services/carts.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private cartItems: any[] = [];

  addToCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}

