import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing/';

import { BrewerService } from './brewer.service';
import { API_URL_TOKEN } from '../config';
import { Beer } from '../models/beer.interface';
import { mockedLocalStorage } from '../utils/mockLocalStorage';

const fakeBeers: Beer[] = [
  {
    abv: '',
    attributes: '',
    beer_id: 1,
    brewer: 'Molson',
    category: '',
    country: '',
    image_url: '',
    name: 'Lagger',
    on_sale: false,
    price: '12',
    product_id: 1234,
    size: '',
    style: ''
  }
];

describe('BrewerService', () => {
  let service: BrewerService;
  let http: HttpTestingController;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BrewerService,
        {
          provide: API_URL_TOKEN,
          useValue: ''
        }
      ]
    });

    service = bed.get(BrewerService);
    http = bed.get(HttpTestingController);

    const mockLocalStorage = mockedLocalStorage();

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  });

  afterEach(() => {
    localStorage.clear();
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });

  it('should call API when no saved brewers', () => {
    const req = http.expectOne('/beers');
    expect(req.request.method).toEqual('GET');
    req.flush(fakeBeers);

    service.brewers$.subscribe(result => {
      expect(result).toEqual(['Molson']);
    });

    http.verify();
  });

  xit('instead calling api should return brewers from localStorage', () => {
    localStorage.setItem('brewers', JSON.stringify(['Zywiec SA', 'Molson', 'Kampania Piwowarska']));

    service.brewers$.subscribe(res => {
      expect(res).toEqual(['Zywiec SA', 'Molson', 'Kampania Piwowarska']);
    });
  });
});
