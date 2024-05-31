import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  details: string;
  quantity: number;
  // Add other properties of Product as needed
}

export interface OrderItem {
  id: number; // Assuming each item has an ID
  product_id: number; // Assuming each item has a product ID
  quantity: number;
   price: number;
  product: Product;
  // Add other properties of OrderItem as needed
}

export interface Order {
  id: number;
  State: string;
  Date:string;
  Total_price: number;
  items: OrderItem[];
  // Add other properties of Order as needed
}
export interface User {
  username: string;
  email: string;
  gender: string;
  image:string;

  // Add other properties of User as needed
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 
   
  constructor(private http: HttpClient) { }
    
  getUserProfile(token: string): Observable<User> {
    const headers = { Authorization: `Bearer ${token}` }; // Set authorization header
    return this.http.get<User>(`${this.apiUrl}/profile`, { headers });
  }

  updateProfile(data: any, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` }; // Set authorization header
    return this.http.put(`${this.apiUrl}/profile`, data, { headers });
  }
 
  /* getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/orders`);
  } */
  getOrders(userId: number, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` }; // Set authorization header
    return this.http.get(`${this.apiUrl}/profile/orders/${userId}`, { headers });
  }
  cancelOrder(orderId: number, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` }; // Set authorization header
    return this.http.delete(`${this.apiUrl}/profile/orders/${orderId}`, { headers });
  }
}
