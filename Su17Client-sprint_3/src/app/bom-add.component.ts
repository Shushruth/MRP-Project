import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BOMService } from '../services/bom.service';
import { BillofMaterials } from '../model/billofmaterials';

declare var require: any; 

@Component({
  selector: 'insert_product',
  templateUrl: './bom-add.component.html'
 /* styles: [
    require('../styles.css').toString(), 
    require('./bom-detail.component.css').toString()
    ]*/ 
})

export class BOMAddComponent implements OnInit{
  prdID: any; 
  verID: any;

  constructor(
    private bomService: BOMService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.bomService.newBOM(this.prdID,this.verID)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class BOMAddComponent
