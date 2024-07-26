import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpielergebnisseRoutingModule } from './spielergebnisse-routing.module';
import { SpielergebnisseComponent } from './spielergebnisse.component';


@NgModule({
  declarations: [
    SpielergebnisseComponent
  ],
  imports: [
    CommonModule,
    SpielergebnisseRoutingModule
  ]
})
export class SpielergebnisseModule { }
