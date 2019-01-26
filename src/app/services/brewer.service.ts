import { Injectable, Inject } from '@angular/core';
import { API_URL_TOKEN } from '../config';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer.interface';
import { map, distinct, switchMap, toArray, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewerService {
  private persistedBrewers: string[] = JSON.parse(localStorage.getItem('brewers')) || [];
  private _brewers$: BehaviorSubject<string[]> = new BehaviorSubject(this.persistedBrewers);

  public brewers$: Observable<string[]> = this._brewers$.asObservable();

  constructor(@Inject(API_URL_TOKEN) private apiUrl: string, private http: HttpClient) {
    if (this.persistedBrewers.length === 0) {
      this.getBrewers();
    }
  }

  private getBrewers() {
    return this.http
      .get<Beer[]>(`${this.apiUrl}beers`)
      .pipe(
        switchMap(beers => beers),
        distinct(beer => beer.brewer),
        toArray(),
        map(beers => beers.map(beer => beer.brewer))
      )
      .subscribe(brewers => {
        this.saveBrewers(brewers);
        this._brewers$.next(brewers);
      });
  }

  public saveBrewers(brewers: string[]) {
    localStorage.setItem('brewers', JSON.stringify(brewers));
  }
}
