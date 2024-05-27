import { Component, OnInit } from '@angular/core';
import { ProductsWithPromtionComponent } from '../products/components/products-with-promtion/products-with-promtion.component';


import { CarouselComponent } from '../shared/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,ProductsWithPromtionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
