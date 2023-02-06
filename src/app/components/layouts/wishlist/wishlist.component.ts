import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';
import { WishlistService } from 'src/app/services/localstorage/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements DoCheck{
  products: string [] = [];
  constructor(protected wishListService: WishlistService, private _router: Router, private localStorageService: LocalstorageserviceService ){}
  ngDoCheck(){
    this.products = this.wishListService.getProductsFromLocalStorage()
  }

  addProductToCart(product:string) {
    this.localStorageService.addProductToLocalStorage(Object(product), 1)
    this._router.navigate(['/cart']);
  }
}
