import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { cocktailI } from 'src/app/models/cocktail.interface';
import { categoryCocktail } from 'src/app/models/categoryCocktail';

import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css'],
})
export class ProductByCategoryComponent implements OnInit {
  products = Array<any>();
  categories = Array<any>();
  selectedValue: any;
  changeCategoryProducts(e) {
    this.selectedValue = e.target.value;
  }

  constructor(public api: ConnectionService, private router: Router) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((data) => {
      this.categories = data['drinks'];
    });

    this.api.getCocktailByCategory('Ordinary Drink').subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  newProduct() {
    this.api.getCocktailByCategory(this.selectedValue).subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  verCocktel(id) {
    let link = '/view-cocktail/' + id;
    this.router.navigate([link]);
  }
}
