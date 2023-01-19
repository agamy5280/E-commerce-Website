import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/layouts/cart/cart.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { HomepageComponent } from './components/layouts/homepage/homepage.component';
import { ProductDetailComponent } from './components/layouts/product-detail/product-detail.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { PageNotFoundComponent } from './components/secondary-layouts/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component:HomepageComponent },
  { path:'shop', component:ShopComponent },
  { path:'shop-detail', component:ProductDetailComponent, children:[{
    path:':id', component:ProductDetailComponent
  }] },
  { path:'contact', component:ContactComponent },
  { path:'checkout', component:CheckoutComponent },
  { path:'cart', component:CartComponent },
  { path:'**', pathMatch: 'full', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
