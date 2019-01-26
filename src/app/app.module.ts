import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_URL_TOKEN } from './config';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [
    {
      provide: API_URL_TOKEN,
      useValue: environment.apiUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
