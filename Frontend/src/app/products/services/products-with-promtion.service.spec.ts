import { TestBed } from '@angular/core/testing';

import { ProductsWithPromtionService } from './products-with-promtion.service';

describe('ProductsWithPromtionService', () => {
  let service: ProductsWithPromtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsWithPromtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
