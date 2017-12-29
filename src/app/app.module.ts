import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { DbOperationsService } from './db-operations.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
	  FormsModule,
	  ReactiveFormsModule,
	  DataTableModule
  ],
  providers: [DbOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
