import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Observable, Subscription } from 'rxjs';
import { BrewerService } from 'src/app/services/brewer.service';
import { Beer } from 'src/app/models/beer.interface';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings } from 'src/app/models/settings.interface';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {
  public brewers$: Observable<string[]>;
  public pending = false;
  public selected: string;

  private allBeers: Beer[] = [];
  private currentPage = 1;
  private pagesNumber: number;
  private settings$: Subscription = new Subscription();
  private settings: Settings;

  @Input() name: string;

  constructor(
    private brewerService: BrewerService,
    private beerService: BeersService,
    private settingsService: SettingsService
  ) {
    this.settings$.add(
      this.settingsService.settings$.subscribe(value => {
        this.settings = value;
      })
    );
  }

  public ngOnInit() {
    this.selected = localStorage.getItem(this.keyName) || '';

    this.brewers$ = this.brewerService.brewers$;

    this.getBeers(this.selected);
  }

  get keyName() {
    return `column-${this.name}`;
  }

  get showLoadMore(): boolean {
    return this.currentPage < this.pagesNumber;
  }

  get beers(): Beer[] {
    const foo = this.allBeers.slice(0, this.currentPage * this.settings.perPage);
    console.log(foo.length);

    return foo;
  }

  public onChange({ value }) {
    this.pending = true;
    this.allBeers = [];

    localStorage.setItem(this.keyName, value);

    this.getBeers(value);
  }

  public loadMore() {
    this.currentPage += 1;
  }

  private getBeers(brewer: string) {
    this.beerService.getBeers(brewer).subscribe(response => {
      this.pending = false;
      this.allBeers = response;

      this.countPages();
    });
  }

  private countPages() {
    this.pagesNumber = Math.ceil(this.allBeers.length / this.settings.perPage);
  }
}
