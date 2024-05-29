import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component'
import { AdminHeaderComponent } from '../admin/admin-header/admin-header.component';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [HeaderComponent,AdminHeaderComponent],
 
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {

}
