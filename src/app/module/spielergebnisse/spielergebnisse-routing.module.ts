import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpielergebnisseComponent } from './spielergebnisse.component';

const routes: Routes = [{ path: '', component: SpielergebnisseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpielergebnisseRoutingModule { }
