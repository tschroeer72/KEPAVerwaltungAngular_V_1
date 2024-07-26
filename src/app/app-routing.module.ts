import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mitglieder', loadChildren: () => import('./module/mitgliederverwaltung/mitgliederverwaltung.module').then(m => m.MitgliederverwaltungModule) },
  { path: 'meisterschaft', loadChildren: () => import('./module/meisterschaftsverwaltung/meisterschaftsverwaltung.module').then(m => m.MeisterschaftsverwaltungModule) },
  { path: 'spieleingabe', loadChildren: () => import('./module/spieleingabe/spieleingabe.module').then(m => m.SpieleingabeModule) },
  { path: 'spielergebnisse', loadChildren: () => import('./module/spielergebnisse/spielergebnisse.module').then(m => m.SpielergebnisseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
