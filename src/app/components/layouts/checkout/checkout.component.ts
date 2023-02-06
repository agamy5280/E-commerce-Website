import { Component, OnInit, DoCheck } from '@angular/core';
import { LocalstorageserviceService } from 'src/app/services/localstorage/localstorageservice.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, DoCheck {
  myUserLocalStorage = JSON.parse(localStorage.getItem('userData') || '{}');
  products: string [] = [];
  userInformation:object = []
  userAddress: object = []
  constructor(private userData: UserDataService, protected localStorageService: LocalstorageserviceService){}
  // Getting Auth user data from API
  async ngOnInit() {
    (await this.userData.getUserData(this.myUserLocalStorage.id)).subscribe((data:object) => {
      this.userInformation = data
      this.userAddress = data['address']
    })
  }
  // Getting Product Data from LocalStorage
  ngDoCheck(){
    this.products = this.localStorageService.getProductsFromLocalStorage()
  }
}
