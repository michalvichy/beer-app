import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerItemComponent } from './beer-item.component';
import { FullImageComponent } from '../full-image/full-image.component';
import { Beer } from './../../models/beer.interface';

const fakeBeer: Beer = {
  beer_id: 1,
  abv: '',
  attributes: '',
  brewer: 'Molson',
  category: '',
  country: '',
  image_url: '',
  name: 'Wojak',
  on_sale: true,
  price: '',
  product_id: 123,
  size: '',
  style: ''
};

describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerItemComponent, FullImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerItemComponent);
    component = fixture.componentInstance;
    component.beer = fakeBeer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
