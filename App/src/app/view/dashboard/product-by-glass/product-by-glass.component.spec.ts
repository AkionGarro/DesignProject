import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByGlassComponent } from './product-by-glass.component';

describe('ProductByGlassComponent', () => {
  let component: ProductByGlassComponent;
  let fixture: ComponentFixture<ProductByGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByGlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
