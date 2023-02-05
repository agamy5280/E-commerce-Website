import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';
import { LoginserviceService } from 'src/app/services/user/loginservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories = [];
  myLocalStorage = JSON.parse(localStorage.getItem('userData')) || '';
  constructor(private catService: CategoryserviceService, protected loginService: LoginserviceService, private _router: Router){
  }
  // Getting Categories on Load.
  ngOnInit(): void {
    this.catService.getCategories().subscribe((data:any)=>{
      this.categories = data;
    })
  }
  // remove user data from local storage
  logout() {
    localStorage.removeItem('userData')
    this._router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
}
