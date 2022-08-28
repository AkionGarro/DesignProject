import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/api/connection.service';

@Component({
  selector: 'app-product-by-glass',
  templateUrl: './product-by-glass.component.html',
  styleUrls: ['./product-by-glass.component.css'],
})
export class ProductByGlassComponent implements OnInit {
  products = Array<any>();
  categories = Array<any>();
  selectedValue: any;
  changeCategoryProducts(e) {
    this.selectedValue = e.target.value;
  }

  constructor(private api: ConnectionService, private router: Router) {}

  ngOnInit(): void {
    this.api.getGlasses().subscribe((data) => {
      this.categories = data['drinks'];
    });

    this.api.getCocktailByGlass('Cocktail_glass').subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  newProduct() {
    this.api.getCocktailByGlass(this.selectedValue).subscribe((data) => {
      this.products = data['drinks'];
    });
  }
  verCocktel(id) {
    let link = '/view-cocktail/' + id;
    this.router.navigate([link]);
  }
}
