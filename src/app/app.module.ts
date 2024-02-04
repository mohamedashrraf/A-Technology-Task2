import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';

import { TableModule } from 'primeng/table';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ApiComponent } from './api/api.component';

import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartsComponent,
    TableComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    // NgApexchartsModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
