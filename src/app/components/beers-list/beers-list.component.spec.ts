import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { BeersListComponent } from './beers-list.component';
import { BeerItemComponent } from './../beer-item/beer-item.component';
import { SpinnerComponent } from './../spinner/spinner.component';
import { FullImageComponent } from './../full-image/full-image.component';
import { API_URL_TOKEN, DEFAULT_SETTINGS_TOKEN } from './../../config';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsService } from 'src/app/services/settings.service';
import { BeersService } from 'src/app/services/beers.service';
import { Settings } from 'src/app/models/settings.interface';
import { Beer } from 'src/app/models/beer.interface';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const fakeSettings: Settings = {
  theme: 'light',
  perPage: 1
};

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
  },
  {
    abv: '',
    attributes: '',
    beer_id: 2,
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

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;
  let el: DebugElement;
  let settingsService: SettingsService;

  beforeEach(async(() => {
    const beersService = jasmine.createSpyObj('BeerService', ['getBeers']);
    beersService.getBeers.and.returnValue(of(fakeBeers));

    TestBed.configureTestingModule({
      declarations: [BeersListComponent, BeerItemComponent, SpinnerComponent, FullImageComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatSelectModule],
      providers: [
        SettingsService,
        { provide: BeersService, useValue: beersService },
        { provide: DEFAULT_SETTINGS_TOKEN, useValue: fakeSettings },
        { provide: API_URL_TOKEN, useValue: '' }
      ]
    }).compileComponents();

    settingsService = TestBed.get(SettingsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Load more" button', () => {
    expect(component.showLoadMore).toBe(true);
    expect(el.query(By.css('.load-more'))).toBeTruthy();
  });

  it('should hide button "Load more" after click', () => {
    el.query(By.css('.load-more')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showLoadMore).toBe(false);
    expect(el.query(By.css('.load-more'))).toBeFalsy();
  });

  it('should respond to Setting Service and show "Load more" button', () => {
    settingsService.updateSettings({ perPage: 2 });

    fixture.detectChanges();

    expect(component.showLoadMore).toBe(false);
    expect(el.query(By.css('.load-more'))).toBeFalsy();
  });
});
