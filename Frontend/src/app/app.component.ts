import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,SharedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E_commereceApp';
}