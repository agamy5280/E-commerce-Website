import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  currentRoute: string = '';
  currentKey: string = '';
  currentParams: string = '';
constructor(private _router: Router, private route: ActivatedRoute){}
  // Getting Current Searched/Selected on Load.
  ngOnInit(): void {
    this.currentRoute = this._router.url.split('?')[0];
    this.currentRoute = this.currentRoute.replace('/','')
    this.route.queryParamMap.subscribe(params =>{
      this.currentKey = params.keys[0]
      this.currentParams = params['params'][this.currentKey]
    })
  }
}
