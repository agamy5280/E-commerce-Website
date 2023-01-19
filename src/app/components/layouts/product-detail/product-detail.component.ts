import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/product/productservice.service';
declare var $: any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements AfterViewInit, OnInit {
  productID: number;
  productData = [];
  productCategory: string;
  constructor(private route: ActivatedRoute, private _router: Router, private prodService:ProductserviceService){
    // checking if path shop-detail is active
    if(_router.url == '/shop-detail'){
      this._router.navigate(['shop']);
    }
    //getting product ID from current queryParms
    route.queryParams.subscribe(params => {
      this.productID = params['product'];
    })
  }
  ngAfterViewInit(): void {
    // Related carousel
    setTimeout(()=>{
      $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      });
    },1000)
  }
  ngOnInit() {
    //getting product data
    this.prodService.getProductByID(this.productID).subscribe((data:any) => {
      this.productData = data;
      this.productCategory = data.category;
    })
  }
}
