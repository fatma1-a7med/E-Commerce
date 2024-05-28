import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ProfileComponent } from './shared/profile/profile.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AllproductsComponent },
  { path: 'cart', component: CartsComponent }, // Add route for Cart
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
