import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRates } from './high-scores/high-scores.component';
import { MyscoreComponent } from './myscore/myscore.component';
import { ButtonComponent } from './button/button.component';
import { ButtonFunctionComponent } from './button-function/button-function.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRates,
    MyscoreComponent,
    ButtonComponent,
    ButtonFunctionComponent
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
