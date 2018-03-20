import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { LineItemService } from '../services/lineitem.service';
import { BOMService } from '../services/bom.service';
import { BillofMaterials } from '../model/billofmaterials';
import { LineItem } from '../model/lineitem';

import { Part } from '../model/part';
import { PartService } from '../services/part.service';
import { PartsComponent } from './parts.component';

@Component({
  selector: 'lineitems',
  templateUrl: './lineitems.component.html',
  styleUrls: ['./lineitems.component.css']
})

export class LineitemsComponent implements OnInit {
  billofmaterials: BillofMaterials[];
  lineitems: LineItem[];
  selectedLineItem: LineItem;
  part = new Part;
  parts: Part[] = new Array();

  constructor(private route: ActivatedRoute, private lineitemService: LineItemService,private bomService: BOMService,
    private partService: PartService) { }

  ngOnInit(): void {
    this.getLineItems();
  }

  getLineItems(): void {
      this.route.params
      .switchMap((params: Params) => 
          this.lineitemService.getLineItems(+params['bom_id']))
      .subscribe(response => {
        this.lineitems = response;
        console.log(this.lineitems);
        
        for(var i = 0; i< this.lineitems.length; i++)
      {
        console.log(this.lineitems[i].part);
        this.partService.getPart(this.lineitems[i].part)
        .then(prt => {this.part = prt;
        console.log(this.part);
      this.parts.push(this.part);
          });
        
        
      }
      
      });
      

      /*this.lineitems.forEach(element => {
        this.partService.getPart(element.part)
        .then(prt => this.part = prt);
      });*/

      
    
  }
}