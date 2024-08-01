import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';

@NgModule({
  declarations: [
    MeisterschaftsverwaltungComponent
  ],
  imports: [
    CommonModule, DatePipe,
    FormsModule, ReactiveFormsModule,
    MeisterschaftsverwaltungRoutingModule,
    MatTableModule,MatCardModule,MatGridListModule,MatTabsModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,

    WjGridModule
  ]
})
export class MeisterschaftsverwaltungModule { 
  
}
