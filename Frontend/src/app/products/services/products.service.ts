// src/app/products/services/products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8000/api/products'; // Update with your backend API

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  searchProducts(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?search=${name}`);
  }
}
