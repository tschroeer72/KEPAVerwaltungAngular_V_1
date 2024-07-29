import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
// import {FlatTreeControl} from '@angular/cdk/tree';
import { MitgliederverwaltungRoutingModule } from './mitgliederverwaltung-routing.module';
import { MitgliederverwaltungComponent } from './mitgliederverwaltung.component';
// import {BehaviorSubject, merge, Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [
    MitgliederverwaltungComponent
  ],
  imports: [
    CommonModule,
    MitgliederverwaltungRoutingModule,
    MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule
  ]
})
export class MitgliederverwaltungModule { }
