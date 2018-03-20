import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PrunService } from '../services/prun.service';
import { productionRun } from '../model/prun';

declare var require: any; 

@Component({
  selector: 'prun-add',
  templateUrl: './prun-add.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./prun-add.component.css').toString()
    ] 
})

export class PrunAddComponent implements OnInit{
  product: any; 

  constructor(
    private prunService: PrunService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.prunService.newPrun(this.product)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class prunAddComponent
