import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cocktailI } from 'src/app/models/cocktail.interface';
@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  url: string = 'https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http: HttpClient) {}

  getCocktailByName(name: string): Observable<cocktailI[]> {
    let dir = this.url + 'search.php?s=' + name;
    return this.http.get<cocktailI[]>(dir);
  }

  getRamdomCocktail(): Observable<cocktailI[]> {
    let dir = this.url + 'random.php';
    return this.http.get<cocktailI[]>(dir);
  }

  getNonOrAlcoholicCocktail(type: String): Observable<cocktailI[]> {
    let dir = this.url + 'filter.php?a=' + type;
    return this.http.get<cocktailI[]>(dir);
  }

  getCocktailByCategory(category: string): Observable<cocktailI[]> {
    let dir = this.url + 'filter.php?c=' + category;
    return this.http.get<cocktailI[]>(dir);
  }

  getCocktailByGlass(glass: string): Observable<cocktailI[]> {
    let dir = this.url + 'filter.php?g=' + glass;
    return this.http.get<cocktailI[]>(dir);
  }
}
