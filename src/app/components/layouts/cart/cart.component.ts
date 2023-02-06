import { Component, DoCheck } from '@angular/core';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements DoCheck{
  products: string [] = [];
  constructor(protected localStorageService: LocalstorageserviceService){
  }
  // getting Data of products from LocalStorage.
  ngDoCheck(){
    this.products = this.localStorageService.getProductsFromLocalStorage()
  }
}
