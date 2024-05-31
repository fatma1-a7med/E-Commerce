import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit {

  products: any[] = [];
  error: string = '';
  constructor( private productsService: ProductsService,  private router: Router){}
  ngOnInit():void{
      this.getProducts()
  }
  getProducts(): void {
    this.productsService.getAllProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        if (error.status === 401) {
          //Redirect to login page or display authentication message
          this.error = 'Authentication required. Please login.';
         
        } else {
          // Handle other errors
          this.error = 'Error fetching products: ' + error.message;
        }
      }
    );

   
    }
    getImageUrl(imageName: string): string {
      return `http://localhost:8000/images/products/${imageName}`;
    }

   
  }

  

