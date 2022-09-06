import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/api/connection.service';

@Component({
  selector: 'app-product-by-name',
  templateUrl: './product-by-name.component.html',
  styleUrls: ['./product-by-name.component.css']
})
export class ProductByNameComponent implements OnInit {

  products = Array<any>();
  categories = Array<any>();
  selectedValue: any;
  changeCategoryProducts(e) {
    this.selectedValue = e.target.value;
  }

  constructor(public api: ConnectionService, private router: Router) {}

  ngOnInit(): void {
    this.api.getGlasses().subscribe((data) => {
      this.categories = data['drinks'];
    });

    this.api.getCocktailByGlass('Cocktail_glass').subscribe((data) => {
      this.products = data['drinks'];
    });
  }

  newProduct(name: any) {
    this.api.getCocktailByName(name).subscribe((data) => {
      this.products = data['drinks'];
      
    });

    
  }
  verCocktel(id) {
    let link = '/view-cocktail/' + id;
    this.router.navigate([link]);
  }
}
