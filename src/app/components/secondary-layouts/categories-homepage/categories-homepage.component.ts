import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';

@Component({
  selector: 'app-categories-homepage',
  templateUrl: './categories-homepage.component.html',
  styleUrls: ['./categories-homepage.component.scss']
})
export class CategoriesHomepageComponent implements OnInit {
  categories = [];
  constructor(private catService: CategoryserviceService, private _router: Router){}
  ngOnInit(): void {
    this.catService.getCategoryies().subscribe((data:any)=>{
      this.categories = data;
    })
  }
  goToCategoriesProducts(category){
    this._router.navigate(['shop'], {
      queryParams: {
        category: category,
      },
    });
  }
}
