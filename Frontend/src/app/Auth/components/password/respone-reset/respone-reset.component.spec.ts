import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponeResetComponent } from './respone-reset.component';

describe('ResponeResetComponent', () => {
  let component: ResponeResetComponent;
  let fixture: ComponentFixture<ResponeResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponeResetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponeResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
