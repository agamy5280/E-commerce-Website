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
  isChecked: boolean = true;
  constructor(private catService:CategoryserviceService, private _router: Router, private route: ActivatedRoute,){
  }
  ngOnInit(): void {
    // Generating categories on load
      this.catService.getCategoryies().subscribe((data:any) => {
        this.categories = data;
      })
  }
  changeSelectionCategories(event, index){
    // If checkboxes are not seleceted
    this.selectedCategoriesIndex = event.target.checked ? index : undefined;
    if(event.target.checked == false){
      this.isChecked = true;
      this.selectedCategory = '';
      this._router.navigate([], {
        relativeTo: this.route,
      });
    }else{
      // If checkboxes are seleceted
      this.selectedCategory = event.target.value;
      this.isChecked = false;
     this._router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategory,
      },
    });
    }
  }
}
