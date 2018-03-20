import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PartService } from '../services/part.service';
import { Part } from '../model/part';

declare var require: any;

@Component({
  selector: 'part-detail',
  templateUrl: './part-detail.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./part-detail.component.css').toString()
    ]
})

export class PartDetailComponent implements OnInit{
  //@Input() part: Part;
  part = new Part;

  constructor(
    private partService: PartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.partService.getPart(+params['id']))
      .subscribe(mfr => this.part = mfr);
  }

  goBack(): void {
    this.location.back();
  }

  deleteButton(): void {
    this.partService.deletePart(this.part.part_id)
       .then(response => this.location.back());
  }

}//class PartDetailComponent
