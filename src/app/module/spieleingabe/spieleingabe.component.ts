import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MAT_DATE_LOCALE} from '@angular/material/core';

import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';
import * as wjcGrid from '@mescius/wijmo.grid';
import * as wjcCore from '@mescius/wijmo';
import { IMitglieder } from '../../interfaces/imitglieder';
import { MitgliederserviceService } from '../../services/mitgliederservice.service';
import { SpieleingabeService } from '../../services/spieleingabe.service';

@Component({
  selector: 'app-spieleingabe',
  templateUrl: './spieleingabe.component.html',
  styleUrl: './spieleingabe.component.scss',
  providers: [
              {
                provide: STEPPER_GLOBAL_OPTIONS,
                useValue: {showError: true},
              },
              // {
              //   provide: NG_VALUE_ACCESSOR,
              //   useExisting: forwardRef(() => MyInputField),
              //   multi: true,
              // },
              provideNativeDateAdapter(),
              {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
            ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpieleingabeComponent {
  fgDataAktiveMitglieder: IMitglieder[];
  @ViewChild('fgAktiveMitglieder') fgAktiveMitglieder!: WjFlexGrid;

  fgDataEingabe:any[];
  @ViewChild('fgEingabe') fgEingabe!: WjFlexGrid;
  
  selectedSpieltag = new FormControl('', [Validators.required]);
  formGroupSpieltag = this._formBuilder.group({
    //ctlSpieltag: ['', Validators.required],
    ctlSpieltag: this.selectedSpieltag
  });

  selectedSpiel = new FormControl('', [Validators.required]);

  formGroupEingabe = this._formBuilder.group({
    ctlSpielauswahl: this.selectedSpiel
  });

  constructor(private _formBuilder: FormBuilder,
    private spieleingabeService:SpieleingabeService,
    private mitgliederService:MitgliederserviceService
  ) {
    wjcCore.setLicenseKey('dd-b-ts19-2,714646719392875#B0MRZI1pjIs9WQisnOiQkIsISP3cHapVVRTJWNw2WNiZla9ZEbURVevE4RyQlRSZjQExmbXdXb0N7Ly5Eb5VWZwcEWNhkZvIFMyE7UrsEewF4Q4IEVCZXOsVjVjVlb734aDFkat3GR9plNqVFbXl5S9JkQyFVZ42kURdGapN4TVN7LhRldCV5V4YTOx2idahWcMhVeaBHZKBFaWdVMFJDRsFnNIlESRNmQPRmNlJDTuFzYw3ESZ9mYvoVNU9Ue5UHaYFEN03ma0R4Z7h5YQp5bzAzKrl4VtRUQiVnb6p6LEVEV5ZmcDRTb8RGRrEzbI96bPNlVChndsV4bJ5WYOJ6Y6AHZiRnQ7VWZJZkdE34RyxGcrBnTB36cK34TYhlUIJmMvVGcro5cOZzZykTQNt6c8lXS6YWMT5mZ7UVePhjNiVFVTNVU0dVcvt4ZxwEbOdUOycmV5I6U0N4SQpnUoZzYkVXYmZDVxh5TiJiOiMlIsICM5Q4Q9gTRiojIIJCL4EzMycjM4UjN0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5cDN5ADIxADOwQjMwIjI0ICdyNkIsIiMtkTMzRXLi5CZkJiOiMXbEJCLikmbhJXahREIuFmcpRkI0ISYONkIsISN7gjM9MTOxcjN4YDNxcjI0ICZJJCL355W0IyZsZmIsIiM6NjMwIjI0IiclZnIsU6csFmZII9c');

    this.fgDataAktiveMitglieder = mitgliederService.GetAktiveMitglieder();
    this.fgDataEingabe = [];
    //this.fgAktiveMitglieder.allowAddNew = false;
    //this.fgAktiveMitglieder.allowDelete = false;
    //this.fgAktiveMitglieder.isReadOnly = true;
  }
    
  ngAfterViewInit(){
    this._makeDragSource(this.fgAktiveMitglieder);
    this._makeDropTarget(this.fgAktiveMitglieder);

    this._makeDragSource(this.fgEingabe);
    this._makeDropTarget(this.fgEingabe);
  }
  
  fgEingabeInit9erRatten(){
    this.fgEingabe.columns.clear();

    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpielerID = new wjcGrid.Column();
    colSpielerID.binding = 'SpielerID';
    colSpielerID.header = 'SpielerID';
    this.fgEingabe.columns.push(colSpielerID);

    var colSpieler = new wjcGrid.Column();
    colSpieler.binding = 'SpielerName';
    colSpieler.header = 'SpielerName';
    this.fgEingabe.columns.push(colSpieler);

    var col9er = new wjcGrid.Column();
    col9er.binding = 'Neuner';
    col9er.header = '9er';
    this.fgEingabe.columns.push(col9er);
    
    var colSpieler = new wjcGrid.Column();
    colSpieler.binding = 'Ratten';
    colSpieler.header = 'Ratten';
    this.fgEingabe.columns.push(colSpieler);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabe9erRatten();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInit6TageRennen(){
    this.fgEingabe.columns.clear();

    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpieler1ID = new wjcGrid.Column();
    colSpieler1ID.binding = 'Spieler1ID';
    colSpieler1ID.header = 'Spieler1ID';
    this.fgEingabe.columns.push(colSpieler1ID);

    var colSpieler1 = new wjcGrid.Column();
    colSpieler1.binding = 'Spieler1Name';
    colSpieler1.header = 'Spieler 1 Name';
    this.fgEingabe.columns.push(colSpieler1);

    var colSpieler2ID = new wjcGrid.Column();
    colSpieler2ID.binding = 'Spieler2ID';
    colSpieler2ID.header = 'Spieler2ID';
    this.fgEingabe.columns.push(colSpieler2ID);

    var colSpieler2 = new wjcGrid.Column();
    colSpieler2.binding = 'Spieler2Name';
    colSpieler2.header = 'Spieler 2 Name';
    this.fgEingabe.columns.push(colSpieler2);

    var colRunden = new wjcGrid.Column();
    colRunden.binding = 'Runden';
    colRunden.header = 'Runden';
    this.fgEingabe.columns.push(colRunden);
    
    var colPunkte = new wjcGrid.Column();
    colPunkte.binding = 'Punkte';
    colPunkte.header = 'Punkte';
    this.fgEingabe.columns.push(colPunkte);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabe6TageRennen();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInitPokal(){
    this.fgEingabe.columns.clear();

    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpielerID = new wjcGrid.Column();
    colSpielerID.binding = 'SpielerID';
    colSpielerID.header = 'SpielerID';
    this.fgEingabe.columns.push(colSpielerID);

    var colSpieler = new wjcGrid.Column();
    colSpieler.binding = 'SpielerName';
    colSpieler.header = 'SpielerName';
    this.fgEingabe.columns.push(colSpieler);

    var colPlatzierung = new wjcGrid.Column();
    colPlatzierung.binding = 'Platzierung';
    colPlatzierung.header = 'Platzierung';
    this.fgEingabe.columns.push(colPlatzierung);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabePokal();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInitKombimeisterschaft(){
    this.fgEingabe.columns.clear();
    
    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpieler1ID = new wjcGrid.Column();
    colSpieler1ID.binding = 'Spieler1ID';
    colSpieler1ID.header = 'Spieler1ID';
    this.fgEingabe.columns.push(colSpieler1ID);

    var colSpieler1 = new wjcGrid.Column();
    colSpieler1.binding = 'Spieler1Name';
    colSpieler1.header = 'Spieler 1 Name';
    this.fgEingabe.columns.push(colSpieler1);

    var colSpieler2ID = new wjcGrid.Column();
    colSpieler2ID.binding = 'Spieler2ID';
    colSpieler2ID.header = 'Spieler2ID';
    this.fgEingabe.columns.push(colSpieler2ID);

    var colSpieler2 = new wjcGrid.Column();
    colSpieler2.binding = 'Spieler2Name';
    colSpieler2.header = 'Spieler 2 Name';
    this.fgEingabe.columns.push(colSpieler2);

    var colSpieler1Punkte3bis8 = new wjcGrid.Column();
    colSpieler1Punkte3bis8.binding = 'Spieler1Punkte3bis8';
    colSpieler1Punkte3bis8.header = 'Spieler1Punkte3bis8';
    this.fgEingabe.columns.push(colSpieler1Punkte3bis8);
    
    var colSpieler1Punkte5Kugeln = new wjcGrid.Column();
    colSpieler1Punkte5Kugeln.binding = 'Spieler1Punkte5Kugeln';
    colSpieler1Punkte5Kugeln.header = 'Spieler1Punkte5Kugeln';
    this.fgEingabe.columns.push(colSpieler1Punkte5Kugeln);

    var colSpieler2Punkte3bis8 = new wjcGrid.Column();
    colSpieler2Punkte3bis8.binding = 'Spieler2Punkte3bis8';
    colSpieler2Punkte3bis8.header = 'Spieler2Punkte3bis8';
    this.fgEingabe.columns.push(colSpieler2Punkte3bis8);
    
    var colSpieler2Punkte5Kugeln = new wjcGrid.Column();
    colSpieler2Punkte5Kugeln.binding = 'Spieler2Punkte5Kugeln';
    colSpieler2Punkte5Kugeln.header = 'Spieler2Punkte5Kugeln';
    this.fgEingabe.columns.push(colSpieler2Punkte5Kugeln);

    var colHinRueckrunde = new wjcGrid.Column();
    colHinRueckrunde.binding = 'HinRueckrunde';
    colHinRueckrunde.header = 'HinRueckrunde';
    this.fgEingabe.columns.push(colHinRueckrunde);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabeKombimeisterschaft();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInitSargkegeln(){
    this.fgEingabe.columns.clear();
    
    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpielerID = new wjcGrid.Column();
    colSpielerID.binding = 'SpielerID';
    colSpielerID.header = 'SpielerID';
    this.fgEingabe.columns.push(colSpielerID);

    var colSpieler = new wjcGrid.Column();
    colSpieler.binding = 'SpielerName';
    colSpieler.header = 'SpielerName';
    this.fgEingabe.columns.push(colSpieler);

    var colPlatzierung = new wjcGrid.Column();
    colPlatzierung.binding = 'Platzierung';
    colPlatzierung.header = 'Platzierung';
    this.fgEingabe.columns.push(colPlatzierung);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabeSargkegeln();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInitMeisterschaft(){
    this.fgEingabe.columns.clear();
    
    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpieler1ID = new wjcGrid.Column();
    colSpieler1ID.binding = 'Spieler1ID';
    colSpieler1ID.header = 'Spieler1ID';
    this.fgEingabe.columns.push(colSpieler1ID);

    var colSpieler1 = new wjcGrid.Column();
    colSpieler1.binding = 'Spieler1Name';
    colSpieler1.header = 'Spieler 1 Name';
    this.fgEingabe.columns.push(colSpieler1);

    var colSpieler2ID = new wjcGrid.Column();
    colSpieler2ID.binding = 'Spieler2ID';
    colSpieler2ID.header = 'Spieler2ID';
    this.fgEingabe.columns.push(colSpieler2ID);

    var colSpieler2 = new wjcGrid.Column();
    colSpieler2.binding = 'Spieler2Name';
    colSpieler2.header = 'Spieler 2 Name';
    this.fgEingabe.columns.push(colSpieler2);

    var colHolzSpieler1 = new wjcGrid.Column();
    colHolzSpieler1.binding = 'HolzSpieler1';
    colHolzSpieler1.header = 'HolzSpieler1';
    this.fgEingabe.columns.push(colHolzSpieler1);
    
    var colHolzSpieler2 = new wjcGrid.Column();
    colHolzSpieler2.binding = 'HolzSpieler2';
    colHolzSpieler2.header = 'HolzSpieler2';
    this.fgEingabe.columns.push(colHolzSpieler2);

    var colHinRueckrunde = new wjcGrid.Column();
    colHinRueckrunde.binding = 'HinRueckrunde';
    colHinRueckrunde.header = 'HinRueckrunde';
    this.fgEingabe.columns.push(colHinRueckrunde);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabeMeisterschaft();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  fgEingabeInitBlitztunier(){
    this.fgEingabe.columns.clear();
    
    var colID = new wjcGrid.Column();
    colID.binding = 'ID';
    colID.header = 'ID';
    this.fgEingabe.columns.push(colID);

    var colSpieler1ID = new wjcGrid.Column();
    colSpieler1ID.binding = 'Spieler1ID';
    colSpieler1ID.header = 'Spieler1ID';
    this.fgEingabe.columns.push(colSpieler1ID);

    var colSpieler1 = new wjcGrid.Column();
    colSpieler1.binding = 'Spieler1Name';
    colSpieler1.header = 'Spieler 1 Name';
    this.fgEingabe.columns.push(colSpieler1);

    var colSpieler2ID = new wjcGrid.Column();
    colSpieler2ID.binding = 'Spieler2ID';
    colSpieler2ID.header = 'Spieler2ID';
    this.fgEingabe.columns.push(colSpieler2ID);

    var colSpieler2 = new wjcGrid.Column();
    colSpieler2.binding = 'Spieler2Name';
    colSpieler2.header = 'Spieler 2 Name';
    this.fgEingabe.columns.push(colSpieler2);

    var colPunkteSpieler1 = new wjcGrid.Column();
    colPunkteSpieler1.binding = 'PunkteSpieler1';
    colPunkteSpieler1.header = 'PunkteSpieler1';
    this.fgEingabe.columns.push(colPunkteSpieler1);
    
    var colPunkteSpieler2 = new wjcGrid.Column();
    colPunkteSpieler2.binding = 'PunkteSpieler2';
    colPunkteSpieler2.header = 'PunkteSpieler2';
    this.fgEingabe.columns.push(colPunkteSpieler2);

    var colHinRueckrunde = new wjcGrid.Column();
    colHinRueckrunde.binding = 'HinRueckrunde';
    colHinRueckrunde.header = 'HinRueckrunde';
    this.fgEingabe.columns.push(colHinRueckrunde);

    this.fgDataEingabe = this.spieleingabeService.InitFgEingabeBlitztunier();
    this.fgEingabe.autoSizeColumns(0, this.fgEingabe.columns.length - 1);
  }

  selectedSpielauswahl(){
    console.log(this.selectedSpiel.value);
    switch(this.selectedSpiel.value){
      case '1': {
        console.log('9er/Ratten');
        this.fgEingabeInit9erRatten();
        break;
      }
      case '2': {
        console.log('6-Tage-Rennen');
        this.fgEingabeInit6TageRennen();
        break;
      }
      case '3': {
        console.log('Pokal');
        this.fgEingabeInitPokal();
        break;
      }
      case '4': {
        console.log('Kombimeisterschaft');
        this.fgEingabeInitKombimeisterschaft();
        break;
      }
      case '5': {
        console.log('Sargkegeln');
        this.fgEingabeInitSargkegeln();
        break;
      }
      case '6': {
        console.log('Meisterschaft');
        this.fgEingabeInitMeisterschaft();
        break;
      }
      case '7': {
        console.log('Blitztunier');
        this.fgEingabeInitBlitztunier();
        break;
      }
    }
  }

  updateSelectedSpieltag(value: any){
    //console.log(value);
    this.formGroupSpieltag.get('ctlSpieltag')?.setValue(value);
  }

  private _makeDragSource(s: WjFlexGrid) {
    // make rows draggable
    s.itemFormatter = (panel: wjcGrid.GridPanel, r: number, c: number, cell: HTMLElement) => {
      if (panel.cellType == wjcGrid.CellType.RowHeader) {
          cell.textContent = (r + 1).toString();
          cell.draggable = true;
      }
    };
    // disable built-in row drag/drop
    s.addEventListener(s.hostElement, 'mousedown', (e: MouseEvent) => {
      if (s.hitTest(e).cellType == wjcGrid.CellType.RowHeader) {
          e.stopPropagation();
      };
    }, true);
    // handle drag start
    s.addEventListener(s.hostElement, 'dragstart', (e: DragEvent) => {
      let ht = s.hitTest(e);
      if (ht.cellType == wjcGrid.CellType.RowHeader) {
          s.select(new wjcGrid.CellRange(ht.row, 0, ht.row, s.columns.length - 1));
          if(e.dataTransfer != null) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', ht.row.toString());
          }          
      };
    }, true);
  }

  // enable drop operations on an element
  private _makeDropTarget(s: WjFlexGrid) {
    s.addEventListener(s.hostElement, 'dragover', (e: DragEvent) => {
        let dragRow = e.dataTransfer?.getData('text');
        if (dragRow != null) {
          if(e.dataTransfer != null) { 
            e.dataTransfer.dropEffect = 'move';
            e.preventDefault();
          }
        }
    }, true);
    s?.addEventListener(s.hostElement, 'drop', (e: DragEvent) => {      
      let dragRow = e.dataTransfer?.getData('text');
      if (dragRow != null) {
        //AddTeilnehmer
        // if(s === this.fgTeilnehmer){
        //   const rowIndex:number = parseInt(dragRow);
        //   const item:IMitglieder = this.fgAktiveMitglieder.rows[rowIndex].dataItem;
        //   //alert('thanks for dropping row ' + JSON.stringify(item) + ' here.');
        //   //console.log('thanks for dropping row ' + JSON.stringify(item) + ' here.');
        //   this._Addteilnehmer(rowIndex);
        //   e.preventDefault();
        // }

        //DelTeilnehmer
        // if(s === this.fgAktiveMitglieder){
        //   const rowIndex:number = parseInt(dragRow);
        //   const item:ITeilnehmer = this.fgTeilnehmer.rows[rowIndex].dataItem;
        //   //alert('thanks for dropping row ' + JSON.stringify(item) + ' here.');
        //   //console.log('thanks for dropping row ' + JSON.stringify(item) + ' here.');
        //   this._DelTeilnehmer(rowIndex);
        //   e.preventDefault();
        // }
      }
    }, true);
  }
  
  fgAktiveMitgliederInit = () => {
    this.fgAktiveMitglieder.showSort = true;
    this.fgAktiveMitglieder.autoSizeColumns(0, this.fgAktiveMitglieder.columns.length - 1);
  }

  fgAktiveMitgliederSelectedRow = () => {
    const row:IMitglieder = this.fgAktiveMitglieder.selectedRows[0].dataItem;

    //console.log(row);
  }
  
}
