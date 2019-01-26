import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_URL_TOKEN } from './config';
import { environment } from 'src/environments/environment';

import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { BeersListComponent } from './components/beers-list/beers-list.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FullImageComponent } from './components/full-image/full-image.component';

@NgModule({
  declarations: [AppComponent, BeersListComponent, BeerItemComponent, SpinnerComponent, FullImageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: API_URL_TOKEN,
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent],
  exports: [BeersListComponent, BeerItemComponent, SpinnerComponent, FullImageComponent]
})
export class AppModule {}
