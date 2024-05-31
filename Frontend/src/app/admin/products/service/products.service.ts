import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseURL = "http://localhost:8000/api/products/";
  getAll(){
    return this.http.get<Products[]>(this.baseURL);
  }
  getById(id:number){
    return this.http.get<Products>(this.baseURL+id);
  }
  add(product: FormData) {
    return this.http.post<Products>(this.baseURL, product);
  }
  update(id: number, product: FormData) {
    return this.http.post<Products>(`${this.baseURL}${id}?_method=PUT`, product);
  }
  delete(id: number) {
    return this.http.delete(this.baseURL + id);
  }
  searchByTitle(title: string) {
    return this.http.get<Products[]>(`${this.baseURL}search/${title}`);
  }
  constructor(private http:HttpClient) { }
}


