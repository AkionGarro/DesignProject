import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProductByCategory() {
    this.router.navigate(['product-by-category']);
  }

  goToProductByGlass() {
    this.router.navigate(['product-by-glass']);
  }

  goToProductByRamdom() {
    this.router.navigate(['product-by-ramdom']);
  }

  goToProductByAlcoholic() {
    this.router.navigate(['product-by-alcoholic']);
  }
  goToDashBoard() {
    this.router.navigate(['dashboard']);
  }
}
