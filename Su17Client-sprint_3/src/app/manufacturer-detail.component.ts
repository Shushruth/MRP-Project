import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ManufacturerService } from '../services/manufacturer.service';
import { Manufacturer } from '../model/manufacturer';

declare var require: any;

@Component({
  selector: 'manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./manufacturer-detail.component.css').toString()
    ]
})

export class ManufacturerDetailComponent implements OnInit{
  //@Input() manufacturer: Manufacturer;
  manufacturer = new Manufacturer;
  mfrName: any;

  constructor(
    private manufacturerService: ManufacturerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.manufacturerService.getManufacturer(+params['id']))
      .subscribe(mfr => this.manufacturer = mfr);
  }

  goBack(): void {
    this.location.back();
  }

  deleteButton(mftr: Manufacturer): void {
    console.log(mftr);
    this.manufacturerService.deleteManufacturer(mftr.manufacturer_id)
       .then(response => this.location.back());
  }

updateManufacturerB(mfrs: Manufacturer): void {
  console.log(mfrs);
    this.manufacturerService.updateManufacturer(this.mfrName,mfrs.manufacturer_id)
       .then(response => this.goBack());
  }
  
}//class ManufacturerDetailComponent
