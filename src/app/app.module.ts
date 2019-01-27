import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_URL_TOKEN, DEFAULT_SETTINGS_TOKEN, defaultSettings } from './config';
import { environment } from 'src/environments/environment';

import { BeersListComponent } from './components/beers-list/beers-list.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FullImageComponent } from './components/full-image/full-image.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import {
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeerItemComponent,
    SpinnerComponent,
    FullImageComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: API_URL_TOKEN,
      useValue: environment.apiUrl
    },
    {
      provide: DEFAULT_SETTINGS_TOKEN,
      useValue: defaultSettings
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    BeersListComponent,
    BeerItemComponent,
    SpinnerComponent,
    FullImageComponent,
    SettingsDialogComponent
  ],
  entryComponents: [SettingsDialogComponent]
})
export class AppModule {}
