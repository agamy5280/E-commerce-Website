import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';
import { ProductserviceService } from 'src/app/services/product/productservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories = [];
  selectedCategory: string;
  selectedCategoriesIndex: number;
  isCheckedAllCategories: boolean = true;
  isCheckedCustomSearch: boolean = false;
  prices: {
    minPrice: number;maxPrice: number;
  } [] = [{
      minPrice: 0,
      maxPrice: 50
    },
    {
      minPrice: 50,
      maxPrice: 100
    },
    {
      minPrice: 100,
      maxPrice: 500
    },
    {
      minPrice: 500,
      maxPrice: 1000
    },
    {
      minPrice: 1000,
      maxPrice: 2000
    }
  ]
  selectedPriceIndex: number;
  minPrice: number;
  maxPrice: number;
  isCheckedAllPrices: boolean = true;
  quantity: number = 0 ;
  constructor(private catService: CategoryserviceService, private _router: Router, private route: ActivatedRoute, ) {}
  ngOnInit(): void {
    // Generating categories on load
    this.catService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
    this.route.queryParams.subscribe(params => {
      // Handling Checkboxes on Shop page.
      if (params['search']) {
        this.isCheckedCustomSearch = true;
        this.selectedCategoriesIndex = -1;
        this.isCheckedAllCategories = false;
      } else if (params['category']) {
        this.isCheckedCustomSearch = false;
        this.isCheckedAllCategories = false;
      } else if(params['sortBy']){
        this.isCheckedAllCategories = false;
        this.selectedCategoriesIndex = -1;
        this.isCheckedCustomSearch = true;
      }
      else {
        this.isCheckedCustomSearch = false;
        this.isCheckedAllCategories = true;
      }
    })
  }
  changeSelectionCategories(event, index) {
    // If checkboxes are not seleceted
    this.selectedCategoriesIndex = event.target.checked ? index : undefined;
    if (event.target.checked == false) {
      this.isCheckedAllCategories = true;
      this.selectedCategory = '';
      this._router.navigate([], {
        relativeTo: this.route,
      });
    } else {
      // If checkboxes are seleceted
      this.selectedCategory = event.target.value;
      this.isCheckedAllCategories = false;
      this._router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          category: this.selectedCategory,
        },
      });
    }
  }
  // Navigating to selected price range of products and handling checkboxes.
  changeSelectionPrices(event, index, minPrice, maxPrice) {
    this.selectedPriceIndex = event.target.checked ? index : undefined;
    if (event.target.checked == false) {
      this.isCheckedCustomSearch = false;
      this.isCheckedAllPrices = true;
      this._router.navigate([], {
        relativeTo: this.route,
      });
    } else {
      this.minPrice = minPrice;
      this.maxPrice = maxPrice;
      this.isCheckedAllPrices = false;
      this.isCheckedCustomSearch = true;
      this._router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          filterPrice: '',
          minPrice: minPrice,
          maxPrice: maxPrice,
        }
      })
    }
  }
}
