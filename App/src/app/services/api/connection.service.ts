import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cocktailI } from 'src/app/models/cocktail.interface';
import { categoryCocktail } from 'src/app/models/categoryCocktail';


@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  url: string = 'https://www.thecocktaildb.com/api/json/v1/1/';
  userName: string = 'Usuario';
  constructor(private http: HttpClient) { }

  getCocktailByName(name: string): Observable<any[]> {
    let dir = this.url + 'search.php?s=' + name;
    return this.http.get<any[]>(dir);
  }

  getCocktailById(name: string): Observable<any[]> {
    let dir = this.url + 'lookup.php?i=' + name;
    return this.http.get<any[]>(dir);
  }

  getRamdomCocktail(): Observable<any[]> {
    let dir = this.url + 'random.php';
    return this.http.get<any[]>(dir);
  }

  getNonOrAlcoholicCocktail(type: String): Observable<any[]> {
    let dir = this.url + 'filter.php?a=' + type;
    console.log("dir: ", dir);
    return this.http.get<any[]>(dir);
  }

  getCocktailByCategory(category: string): Observable<any[]> {
    let dir = this.url + 'filter.php?c=' + category;
    return this.http.get<any[]>(dir);
  }

  getCocktailByGlass(glass: string): Observable<any[]> {
    let dir = this.url + 'filter.php?g=' + glass;
    return this.http.get<any[]>(dir);
  }

  getCategories(): Observable<any[]> {
    let dir = this.url + 'list.php?c=list';
    return this.http.get<any[]>(dir);
  }

  getGlasses(): Observable<any[]> {
    let dir = this.url + 'list.php?g=list';
    return this.http.get<any[]>(dir);
  }

  getAlcoholicFilters(): Observable<any[]> {
    let dir = this.url + 'list.php?a=list';
    return this.http.get<any[]>(dir);
  }
}
