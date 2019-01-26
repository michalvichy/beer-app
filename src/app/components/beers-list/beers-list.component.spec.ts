import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { BeersListComponent } from './beers-list.component';
import { BeerItemComponent } from './../beer-item/beer-item.component';
import { SpinnerComponent } from './../spinner/spinner.component';
import { FullImageComponent } from './../full-image/full-image.component';
import { API_URL_TOKEN } from './../../config';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeersListComponent, BeerItemComponent, SpinnerComponent, FullImageComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, MatSelectModule],
      providers: [{ provide: API_URL_TOKEN, useValue: '' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
