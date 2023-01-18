import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';

@Component({
  selector: 'app-categories-homepage',
  templateUrl: './categories-homepage.component.html',
  styleUrls: ['./categories-homepage.component.scss']
})
export class CategoriesHomepageComponent implements OnInit {
  categories = [];
  constructor(private catService: CategoryserviceService){}
  ngOnInit(): void {
    this.catService.getCategoryies().subscribe((data:any)=>{
      this.categories = data;
    })
  }
}
