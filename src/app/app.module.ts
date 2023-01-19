import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/layouts/cart/cart.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { HomepageComponent } from './components/layouts/homepage/homepage.component';
import { ProductDetailComponent } from './components/layouts/product-detail/product-detail.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { HeaderComponent } from './components/secondary-layouts/header/header.component';
import { SearchbarComponent } from './components/secondary-layouts/searchbar/searchbar.component';
import { ProductStarsComponent } from './components/secondary-layouts/product-stars/product-stars.component';
import { FooterComponent } from './components/secondary-layouts/footer/footer.component';
import { CategoriesHomepageComponent } from './components/secondary-layouts/categories-homepage/categories-homepage.component';
import { FeaturedProductsComponent } from './components/secondary-layouts/featured-products/featured-products.component';
import { NavBarComponent } from './components/secondary-layouts/nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './components/secondary-layouts/breadcrumb/breadcrumb.component';
import { ProductsShopComponent } from './components/secondary-layouts/products-shop/products-shop.component';
import { BackToTopComponent } from './components/secondary-layouts/back-to-top/back-to-top.component';
import { HttpClientModule } from '@angular/common/http';
import { RecentProductsComponent } from './components/secondary-layouts/recent-products/recent-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { PageNotFoundComponent } from './components/secondary-layouts/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShopComponent,
    ProductDetailComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    HeaderComponent,
    SearchbarComponent,
    ProductStarsComponent,
    FooterComponent,
    CategoriesHomepageComponent,
    FeaturedProductsComponent,
    NavBarComponent,
    BreadcrumbComponent,
    ProductsShopComponent,
    BackToTopComponent,
    RecentProductsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
