import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }



  private iss = {
    login: 'http://localhost:8000/api/login',
    register: 'http://localhost:8000/api/register'
  };

  
  handle(token:any) {
    this.set(token);
   // console.log(this.isValid())
  }

  set(token:any) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }
getUserIdFromToken(): number | null {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload.id : null;
    }
    return null;
  }
  payload(token:any) {
    const payload= token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload:any) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
