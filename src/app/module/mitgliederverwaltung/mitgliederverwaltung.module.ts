import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MitgliederverwaltungRoutingModule } from './mitgliederverwaltung-routing.module';
import { MitgliederverwaltungComponent } from './mitgliederverwaltung.component';


@NgModule({
  declarations: [
    MitgliederverwaltungComponent
  ],
  imports: [
    CommonModule,
    MitgliederverwaltungRoutingModule
  ]
})
export class MitgliederverwaltungModule { }
