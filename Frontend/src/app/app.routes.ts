import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { RegisterComponent } from './Auth/components/register/register.component';

import {LogoutComponent} from './Auth/components/logout/logout.component';
import {RequestResetComponent} from './Auth/components/password/request-reset/request-reset.component';
import{ResponeResetComponent} from  './Auth/components/password/respone-reset/respone-reset.component'
import {DashboardComponent} from './Auth/components/dashboard/dashboard.component'

import { authGuard } from './auth.guard';
export const routes: Routes = [

  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[authGuard]},
  {path: 'resetpassword', component: RequestResetComponent, canActivate:[authGuard]},
  {path: 'responsepassword', component: ResponeResetComponent, canActivate:[authGuard]},
  { path: '', component: HomeComponent },
  { path: 'products', component: AllproductsComponent ,canActivate:[authGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard] },
  {path: 'dashboard', component: DashboardComponent, canActivate:[authGuard]

  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
