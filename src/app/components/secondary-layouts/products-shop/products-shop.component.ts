import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/product/productservice.service';
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
  constructor(private prodService: ProductserviceService, private _router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['search']){
        this.searchedProduct = params['search'];
        this.prodService.getProductBySearch(this.searchedProduct).subscribe((data:any)=>{
          this.products = data.products;
          this.productsQuantity = data.total;
          this.page = 0;
        })
      }else if(params['category']){
        this.categoryName = params['category'];
        this.prodService.getProductByCategory(this.categoryName).subscribe((data:any) => {
          this.products = data.products;
          this.productsQuantity = data.total;
          this.page = 0;
        })
      }else {
        this.prodService.getProducts().subscribe((data:any)=>{
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
}
