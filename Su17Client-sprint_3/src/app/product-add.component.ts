import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

declare var require: any; 

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./product-detail.component.css').toString()
    ] 
})

export class ProductAddComponent implements OnInit{
  productName: any;
  productDesignation: any;
  standardSalesPrice: any; 

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  saveButton(): void {
    console.log("clicked save button");
    this.productService.newProduct(this.productName,this.standardSalesPrice,this.productDesignation)
      .then(response => this.location.back());
  }

  cancelButton(): void {
    this.location.back();
  }

}//class ProductAddComponent
