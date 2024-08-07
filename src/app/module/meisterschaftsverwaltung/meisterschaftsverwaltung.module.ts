import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MeisterschaftsverwaltungRoutingModule } from './meisterschaftsverwaltung-routing.module';
import { MeisterschaftsverwaltungComponent } from './meisterschaftsverwaltung.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { WjGridModule } from '@mescius/wijmo.angular2.grid';

@NgModule({
  declarations: [
    MeisterschaftsverwaltungComponent
  ],
  imports: [
    CommonModule, DatePipe,
    FormsModule, ReactiveFormsModule,
    MeisterschaftsverwaltungRoutingModule,

    MatTableModule,MatCardModule,MatGridListModule,MatTabsModule,MatIconModule,MatButtonModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatSelectModule,MatCheckboxModule,

    WjGridModule
  ]
})
export class MeisterschaftsverwaltungModule { 
  
}
