import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }
  async getUserData(id:number) {
    return this.http.get(`${environment.apiUrl}users/` + id)
  }
}
