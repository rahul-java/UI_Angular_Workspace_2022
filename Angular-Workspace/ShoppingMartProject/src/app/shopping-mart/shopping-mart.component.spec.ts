import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMartComponent } from './shopping-mart.component';

describe('ShoppingMartComponent', () => {
  let component: ShoppingMartComponent;
  let fixture: ComponentFixture<ShoppingMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingMartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
