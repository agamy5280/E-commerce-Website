import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss']
})
export class RecentProductsComponent implements OnInit {
  recentProducts = [];
  constructor(private prodService:ProductserviceService, private _router: Router){}
  async ngOnInit(): Promise<void> {
    (await this.prodService.getRecentProducts()).subscribe((data:any)=>{
      this.recentProducts = data.products;
    })
  }
  redirectToProductPage(id){
    this._router.navigate(['shop-detail'], {
      queryParams: {
        product: id,
      },
    });
  }
}
