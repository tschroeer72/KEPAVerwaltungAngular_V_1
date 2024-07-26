import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpieleingabeRoutingModule } from './spieleingabe-routing.module';
import { SpieleingabeComponent } from './spieleingabe.component';


@NgModule({
  declarations: [
    SpieleingabeComponent
  ],
  imports: [
    CommonModule,
    SpieleingabeRoutingModule
  ]
})
export class SpieleingabeModule { }
