import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/product/productservice.service';
@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.scss']
})
export class ProductsShopComponent implements OnInit {
  products: [] = [];
  productsQuantity: number;
  page: number;
  constructor(private prodService: ProductserviceService){}

  ngOnInit(): void {
      this.prodService.getProducts().subscribe((data:any)=>{
        this.products = data.products ;
        this.productsQuantity = data.total;
      })
  }
}
