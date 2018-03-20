import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

declare var require: any;

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styles: [
    require('../styles.css').toString(), 
    require('./product-detail.component.css').toString()
    ]
})

export class ProductDetailComponent implements OnInit{
  //@Input() product: Product;
  product = new Product;
  prdName: any;
  prdDes: any;
  sp: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => 
          this.productService.getProduct(+params['id']))
      .subscribe(Product => this.product = Product);
  }

  goBack(): void {
    this.location.back();
  }

  deleteButton(prod: Product): void {
    this.productService.deleteProduct(prod.product_id)
       .then(response => this.location.back());
  }

  updateNameB(pros: Product): void {
  console.log(pros);
    this.productService.updateName(pros.product_id,this.prdName)
       .then(response => this.goBack());
}

  updateDesignationB(pros: Product): void {
  console.log(pros);
    this.productService.updateDesignation(pros.product_id,this.prdDes)
       .then(response => this.goBack());
}

  updateSpB(pros: Product): void {
  console.log(pros);
    this.productService.updateSp(pros.product_id,this.sp)
       .then(response => this.goBack());
}



//class ProductDetailComponent
}