import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MAT_DATE_LOCALE} from '@angular/material/core';

import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';
import * as wjcGrid from '@mescius/wijmo.grid';
import * as wjcCore from '@mescius/wijmo';

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
  selectedSpieltag = new FormControl('', [Validators.required]);
  formGroupSpieltag = this._formBuilder.group({
    //ctlSpieltag: ['', Validators.required],
    ctlSpieltag: this.selectedSpieltag
  });

  formGroupEingabe = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  updateSelectedSpieltag(value: any){
    console.log(value);
    this.formGroupSpieltag.get('ctlSpieltag')?.setValue(value);
  }

  constructor(private _formBuilder: FormBuilder) {
    wjcCore.setLicenseKey('dd-b-ts19-2,714646719392875#B0MRZI1pjIs9WQisnOiQkIsISP3cHapVVRTJWNw2WNiZla9ZEbURVevE4RyQlRSZjQExmbXdXb0N7Ly5Eb5VWZwcEWNhkZvIFMyE7UrsEewF4Q4IEVCZXOsVjVjVlb734aDFkat3GR9plNqVFbXl5S9JkQyFVZ42kURdGapN4TVN7LhRldCV5V4YTOx2idahWcMhVeaBHZKBFaWdVMFJDRsFnNIlESRNmQPRmNlJDTuFzYw3ESZ9mYvoVNU9Ue5UHaYFEN03ma0R4Z7h5YQp5bzAzKrl4VtRUQiVnb6p6LEVEV5ZmcDRTb8RGRrEzbI96bPNlVChndsV4bJ5WYOJ6Y6AHZiRnQ7VWZJZkdE34RyxGcrBnTB36cK34TYhlUIJmMvVGcro5cOZzZykTQNt6c8lXS6YWMT5mZ7UVePhjNiVFVTNVU0dVcvt4ZxwEbOdUOycmV5I6U0N4SQpnUoZzYkVXYmZDVxh5TiJiOiMlIsICM5Q4Q9gTRiojIIJCL4EzMycjM4UjN0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5cDN5ADIxADOwQjMwIjI0ICdyNkIsIiMtkTMzRXLi5CZkJiOiMXbEJCLikmbhJXahREIuFmcpRkI0ISYONkIsISN7gjM9MTOxcjN4YDNxcjI0ICZJJCL355W0IyZsZmIsIiM6NjMwIjI0IiclZnIsU6csFmZII9c');
  }
}
