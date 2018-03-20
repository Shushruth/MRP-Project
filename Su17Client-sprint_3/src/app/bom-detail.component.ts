import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BOMService } from '../services/bom.service';
import { BillofMaterials } from '../model/billofmaterials';

declare var require: any;

@Component({
  selector: 'bom_id_all',
  templateUrl: './bom-detail.component.html'
  /*styles: [
    require('../styles.css').toString(), 
    require('./bom-detail.component.css').toString()
    ]*/
})

export class BOMDetailComponent implements OnInit{
  //@Input() billofmaterias: BillofMaterials;
  billofmaterials = new BillofMaterials;
  prdID: any;
  verID: any;

  constructor(
    private bomService: BOMService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.bomService.getBOMDetails(+params['bom_id']))
      .subscribe(bom => this.billofmaterials = bom);
  }

  goBack(): void {
    this.location.back();
  }

deleteButton(boms: BillofMaterials): void {
  console.log(boms);
    this.bomService.deleteBOM(boms.bom_id)
       .then(response => this.location.back());
  }

  updateProductB(boms: BillofMaterials): void {
  console.log(boms);
    this.bomService.updateProduct(boms.bom_id,this.prdID)
       .then(response => this.goBack());
  }

  updateVersionB(boms: BillofMaterials): void {
  console.log(boms);
    this.bomService.updateVersion(boms.bom_id,this.verID)
       .then(response => this.goBack());
  }
}//class BOMDetailComponent
