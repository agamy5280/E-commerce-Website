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
  ngOnInit(): void {
    this.prodService.getFeaturedProducts().subscribe((data:any)=>{
      this.featuredProducts = data.products;
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
