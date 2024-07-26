import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeisterschaftsverwaltungRoutingModule } from './meisterschaftsverwaltung-routing.module';
import { MeisterschaftsverwaltungComponent } from './meisterschaftsverwaltung.component';


@NgModule({
  declarations: [
    MeisterschaftsverwaltungComponent
  ],
  imports: [
    CommonModule,
    MeisterschaftsverwaltungRoutingModule
  ]
})
export class MeisterschaftsverwaltungModule { }
