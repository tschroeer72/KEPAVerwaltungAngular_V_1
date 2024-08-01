import { Component, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MeisterschaftserviceService } from '../../services/meisterschaftservice.service';
import { IMeisterschaftenliste } from '../../interfaces/imeisterschaftenliste';
import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';
import * as wjcCore from '@mescius/wijmo';


@Component({
  selector: 'app-meisterschaftsverwaltung',
  templateUrl: './meisterschaftsverwaltung.component.html',
  styleUrl: './meisterschaftsverwaltung.component.scss'
})
export class MeisterschaftsverwaltungComponent {
  meisterschaftdetailsForm: FormGroup;
  data: any[];
  @ViewChild('fgMeisterschaften') flex!: WjFlexGrid;

  constructor(private meisterschaftsService: MeisterschaftserviceService){
    wjcCore.setLicenseKey('dd-b-ts19-2,714646719392875#B0MRZI1pjIs9WQisnOiQkIsISP3cHapVVRTJWNw2WNiZla9ZEbURVevE4RyQlRSZjQExmbXdXb0N7Ly5Eb5VWZwcEWNhkZvIFMyE7UrsEewF4Q4IEVCZXOsVjVjVlb734aDFkat3GR9plNqVFbXl5S9JkQyFVZ42kURdGapN4TVN7LhRldCV5V4YTOx2idahWcMhVeaBHZKBFaWdVMFJDRsFnNIlESRNmQPRmNlJDTuFzYw3ESZ9mYvoVNU9Ue5UHaYFEN03ma0R4Z7h5YQp5bzAzKrl4VtRUQiVnb6p6LEVEV5ZmcDRTb8RGRrEzbI96bPNlVChndsV4bJ5WYOJ6Y6AHZiRnQ7VWZJZkdE34RyxGcrBnTB36cK34TYhlUIJmMvVGcro5cOZzZykTQNt6c8lXS6YWMT5mZ7UVePhjNiVFVTNVU0dVcvt4ZxwEbOdUOycmV5I6U0N4SQpnUoZzYkVXYmZDVxh5TiJiOiMlIsICM5Q4Q9gTRiojIIJCL4EzMycjM4UjN0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5cDN5ADIxADOwQjMwIjI0ICdyNkIsIiMtkTMzRXLi5CZkJiOiMXbEJCLikmbhJXahREIuFmcpRkI0ISYONkIsISN7gjM9MTOxcjN4YDNxcjI0ICZJJCL355W0IyZsZmIsIiM6NjMwIjI0IiclZnIsU6csFmZII9c');
    this.data = meisterschaftsService.GetMeisterschaftsliste();

    this.meisterschaftdetailsForm = new FormGroup({
      ID: new FormControl({value: '', disabled: true}),
      Bezeichnung: new FormControl('', [Validators.required]),
      Beginn: new FormControl('', [Validators.required]),
      Ende: new FormControl(''),
      MeisterschaftstypID: new FormControl(),
      Aktiv: new FormControl()
    });

    this.meisterschaftdetailsForm.controls['ID'].disable();
    this.meisterschaftdetailsForm.controls['Bezeichnung'].disable();
    this.meisterschaftdetailsForm.controls['Beginn'].disable();
    this.meisterschaftdetailsForm.controls['Ende'].disable();
    this.meisterschaftdetailsForm.controls['MeisterschaftstypID'].disable();
    this.meisterschaftdetailsForm.controls['Aktiv'].disable();
  }

  init = () => {
    //console.log(this.flex);
    this.flex.autoSizeColumns(0, 6);
  }

  selectedRow = () => {
    //console.log(this.flex.selectedRows);
  }
}
