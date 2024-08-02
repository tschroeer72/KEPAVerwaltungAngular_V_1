import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpieleingabeRoutingModule } from './spieleingabe-routing.module';
import { SpieleingabeComponent } from './spieleingabe.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SpieleingabeComponent
  ],
  imports: [
    CommonModule,
    SpieleingabeRoutingModule,

    MatCardModule,MatTabsModule,MatStepperModule,MatButtonModule
  ]
})
export class SpieleingabeModule { }
