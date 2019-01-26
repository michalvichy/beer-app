import { Component, OnInit } from '@angular/core';
import { BrewerService } from './services/brewer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'beer-app';
  public brewers$: Observable<string[]>;

  constructor(private brewerService: BrewerService) {}

  public ngOnInit() {
    this.brewers$ = this.brewerService.brewers$;
  }
}
