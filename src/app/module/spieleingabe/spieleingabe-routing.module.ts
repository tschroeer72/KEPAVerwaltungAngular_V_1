import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpieleingabeComponent } from './spieleingabe.component';

const routes: Routes = [{ path: '', component: SpieleingabeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpieleingabeRoutingModule { }
