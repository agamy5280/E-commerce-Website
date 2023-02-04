import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from 'src/app/services/category/categoryservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories = [];
  constructor(private catService: CategoryserviceService){
  }
  // Getting Categories on Load.
  ngOnInit(): void {
    this.catService.getCategories().subscribe((data:any)=>{
      this.categories = data;
    })
  }
}
