import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'Kegelgruppe KEPA 1958 Verwaltung';
  currentDate = new Date();
  
  events: string[] = [];
  opened: boolean = false;
}
