import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss']
})
export class RecentProductsComponent implements OnInit {
  recentProducts = [];
  constructor(private prodService:ProductserviceService){}
  ngOnInit(): void {
    this.prodService.getRecentProducts().subscribe((data:any)=>{
      this.recentProducts = data.products;
    })
  }
}
