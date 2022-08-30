import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByNameComponent } from './product-by-name.component';

describe('ProductByNameComponent', () => {
  let component: ProductByNameComponent;
  let fixture: ComponentFixture<ProductByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
