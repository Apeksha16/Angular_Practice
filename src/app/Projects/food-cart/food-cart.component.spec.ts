import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCartComponent } from './food-cart.component';

describe('FoodCartComponent', () => {
  let component: FoodCartComponent;
  let fixture: ComponentFixture<FoodCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodCartComponent]
    });
    fixture = TestBed.createComponent(FoodCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
