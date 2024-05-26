import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import {AllproductsComponent} from '../products/components/allproducts/allproducts.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,AllproductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
