import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

import { Product } from '../model/product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .then((products) => {
        console.log(products);
        this.products = products;
        console.log(JSON.stringify(this.products));
      });

  }}