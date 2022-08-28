import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/api/connection.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-by-alcoholic',
  templateUrl: './product-by-alcoholic.component.html',
  styleUrls: ['./product-by-alcoholic.component.css'],
})
export class ProductByAlcoholicComponent implements OnInit {
  
  products = Array<any>();
  
  categories = Array<any>();
  selectedValue: any;
  changeCategoryProducts(e) {
    this.selectedValue = e.target.value;
  }

  constructor(private api: ConnectionService, private router: Router) {}

  ngOnInit(): void {
    this.api.getAlcoholicFilters().subscribe((data) => {
      this.categories = data['drinks'];
      console.log(this.categories);
      console.log(this.products);
    });

    this.api.getNonOrAlcoholicCocktail('Alcoholic').subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  newProduct() {
    this.api.getNonOrAlcoholicCocktail(this.selectedValue).subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  verCocktel(id) {
    let link = '/view-cocktail/' + id;
    this.router.navigate([link]);
  }
}
