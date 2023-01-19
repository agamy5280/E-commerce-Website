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
  constructor(private catService:CategoryserviceService, private _router: Router, private route: ActivatedRoute,){
  }
  ngOnInit(): void {
    // Generating categories on load
      this.catService.getCategoryies().subscribe((data:any) => {
        this.categories = data;
      })
      this.route.queryParams.subscribe(params => {
        if(params['search']){
          this.selectedCategoriesIndex = -1;
          this.isCheckedCustomSearch = true;
          this.isCheckedAllCategories = false;
        }
      })
  }
  changeSelectionCategories(event, index){
    // If checkboxes are not seleceted
    this.selectedCategoriesIndex = event.target.checked ? index : undefined;
    if(event.target.checked == false){
      this.isCheckedAllCategories = true;
      this.selectedCategory = '';
      this._router.navigate([], {
        relativeTo: this.route,
      });
    }else{
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
}
