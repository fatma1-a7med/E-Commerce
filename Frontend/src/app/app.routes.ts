import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ProfileComponent } from './shared/profile/profile.component';

import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';

import {LogoutComponent} from './Auth/components/logout/logout.component';
import {RequestResetComponent} from './Auth/components/password/request-reset/request-reset.component';
import{ResponeResetComponent} from  './Auth/components/password/respone-reset/respone-reset.component'


import { ProductsListComponent } from './admin/products/products-list/products-list.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { ProductDetailsComponent } from './admin/products/product-details/product-details.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { authGuard } from './auth.guard';

//import { authGuard } from './auth.guard';
export const routes: Routes = [
  
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path: 'logout', component: LogoutComponent, },
  {path: 'resetpassword', component: RequestResetComponent},
  {path: 'responsepassword', component: ResponeResetComponent, },
  { path: '', component: HomeComponent },

  { path: 'products', component: AllproductsComponent , canActivate: [authGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent,   canActivate: [authGuard]},

  
 

  { path: 'cart', component: CartsComponent, canActivate: [authGuard] }, 

  
  { path: 'profile', component: ProfileComponent , canActivate: [authGuard]},
  { path: 'admin/orders', component: OrderDetailsComponent  ,canActivate: [authGuard] },
  { path: 'admin/products', component: ProductsListComponent, canActivate: [authGuard] },
  { path: 'admin/products/add', component: AddProductComponent , canActivate: [authGuard]},
  { path: 'admin/products/details/:id', component: ProductDetailsComponent, canActivate: [authGuard] },
  { path: 'admin/products/edit/:id', component: EditProductComponent , canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
