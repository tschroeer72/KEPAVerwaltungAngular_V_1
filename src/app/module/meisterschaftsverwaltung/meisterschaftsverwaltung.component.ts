import { Component } from '@angular/core';
import { MeisterschaftserviceService } from '../../services/meisterschaftservice.service';
import { IMeisterschaftenliste } from '../../interfaces/imeisterschaftenliste';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
/* Core Data Grid CSS */
import 'ag-grid-community/styles/ag-grid.css';
/* Quartz Theme Specific CSS */
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-meisterschaftsverwaltung',
  templateUrl: './meisterschaftsverwaltung.component.html',
  styleUrl: './meisterschaftsverwaltung.component.scss'
})
export class MeisterschaftsverwaltungComponent {
  //displayedColumns: string[] = ['ID', 'Bezeichnung', 'Beginn', 'Ende', 'MeisterschaftstypID', 'Meisterschaftstyp', 'Aktiv'];
  // displayedColumns: string[] = ['ID', 'Bezeichnung', 'Beginn', 'Ende', 'Meisterschaftstyp', 'Aktiv'];
  // dataSource = this.meisterschaftsService.ListData;

  //tiles:Tile[] | undefined;

  // rowData = [
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  // ];

  rowData: IMeisterschaftenliste[] = [];
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "ID" },
    { field: "Bezeichnung" },
    { field: "Beginn" },
    { field: "Ende" },
    { field: "MeisterschaftstypID" },
    { field: "Meisterschaftstyp" },
    { field: "Aktiv" }   
  ];

  constructor(private meisterschaftsService: MeisterschaftserviceService){
    //this.tiles = MeisterschaftserviceService.GetMeisterschaftsliste();
    this.rowData = meisterschaftsService.GetMeisterschaftsliste();
    
  }

  
}
