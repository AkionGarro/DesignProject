import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ProductByAlcoholicComponent } from './view/dashboard/product-by-alcoholic/product-by-alcoholic.component';
import { ProductByGlassComponent } from './view/dashboard/product-by-glass/product-by-glass.component';
import { ProductByRamdomComponent } from './view/dashboard/product-by-ramdom/product-by-ramdom.component';
import { ProductByCategoryComponent } from './view/dashboard/product-by-category/product-by-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-by-alcoholic', component: ProductByAlcoholicComponent },
  { path: 'product-by-glass', component: ProductByGlassComponent },
  { path: 'product-by-ramdom', component: ProductByRamdomComponent },
  { path: 'product-by-category', component: ProductByCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent];
