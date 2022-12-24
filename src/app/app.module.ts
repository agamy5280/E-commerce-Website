import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ShopComponent } from './layouts/shop/shop.component';
import { ProductDetailComponent } from './layouts/product-detail/product-detail.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { CartComponent } from './layouts/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShopComponent,
    ProductDetailComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
