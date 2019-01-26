import { Injectable, Inject } from '@angular/core';
import { API_URL_TOKEN } from '../config';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(@Inject(API_URL_TOKEN) private apiUrl: string, private http: HttpClient) {}

  public getBeers(brewer: string) {
    return this.http.get<Beer[]>(`${this.apiUrl}beers`, {
      params: {
        brewer
      }
    });
  }
}
