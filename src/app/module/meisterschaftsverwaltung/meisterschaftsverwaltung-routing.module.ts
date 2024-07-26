import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeisterschaftsverwaltungComponent } from './meisterschaftsverwaltung.component';

const routes: Routes = [{ path: '', component: MeisterschaftsverwaltungComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeisterschaftsverwaltungRoutingModule { }
