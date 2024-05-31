import { Component, OnDestroy, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../service/products.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Products[] = [];
  sub: Subscription | null = null;
  searchTerm: string = '';
  noProductsFound: boolean = false;

  constructor(public productsService: ProductsService) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.sub = this.productsService.getAll().subscribe(data => {
      this.products = data;
      this.noProductsFound = this.products.length === 0;
    });
  }

  search() {
    if (this.searchTerm.trim()) {
      this.sub = this.productsService.searchByTitle(this.searchTerm).subscribe(data => {
        this.products = data;
        this.noProductsFound = this.products.length === 0;
      });
    } else {
      this.loadAllProducts();
    }
  }

  deleteProduct(id: number) {
    this.productsService.delete(id).subscribe(() => {
      this.search(); 
    });
  }

  trackById(index: number, item: Products) {
    return item.id;
  }
}
