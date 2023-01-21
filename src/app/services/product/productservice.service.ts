import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }
  async getProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=100`)
  }
  async getFeaturedProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=8`)
  }
  async getRecentProducts() {
    return this.http.get(`${environment.apiUrl}products?limit=8&skip=8`)
  }
  async getProductByID(id:number){
    return this.http.get(`${environment.apiUrl}products/`+ id)
  }
  async getProductByCategory(category:string){
    return this.http.get(`${environment.apiUrl}products/category/`+ category)
  }
  async getProductBySearch(searchedKeywoard:string){
    return this.http.get(`${environment.apiUrl}products/search?q=`+ searchedKeywoard)
  }
  async getUserReviews() {
    return this.http.get(`${environment.apiUrl}users?limit=5`)
  }
}
