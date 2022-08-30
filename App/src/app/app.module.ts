import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './view/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductByAlcoholicComponent } from './view/dashboard/product-by-alcoholic/product-by-alcoholic.component';
import { ProductByGlassComponent } from './view/dashboard/product-by-glass/product-by-glass.component';
import { ProductByCategoryComponent } from './view/dashboard/product-by-category/product-by-category.component';
import { OAuthModule } from 'angular-oauth2-oidc';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ViewCocktailComponent } from './view/dashboard/view-cocktail/view-cocktail.component';
import { ProductByNameComponent } from './view/dashboard/product-by-name/product-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProductByAlcoholicComponent,
    ProductByGlassComponent,
    ProductByCategoryComponent,
    ViewCocktailComponent,
    ProductByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    FormsModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
