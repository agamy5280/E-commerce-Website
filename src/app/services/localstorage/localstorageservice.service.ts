import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageserviceService {

  constructor() { }
  // If cartProduct in localStorage is not init create one, else return it.
  getProductsFromLocalStorage() {
    if(!localStorage.getItem('cartProducts')){
      localStorage.setItem('cartProducts', '[]')
    }
    return JSON.parse(localStorage.getItem('cartProducts') || '[]')
  }
  addProductToLocalStorage(product:object, quantity:number) {
    let products = this.getProductsFromLocalStorage()
    let flag: boolean = false
    let productIndex: number = 0;
    // If cartProducts is empty
    if(products.length == 0){
      products.push(product)
      products.map((obj) => (obj['quantity'] = quantity))
    }else {
        for (let i = 0; i < products.length; i++){
          // Checking if id == id -> break
          if(products[i].id === product['id']){
            flag = true
            productIndex = i
            break
          }
        }
        // If product is duplicated in LocalStorage -> increase Quantity
        if(flag) {
          products[productIndex].quantity += quantity
        }
        // Else push whole product with quantity = 1
        else {
          product['quantity'] = quantity
          products.push(product)
        }
    }
    flag = false
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }
    // Return length of cartProducts.
    getQuantity(): number {
      const products = this.getProductsFromLocalStorage();
      return products?.length || 0;
    }
    // Decrease Quantity of a selected product on click
    decQuantity(id:number) {
      let products = this.getProductsFromLocalStorage()
      for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
          if(products[i].quantity > 1){
            products[i].quantity -= 1;
          }
        }
      }
      localStorage.setItem('cartProducts', JSON.stringify(products));
    }
    // Increase Quantity of a selected product on click
    incQuantity(id:number) {
      let products = this.getProductsFromLocalStorage()
      for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i].quantity += 1;
        }
      }
      localStorage.setItem('cartProducts', JSON.stringify(products));
    }
    // Remove Item on click
    removeItem(id:number) {
      let products = this.getProductsFromLocalStorage()
      for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
          products.splice(i, 1)
        }
    }
    localStorage.setItem('cartProducts', JSON.stringify(products));
  }
  // Getting subTotal of cart
  getSubTotal() {
    let products = this.getProductsFromLocalStorage()
    let subTotal: number = 0;
    products.forEach((n) => {
      subTotal = subTotal + (n.price - (n.price * (n.discountPercentage / 100))) * n.quantity
    })
    return subTotal
  }
  // Getting Total of cart
  getTotal() {
    let products = this.getProductsFromLocalStorage()
    let subTotal: number = this.getSubTotal()
    let shipping: number = products.length * 10
    let total: number = subTotal + shipping
    return total
  }
  // Getting product Quantity
  getProductQuantity(id:number) {
    let products = this.getProductsFromLocalStorage()
    let quantity:number = 0
    for (let i = 0; i < products.length; i++){
      if(products[i].id === id){
        quantity = products[i].quantity
      }
    }
    return quantity
  }

}
