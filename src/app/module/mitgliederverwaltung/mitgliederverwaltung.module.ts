import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MitgliederverwaltungRoutingModule } from './mitgliederverwaltung-routing.module';
import { MitgliederverwaltungComponent } from './mitgliederverwaltung.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MitgliederverwaltungComponent
  ],
  imports: [
    CommonModule,
    MitgliederverwaltungRoutingModule,
    MatTreeModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
  ]
})
export class MitgliederverwaltungModule { }
