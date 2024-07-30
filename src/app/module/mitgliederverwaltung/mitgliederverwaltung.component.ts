import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import { DynamicFlatNode } from '../../interfaces/tvdata';
import {FormControl, FormGroup} from '@angular/forms';
import { MitgliederserviceService, DynamicDataSource } from '../../services/mitgliederservice.service';

@Component({
  selector: 'app-mitgliederverwaltung',
  templateUrl: './mitgliederverwaltung.component.html',
  styleUrl: './mitgliederverwaltung.component.scss'
})
export class MitgliederverwaltungComponent {
  mitgliederPersoenlichesForm: FormGroup;
  mitgliederNotizenForm: FormGroup;
  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;
  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
  isExpandable = (node: DynamicFlatNode) => node.expandable;

  constructor(private mitgliederService: MitgliederserviceService){
      this.mitgliederPersoenlichesForm = new FormGroup({
      ID: new FormControl(),
      Vorname: new FormControl(''),
      Nachname: new FormControl(''),
      Display: new FormControl('')
    });

    this.mitgliederNotizenForm = new FormGroup({
      Notizen: new FormControl(''),
      Bemerkungen: new FormControl('')
    });

    this.treeControl = mitgliederService.treeControl;
    this.dataSource = mitgliederService.dataSource;
  }

  logNode(node:DynamicFlatNode){
    console.log(node.item)
    this.mitgliederPersoenlichesForm.patchValue(node.item);
    this.mitgliederNotizenForm.patchValue(node.item);
  }
}
