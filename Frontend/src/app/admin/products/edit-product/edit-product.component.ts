import { Component } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product: Products = new Products(0, '', null, 0, '');
  selectedFile: File | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productsService.getById(id).subscribe((data: Products) => {
      this.product = data;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  save() {
    const formData = new FormData();
    formData.append('title', this.product.title);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    formData.append('price', this.product.price.toString());
    formData.append('details', this.product.details);

    this.productsService.update(this.product.id, formData).subscribe(a => {
      console.log(a);
      this.router.navigate(['/admin/products']);
    });
  }

}
