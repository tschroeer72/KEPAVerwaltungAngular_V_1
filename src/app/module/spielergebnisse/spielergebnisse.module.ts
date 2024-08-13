import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SpielergebnisseRoutingModule } from './spielergebnisse-routing.module';
import { SpielergebnisseComponent } from './spielergebnisse.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';


import { WjGridModule } from '@mescius/wijmo.angular2.grid';

@NgModule({
  declarations: [
    SpielergebnisseComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    SpielergebnisseRoutingModule,

    MatCardModule,MatTabsModule,MatButtonModule,MatInputModule,MatSelectModule,MatListModule,

    WjGridModule
  ]
})
export class SpielergebnisseModule { }
