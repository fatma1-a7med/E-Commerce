import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartsService } from '../../../carts/services/carts.service';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Router } from '@angular/router'
=======
import { FormsModule } from '@angular/forms'; // Import FormsModule

>>>>>>> 44a40970cc9b9a097624c8ee9a2eceb127165521
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  products: any[] = [];
<<<<<<< HEAD
  error: string = '';
  constructor( private productsService: ProductsService,  private router: Router){}
  ngOnInit():void{
      this.getProducts()
=======
  searchQuery: string = '';

  constructor(
    private productsService: ProductsService,
    private cartsService: CartsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
>>>>>>> 44a40970cc9b9a097624c8ee9a2eceb127165521
  }

  getProducts(): void {
<<<<<<< HEAD
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

  

=======
    this.productsService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  searchProducts(): void {
    if (this.searchQuery.trim()) {
      this.productsService.searchProducts(this.searchQuery).subscribe({
        next: (data: any[]) => {
          const foundProduct = data.find(product => product.title.toLowerCase() === this.searchQuery.toLowerCase());
          if (foundProduct) {
            this.products = [foundProduct]; // Show only the found product
          } else {
            this.products = []; // If product not found, show an empty array
          }
        },
        error: (err) => {
          console.error('Error searching products:', err);
        }
      });
    } else {
      // If the search query is empty, reset the products array to fetch all products
      this.getProducts();
    }
  }
  
  

  addToCart(product: any): void {
    this.cartsService.addToCart(product);
  }

  getImageUrl(imageName: string): string {
    return `http://localhost:8000/images/products/${imageName}`;
  }
}
>>>>>>> 44a40970cc9b9a097624c8ee9a2eceb127165521
