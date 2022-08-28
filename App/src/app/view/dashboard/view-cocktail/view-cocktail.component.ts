import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/api/connection.service';

@Component({
  selector: 'app-view-cocktail',
  templateUrl: './view-cocktail.component.html',
  styleUrls: ['./view-cocktail.component.css']
})
export class ViewCocktailComponent implements OnInit {

  id: any;
  product = Array<any>();
  constructor(private route: ActivatedRoute, private api: ConnectionService, private router: Router) { }
    

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('var');
      this.api.getCocktailById(this.id).subscribe((data) => {
        this.product = data['drinks'][0];
        console.log(this.product);
      });
    });
  }

}
