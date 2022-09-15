import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRates } from './high-scores/high-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRates
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [GraphQLModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
