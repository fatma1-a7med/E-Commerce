import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithPromtionComponent } from './products-with-promtion.component';

describe('ProductsWithPromtionComponent', () => {
  let component: ProductsWithPromtionComponent;
  let fixture: ComponentFixture<ProductsWithPromtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsWithPromtionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsWithPromtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
