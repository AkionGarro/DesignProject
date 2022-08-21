import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/api/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: ConnectionService) {}

  ngOnInit(): void {
    this.api.getRamdomCocktail().subscribe((data) => {
      console.log(data);
    });

    this.api.getCocktailByName('margarita').subscribe((data) => {
      console.log(data);
    });

    this.api.getNonOrAlcoholicCocktail('Optional alcohol').subscribe((data) => {
      console.log(data);
    });

    this.api.getCocktailByCategory('Cocktail').subscribe((data) => {
      console.log(data);
    });

    this.api.getCocktailByGlass('Collins glass').subscribe((data) => {
      console.log(data);
    });
  }
}
