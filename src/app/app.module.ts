import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingArr } from '../app.routing';
import { HttpClientModule } from '@angular/common/http';


// local components
import { DisplayAllDataComponent } from './display-all-data/display-all-data.component';
import { DisplayStateDataComponent } from './display-state-data/display-state-data.component';

// material imports
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    DisplayAllDataComponent,
    DisplayStateDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routingArr,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
