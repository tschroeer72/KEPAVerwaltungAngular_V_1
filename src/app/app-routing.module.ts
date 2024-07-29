import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mitglieder', loadChildren: () => import('./module/mitgliederverwaltung/mitgliederverwaltung.module').then(m => m.MitgliederverwaltungModule) },
  { path: 'meisterschaft', loadChildren: () => import('./module/meisterschaftsverwaltung/meisterschaftsverwaltung.module').then(m => m.MeisterschaftsverwaltungModule) },
  { path: 'spieleingabe', loadChildren: () => import('./module/spieleingabe/spieleingabe.module').then(m => m.SpieleingabeModule) },
  { path: 'spielergebnisse', loadChildren: () => import('./module/spielergebnisse/spielergebnisse.module').then(m => m.SpielergebnisseModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
