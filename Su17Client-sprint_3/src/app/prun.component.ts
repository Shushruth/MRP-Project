import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrunService } from '../services/prun.service';

import { productionRun } from '../model/prun';


@Component({
  selector: 'productionruns',
  templateUrl: './prun.component.html',
  styleUrls: ['./prun.component.css']
})

export class PrunComponent implements OnInit {
  productionruns: productionRun[];
  selectedrun: productionRun;

  constructor(private router: Router, private prunService: PrunService) { }

  ngOnInit(): void {
    this.getPrun();
  }

  getPrun(): void {
    this.prunService.getPrun()
    .then((prns) => {
        console.log(prns);
        this.productionruns = prns;
        console.log(JSON.stringify(this.productionruns));
      });

  }
}