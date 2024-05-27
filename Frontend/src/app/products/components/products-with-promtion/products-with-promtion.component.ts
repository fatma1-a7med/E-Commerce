
import { Component, OnInit } from '@angular/core';
import { ProductsWithPromtionService } from '../../services/products-with-promtion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-with-promtion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-with-promtion.component.html',
  styleUrl: './products-with-promtion.component.css'
})
export class ProductsWithPromtionComponent {
  products: any[] = []
  constructor( private ProductsWithPromtionService: ProductsWithPromtionService){}
  ngOnInit():void{
      this.getProducts()
  }
  getProducts(): void {
    this.ProductsWithPromtionService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(this.products); 
      },
      error: (err) => {
        console.error('Error fetching products:', err); 
      }
    });

   
  }
  getImageUrl(imageName: string): string {
    return `http://localhost:8000/images/${imageName}`;
  }
  }


