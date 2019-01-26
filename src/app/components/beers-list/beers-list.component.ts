import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Observable } from 'rxjs';
import { BrewerService } from 'src/app/services/brewer.service';
import { Beer } from 'src/app/models/beer.interface';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {
  public brewers$: Observable<string[]>;
  public beers: Beer[] = [];
  public pending = false;
  public selected: string;

  @Input() name: string;

  constructor(private brewerService: BrewerService, private beerService: BeersService) {}

  public ngOnInit() {
    this.selected = localStorage.getItem(this.keyName) || '';

    this.brewers$ = this.brewerService.brewers$;

    this.getBeers(this.selected);
  }

  get keyName() {
    return `column-${this.name}`;
  }

  private getBeers(brewer: string) {
    this.beerService.getBeers(brewer).subscribe(response => {
      this.pending = false;
      this.beers = response.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }

        if (a.name < b.name) {
          return -1;
        }

        return 0;
      });
    });
  }

  onChange({ value }) {
    this.pending = true;
    this.beers = [];

    localStorage.setItem(this.keyName, value);

    this.getBeers(value);
  }
}
