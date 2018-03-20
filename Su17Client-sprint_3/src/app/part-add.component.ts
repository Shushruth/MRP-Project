import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PartService } from '../services/part.service';
import { Part } from '../model/part';

declare var require: any; 

@Component({
  selector: 'part-add',
  templateUrl: './part-add.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./part-detail.component.css').toString()
    ] 
})

export class PartAddComponent implements OnInit{
  partName: any; 

  constructor(
    private partService: PartService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.partService.newPart(this.partName)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class PartAddComponent
