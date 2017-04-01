import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
