import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';
import { WishlistService } from 'src/app/services/localstorage/wishlist.service';
import { LoginserviceService } from 'src/app/services/user/loginservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories = [];
  myLocalStorageUserData = JSON.parse(localStorage.getItem('userData')) || '';
  constructor(private catService: CategoryserviceService,
     protected loginService: LoginserviceService,
      private _router: Router,
       protected localStorageService: LocalstorageserviceService,
       protected wishListService: WishlistService){
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
