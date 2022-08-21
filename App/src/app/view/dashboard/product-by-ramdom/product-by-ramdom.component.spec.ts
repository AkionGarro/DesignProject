import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByRamdomComponent } from './product-by-ramdom.component';

describe('ProductByRamdomComponent', () => {
  let component: ProductByRamdomComponent;
  let fixture: ComponentFixture<ProductByRamdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByRamdomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByRamdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
