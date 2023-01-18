import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private http: HttpClient) { }

  getCategoryies() {
    return this.http.get(`${environment.apiUrl}products/categories`)
  }
}
