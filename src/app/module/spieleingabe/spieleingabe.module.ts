import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SpieleingabeRoutingModule } from './spieleingabe-routing.module';
import { SpieleingabeComponent } from './spieleingabe.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    SpieleingabeComponent
  ],
  imports: [
    CommonModule,
    SpieleingabeRoutingModule,FormsModule, ReactiveFormsModule,

    MatCardModule,MatTabsModule,MatStepperModule,MatButtonModule,MatDatepickerModule,MatFormFieldModule,MatInputModule
  ]
})
export class SpieleingabeModule { }
