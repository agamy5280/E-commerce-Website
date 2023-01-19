import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=100`)
  }
  getFeaturedProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=8`)
  }
  getRecentProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=8&skip=8`)
  }
  getProductByID(id:number){
    return this.http.get(`${environment.apiUrl}products/`+ id)
  }
  getProductByCategory(category:string){
    return this.http.get(`${environment.apiUrl}products/category/`+ category)
  }
}
