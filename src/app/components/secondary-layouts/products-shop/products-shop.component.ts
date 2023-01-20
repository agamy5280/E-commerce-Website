import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/product/productservice.service';
import {orderBy} from 'lodash';
@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.scss']
})
export class ProductsShopComponent implements OnInit {
  products: [] = [];
  categoryName: string = '';
  searchedProduct: string = '';
  productsQuantity: number;
  page: number;
  minPrice: number;
  maxPrice: number;
  @Output() productsQuantityPrices = new EventEmitter<number>();
  sortingOptions: string[] = [
    'Stock: Low to High',
    'Stock: High to Low',
    'Price: Low to High',
    'Price: High to Low',
    'Best Rating',
    'Clear'
  ]
  constructor(private prodService: ProductserviceService, private _router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      if(params['search']){
        this.searchedProduct = params['search'];
        (await this.prodService.getProductBySearch(this.searchedProduct)).subscribe((data:any)=>{
          this.products = data.products;
          this.productsQuantity = data.total;
          this.page = 0;
        })
      }else if(params['category']){
        this.categoryName = params['category'];
        (await this.prodService.getProductByCategory(this.categoryName)).subscribe((data:any) => {
          this.products = data.products;
          this.productsQuantity = data.total;
          this.page = 0;
        })
      }else if(params['minPrice'] && params['maxPrice'] ){
        this.products = [];
        this.minPrice = params['minPrice'];
        this.maxPrice = params['maxPrice'];
        (await this.prodService.getProducts()).subscribe((data:any) => {
          for(let index = 0; index < 100; index++ ){
            if(data.products[index].price >= this.minPrice && data.products[index].price <= this.maxPrice){
              this.products.push(data.products[index] as never);
              // this.productsQuantityPrices.emit(this.products.length);
            }
          }
          this.page = 0;
          this.productsQuantity = this.products.length;
          // this.productsQuantityPrices.emit(this.products.length);
        })
      }else if(params['sortBy']){
        if(params['sortBy'] == 'Stock: High to Low'){
          this.products = [];
          (await this.prodService.getProducts()).subscribe((data:any) => {
            this.products = data.products;
            this.products = orderBy(this.products, ['stock'], ['desc']);
            this.productsQuantity = this.products.length;
            this.page = 0;
          })
        }
        else if(params['sortBy'] == 'Stock: Low to High'){
          this.products = [];
          (await this.prodService.getProducts()).subscribe((data:any) => {
            this.products = data.products;
            this.products = orderBy(this.products, ['stock'], ['asc']);
            this.productsQuantity = this.products.length;
            this.page = 0;
          })
        }
        else if(params['sortBy'] == 'Price: Low to High'){
          this.products = [];
          (await this.prodService.getProducts()).subscribe((data:any) => {
            this.products = data.products;
            this.products = orderBy(this.products, ['price'], ['asc']);
            this.productsQuantity = this.products.length;
            this.page = 0;
          })
        }
        else if(params['sortBy'] == 'Price: High to Low'){
          this.products = [];
          (await this.prodService.getProducts()).subscribe((data:any) => {
            this.products = data.products;
            this.products = orderBy(this.products, ['price'], ['desc']);
            this.productsQuantity = this.products.length;
            this.page = 0;
          })
        }
        else if(params['sortBy'] == 'Best Rating'){
          this.products = [];
          (await this.prodService.getProducts()).subscribe((data:any) => {
            this.products = data.products;
            this.products = orderBy(this.products, ['rating'], ['desc']);
            this.productsQuantity = this.products.length;
            this.page = 0;
          })
        }else{
          this._router.navigate(['shop'])
        }
      }
      else {
         (await this.prodService.getProducts()).subscribe((data:any)=>{
          this.products = data.products;
          this.productsQuantity = data.total;
          this.page = 0;
        })
      }
    })
  }
  redirectToProductPage(id){
    this._router.navigate(['shop-detail'], {
      queryParams: {
        product: id,
      },
    });
  }
  showProductsBySorting(sortingOption){
    this._router.navigate([],{
      queryParams:{
        sortBy: sortingOption
      }
    })
  } 
}
