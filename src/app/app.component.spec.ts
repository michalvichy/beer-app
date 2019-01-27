import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BeersListComponent } from './components/beers-list/beers-list.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { API_URL_TOKEN, DEFAULT_SETTINGS_TOKEN } from './config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatSliderModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BeersListComponent,
        BeerItemComponent,
        SpinnerComponent,
        FullImageComponent
      ],
      imports: [MatSelectModule, HttpClientModule, MatIconModule, MatDialogModule, MatSliderModule],
      providers: [
        HttpClient,
        { provide: API_URL_TOKEN, useValue: '' },
        { provide: DEFAULT_SETTINGS_TOKEN, useValue: {} }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
