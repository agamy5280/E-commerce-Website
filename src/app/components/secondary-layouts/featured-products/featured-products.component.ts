import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts = [];
  constructor(private prodService:ProductserviceService, private route: ActivatedRoute, private _router: Router){}
  // Getting Featured Products From API on Load.
  async ngOnInit(): Promise<void> {
    (await this.prodService.getFeaturedProducts()).subscribe((data:any)=>{
      this.featuredProducts = data.products;
    })
  }
  // Redirecting to Product Detail page onClick.
  redirectToProductPage(id){
    this._router.navigate(['shop-detail'], {
      queryParams: {
        product: id,
      },
    });
  }
}
