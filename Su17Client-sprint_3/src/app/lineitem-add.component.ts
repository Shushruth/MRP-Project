import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { LineItemService } from '../services/lineitem.service';
import { LineItem } from '../model/lineitem';

declare var require: any; 

@Component({
  selector: 'bom_part_quantity',
  templateUrl: './lineitem-add.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./lineitem-detail.component.css').toString()
    ] 
})

export class LineitemAddComponent implements OnInit{
  bom: any;
  partID: any;
  qty: any; 

  constructor(
    private lineitemService: LineItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.lineitemService.newLineItem(this.bom,this.partID,this.qty)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class LineitemAddComponent
