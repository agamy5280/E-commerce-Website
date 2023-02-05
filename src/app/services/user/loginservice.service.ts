import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  constructor(private http: HttpClient) { }
  async loginRequest(loginInfo:object) {
   return this.http.post(`${environment.apiUrl}auth/login`,loginInfo)
  }
  async registerRequest(registerInfo:object) {
    return this.http.post(`${environment.apiUrl}users/add`,registerInfo)
   }
}
