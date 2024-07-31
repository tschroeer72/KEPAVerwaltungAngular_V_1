import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MeisterschaftsverwaltungRoutingModule } from './meisterschaftsverwaltung-routing.module';
import { MeisterschaftsverwaltungComponent } from './meisterschaftsverwaltung.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
//import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@NgModule({
  declarations: [
    MeisterschaftsverwaltungComponent
  ],
  imports: [
    CommonModule, DatePipe,
    MeisterschaftsverwaltungRoutingModule,
    MatTableModule,MatCardModule,MatGridListModule,

    AgGridAngular
  ]
})
export class MeisterschaftsverwaltungModule { }
