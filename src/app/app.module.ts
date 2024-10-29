import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeBr from '@angular/common/locales/pt';
import {
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  NgModule,
  inject
} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideNgIconLoader, withCaching } from '@ng-icons/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

registerLocaleData(localeBr, 'pt-BR');

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideNgIconLoader((name) => {
      const http = inject(HttpClient);
      return http.get(`/assets/icons/${name}.svg`, { responseType: 'text' });
    }, withCaching())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
