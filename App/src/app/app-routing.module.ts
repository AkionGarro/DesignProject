import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductByAlcoholicComponent } from './view/dashboard/product-by-alcoholic/product-by-alcoholic.component';
import { ProductByGlassComponent } from './view/dashboard/product-by-glass/product-by-glass.component';
import { ProductByCategoryComponent } from './view/dashboard/product-by-category/product-by-category.component';
import { ViewCocktailComponent } from './view/dashboard/view-cocktail/view-cocktail.component';
import { ProductByNameComponent } from './view/dashboard/product-by-name/product-by-name.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-by-alcoholic', component: ProductByAlcoholicComponent },
  { path: 'product-by-glass', component: ProductByGlassComponent },
  { path: 'product-by-name', component:  ProductByNameComponent},
  { path: 'product-by-category', component: ProductByCategoryComponent },
  { path: 'view-cocktail/:var', component: ViewCocktailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent];
