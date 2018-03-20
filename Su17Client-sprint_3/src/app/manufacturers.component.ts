import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManufacturerService } from '../services/manufacturer.service';

import { Manufacturer } from '../model/manufacturer';

@Component({
  selector: 'manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})

export class ManufacturersComponent implements OnInit {
  manufacturers: Manufacturer[];
  selectedManufacturer: Manufacturer;

  constructor(private router: Router, private manufacturerService: ManufacturerService) { }

  ngOnInit(): void {
    this.getManufacturers();
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturers()
      .then((mfrs) => {
        console.log(mfrs);
        this.manufacturers = mfrs;
        console.log(JSON.stringify(this.manufacturers));
      });

  }

  // onSelect(mfr: Manufacturer): void {
  //   this.selectedManufacturer = mfr;
  //   this.router.navigate(['/manufacturer-detail', this.selectedManufacturer.manufacturer_id]);
  // }

}//class ManufacturersComponent 