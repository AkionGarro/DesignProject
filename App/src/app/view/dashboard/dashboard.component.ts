import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { cocktailI } from 'src/app/models/cocktail.interface';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: ConnectionService, private router: Router, 
    private renderer: Renderer2) {
      renderer.setStyle(
        document.body,
        "background-color",
        'darkslateblue'
      );
    }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  

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
      console.log("By Glass");
    });
  }
}
