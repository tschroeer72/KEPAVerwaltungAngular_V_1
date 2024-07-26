import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MitgliederverwaltungComponent } from './mitgliederverwaltung.component';

const routes: Routes = [{ path: '', component: MitgliederverwaltungComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MitgliederverwaltungRoutingModule { }
