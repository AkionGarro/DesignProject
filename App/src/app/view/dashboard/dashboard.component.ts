import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { cocktailI } from 'src/app/models/cocktail.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: ConnectionService, private router: Router) {}

  ngOnInit(): void {
    var products: cocktailI[];
    this.api.getRamdomCocktail().subscribe((data) => {
      products = data;
      console.log(products);
    });

    this.api.getCocktailByName('margarita').subscribe((data) => {
      products = data;
      console.log(products);
    });

    this.api.getNonOrAlcoholicCocktail('Optional alcohol').subscribe((data) => {
      products = data;
      console.log(products);
    });

    this.api.getCocktailByCategory('Cocktail').subscribe((data) => {
      products = data;
      console.log(products);
    });

    this.api.getCocktailByGlass('Collins glass').subscribe((data) => {
      products = data;
      console.log(products);
    });
  }
}
