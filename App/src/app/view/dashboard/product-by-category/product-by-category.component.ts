import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { cocktailI } from 'src/app/models/cocktail.interface';
import { categoryCocktail } from 'src/app/models/categoryCocktail';
@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css'],
})
export class ProductByCategoryComponent implements OnInit {
  products: cocktailI[] = [];
  categories: any;
  constructor(private api: ConnectionService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}
