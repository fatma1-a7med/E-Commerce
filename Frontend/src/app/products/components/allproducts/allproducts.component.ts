import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit {

  products: any[] = []
  constructor( private productsService: ProductsService){}
  ngOnInit():void{
      this.getProducts()
  }
  getProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(data); 
      },
      error: (err) => {
        console.error('Error fetching products:', err); 
      }
    });
  }
  }


