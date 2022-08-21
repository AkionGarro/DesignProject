import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByAlcoholicComponent } from './product-by-alcoholic.component';

describe('ProductByAlcoholicComponent', () => {
  let component: ProductByAlcoholicComponent;
  let fixture: ComponentFixture<ProductByAlcoholicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByAlcoholicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
