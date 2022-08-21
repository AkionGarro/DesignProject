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
import { ProductByRamdomComponent } from './view/dashboard/product-by-ramdom/product-by-ramdom.component';
import { ProductByCategoryComponent } from './view/dashboard/product-by-category/product-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProductByAlcoholicComponent,
    ProductByGlassComponent,
    ProductByRamdomComponent,
    ProductByCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
