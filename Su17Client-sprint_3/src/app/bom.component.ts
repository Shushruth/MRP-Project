import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BOMService } from '../services/bom.service';

import { BillofMaterials } from '../model/billofmaterials';

@Component({
  selector: 'billofmaterials',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})

export class BOMComponent implements OnInit {
  billofmaterials: BillofMaterials[];
  selectedBOM: BillofMaterials;

  constructor(private router: Router, private bomService: BOMService) { }

  ngOnInit(): void {
    this.getBOM();
  }

  getBOM(): void {
    this.bomService.getBOM()
      .then((bom) => {
        console.log();
        this.billofmaterials = bom;
        console.log(this.billofmaterials);
      });

  }

  // onSelect(mfr: Manufacturer): void {
  //   this.selectedManufacturer = mfr;
  //   this.router.navigate(['/manufacturer-detail', this.selectedManufacturer.manufacturer_id]);
  // }

}//class ManufacturersComponent 