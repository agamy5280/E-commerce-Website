import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';
import { WishlistService } from 'src/app/services/localstorage/wishlist.service';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss']
})
export class RecentProductsComponent implements OnInit {
  recentProducts = [];
  myLocalStorageUserData = JSON.parse(localStorage.getItem('userData')) || '';
  constructor(private prodService:ProductserviceService,
    private _router: Router,
    private localStorageService: LocalstorageserviceService,
    private wishListService: WishlistService){}
  // Getting Recent Product From API on Load.
  async ngOnInit(): Promise<void> {
    (await this.prodService.getRecentProducts()).subscribe((data:any)=>{
      this.recentProducts = data.products;
    })
  }
  // Redirecting to Product Page onClick.
  redirectToProductPage(id:number){
    this._router.navigate(['shop-detail'], {
      queryParams: {
        product: id,
      },
    });
  }
  addProductToCart(product:object) {
    if(this.myLocalStorageUserData){
      this.localStorageService.addProductToLocalStorage(product, 1)
    }else {
      this._router.navigate(['/login'])
    }
  }
  addProductToWishList(product:object) {
    if(this.myLocalStorageUserData){
    this.wishListService.addProductToLocalStorage(product)
    }else {
      this._router.navigate(['/login'])
    }
  }
}
