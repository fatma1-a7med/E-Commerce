import { Component } from '@angular/core';
import { Products } from '../models/products';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Products = new Products(0, '', null, 0, '');
  selectedFile: File | null = null;

  constructor(private productsService: ProductsService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  save() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('id', this.product.id.toString());
      formData.append('title', this.product.title);
      formData.append('image', this.selectedFile);
      formData.append('price', this.product.price.toString());
      formData.append('details', this.product.details);

      this.productsService.add(formData).subscribe(a => {
        console.log(a);
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
