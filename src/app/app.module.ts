import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routingArr } from '../app.routing';
import { HttpClientModule } from '@angular/common/http';


// local components
import { DisplayAllDataComponent } from './display-all-data/display-all-data.component';
import { DisplayStateDataComponent } from './display-all-data/display-state-data/display-state-data.component';

// material imports
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




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
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
