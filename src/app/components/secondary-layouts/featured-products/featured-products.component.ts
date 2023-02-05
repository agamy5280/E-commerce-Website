import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts = [];
  constructor(private prodService:ProductserviceService, private route: ActivatedRoute, private _router: Router, private localStorageService: LocalstorageserviceService){}
  // Getting Featured Products From API on Load.
  async ngOnInit(): Promise<void> {
    (await this.prodService.getFeaturedProducts()).subscribe((data:any)=>{
      this.featuredProducts = data.products;
    })
  }
  // Redirecting to Product Detail page onClick.
  redirectToProductPage(id:number){
    this._router.navigate(['shop-detail'], {
      queryParams: {
        product: id,
      },
    });
  }
  addProductToCart(product:object) {
    this.localStorageService.addProductToLocalStorage(product, 1)
  }
}
