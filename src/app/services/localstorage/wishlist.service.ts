import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  getProductsFromLocalStorage() {
    if(!localStorage.getItem('wishlistProducts')){
      localStorage.setItem('wishlistProducts', '[]')
    }
    return JSON.parse(localStorage.getItem('wishlistProducts') || '[]')
  }

  addProductToLocalStorage(product:object) {
    let products = this.getProductsFromLocalStorage()
    let flag: boolean = false
    if(products.length == 0){
      products.push(product)
    }else {
        for (let i = 0; i < products.length; i++){
          if(products[i].id === product['id']){
            flag = true
            break
          }
        }
        if(flag) {
        }
        else {
          products.push(product)
        }
    }
    flag = false
    localStorage.setItem('wishlistProducts', JSON.stringify(products));
  }
  getPriceAfterDiscount(price:number, discount:number) {
    return price - (price * (discount/100))
  }
  getQuantity(): number {
    const products = this.getProductsFromLocalStorage();
    return products?.length || 0;
  }
}
