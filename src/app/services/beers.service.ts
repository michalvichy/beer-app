import { Injectable, Inject } from '@angular/core';
import { API_URL_TOKEN } from '../config';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer.interface';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(@Inject(API_URL_TOKEN) private apiUrl: string, private http: HttpClient) {}

  private sortByName(beerA: Beer, beerB: Beer) {
    if (beerA.name > beerB.name) {
      return 1;
    }

    if (beerA.name < beerB.name) {
      return -1;
    }

    return 0;
  }

  public getBeers(brewer: string) {
    return this.http
      .get<Beer[]>(`${this.apiUrl}/beers`, {
        params: {
          brewer
        }
      })
      .pipe(
        map(beers => beers.sort(this.sortByName)),
        catchError(err => throwError(err))
      );
  }
}
