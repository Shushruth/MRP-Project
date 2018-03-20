import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PrunService } from '../services/prun.service';
import { productionRun } from '../model/prun';

declare var require: any;

@Component({
  selector: 'prun-detail',
  templateUrl: './prun-detail.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./prun-detail.component.css').toString()
    ]
})

export class PrunDetailComponent implements OnInit{
  //@Input() prun: prun;
  prun = new productionRun;
  prd: any;
  qty: any;
  tsd: any;
  tcd: any;
  status: any;

  constructor(
    private prunService: PrunService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.prunService.getPrunid(+params['id']))
      .subscribe(mfr => this.prun = mfr);
  }

  goBack(): void {
    this.location.back();
  }

  deleteButton(pr: productionRun): void {
    this.prunService.deletePrun(pr.production_run_id)
       .then(response => this.location.back());
      
  }

  updateProductB(pros: productionRun): void {
  console.log(pros);
    this.prunService.updateProduct(pros.production_run_id,this.prd)
       .then(response => this.goBack());
}

  updateQuantityB(pros: productionRun): void {
  console.log(pros);
    this.prunService.updateQuantity(pros.production_run_id,this.qty)
       .then(response => this.goBack());
}

  updateTargetStartB(pros: productionRun): void {
  console.log(pros);
    this.prunService.updateTargetStart(pros.production_run_id,this.tsd)
       .then(response => this.goBack());
}

updateTargetCompletetB(pros: productionRun): void {
  console.log(pros);
    this.prunService.updateTargetComplete(pros.production_run_id,this.tcd)
       .then(response => this.goBack());
}

/*updateStatusB(pros: productionRun): void {
  console.log(pros);
    this.prunService.updateStatus(pros.production_run_id,this.status)
       .then(response => this.goBack());
}*/

}//class prunDetailComponent
