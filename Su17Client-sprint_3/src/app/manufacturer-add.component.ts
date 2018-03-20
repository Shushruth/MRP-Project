import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../model/manufacturer';

declare var require: any; 

@Component({
  selector: 'manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./manufacturer-detail.component.css').toString()
    ] 
})

export class ManufacturerAddComponent implements OnInit{
  mfrName: any; 

  constructor(
    private manufacturerService: ManufacturerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.manufacturerService.newManufacturer(this.mfrName)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class ManufacturerAddComponent
