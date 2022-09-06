import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Location } from '@angular/common';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router, private _location: Location, 
    public api: ConnectionService, private breakpointObserver: BreakpointObserver) {
      // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1200px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          api.cellSize = false;       
      } else {
          api.cellSize = true;
      }
    });
  }

  
  ngOnInit(): void {}

  goToProductByCategory() {
    this.router.navigate(['product-by-category']);
  }

  goToProductByGlass() {
    this.router.navigate(['product-by-glass']);
  }

  goOldpage() {
    this._location.back();
  }

  goToProductByAlcoholic() {
    this.router.navigate(['product-by-alcoholic']);
  }
  goToProductByName() {
    this.router.navigate(['product-by-name']);
  }
  goToDashBoard() {
    this.router.navigate(['dashboard']);
  }
}
