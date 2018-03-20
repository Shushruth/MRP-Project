import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { LineItemService } from '../services/lineitem.service';
import { LineItem } from '../model/lineitem';

declare var require: any;

@Component({
  selector: 'lineitem_all',
  templateUrl: './lineitem-detail.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./lineitem-detail.component.css').toString()
    ]
})

export class LineItemDetailComponent implements OnInit{
  //@Input() lineitem: LineItem;
  lineitem = new LineItem;
  partID: any;
  qty: any;

  constructor(
    private lineitemService: LineItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.lineitemService.getLineItem(+params['id']))
      .subscribe(litem => {
        this.lineitem = litem;
        console.log(this.lineitem);
      });
  }

  goBack(): void {
    this.location.back();
  }

  deleteButton(item: LineItem): void {
    console.log(item);
    this.lineitemService.deleteLineItem(item.line_item_id)
       .then(response => this.location.back());
  }

  updatePartB(items: LineItem): void {
  console.log(items);
    this.lineitemService.updatePart(items.line_item_id,this.partID)
       .then(response => this.goBack());
  }

  updateQuantityB(items: LineItem): void {
  console.log(items);
    this.lineitemService.updateQuantity(items.line_item_id,this.qty)
       .then(response => this.goBack());
  }

}//class LineItemDetailComponent
