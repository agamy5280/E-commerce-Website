import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRecentProductsComponent } from './featured-recent-products.component';

describe('FeaturedRecentProductsComponent', () => {
  let component: FeaturedRecentProductsComponent;
  let fixture: ComponentFixture<FeaturedRecentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedRecentProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedRecentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
