import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Products | null = null;

  constructor(
    public activatedRoute: ActivatedRoute, 
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.productsService.getById(productId).subscribe(product => {
          this.product = product;
        });
      }
    });
  }
}
