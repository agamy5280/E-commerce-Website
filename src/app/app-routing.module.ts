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
import { LoginPageComponent } from './components/layouts/login-page/login-page.component';
import { RegisterPageComponent } from './components/layouts/register-page/register-page.component';
import { AuthGuard } from './auth/auth.guard';
import { WishlistComponent } from './components/layouts/wishlist/wishlist.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component:HomepageComponent },
  { path:'shop', component:ShopComponent },
  { path:'shop-detail', component:ProductDetailComponent, children:[{
    path:':id', component:ProductDetailComponent
  }] },
  { path:'contact', component:ContactComponent,canActivate:[AuthGuard] },
  { path:'checkout', component:CheckoutComponent,canActivate:[AuthGuard] },
  { path:'cart', component:CartComponent,canActivate:[AuthGuard] },
  { path:'wishlist', component:WishlistComponent,canActivate:[AuthGuard] },
  { path:'login', component:LoginPageComponent },
  { path:'register', component:RegisterPageComponent },
  { path:'**', pathMatch: 'full', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
