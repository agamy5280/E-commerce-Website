import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-product-stars',
  templateUrl: './product-stars.component.html',
  styleUrls: ['./product-stars.component.scss']
})
export class ProductStarsComponent implements OnInit {
  // Receiving product ID from Parent.
  @Input() id: number = 0 ;
  productRating: number = 0 ;
  productRatingFloor: number = 0 ;
  productRatingRemaning: number = 0 ;
  productRatingEmptyStart: number = 0;
  constructor(private prodService: ProductserviceService){}
  // Getting Number of Stars for the chosen ID.
  async ngOnInit(): Promise<void> {
    (await this.prodService.getProductByID(this.id)).subscribe((data:any)=>{
    this.productRating = data.rating;
    this.productRatingFloor = Math.floor(this.productRating);
    this.productRatingRemaning = 5 -  Math.floor(this.productRating);
    this.productRatingEmptyStart = 5 - Math.ceil(this.productRating);  })
  }
}
