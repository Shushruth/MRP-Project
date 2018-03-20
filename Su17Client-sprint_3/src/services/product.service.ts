import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Product } from '../model/product';

@Injectable()
export class ProductService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.apiUrl + "/products")
       .toPromise()
       .then(response => response.json().products as Product[])
       .catch(this.handleError);
  }//getProducts()

  getProduct(id: number): Promise<Product> {
    return this.http.get(this.apiUrl + "/products/" + id)
        .toPromise()
        .then(response => response.json() as Product)
        .catch(this.handleError);
  }//getProduct()

  newProduct(name: string,sp: number,des: string): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/products/new_all/' + name + "/" + sp + "/" + des, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deleteProduct(id: number): Promise<string> {
    return this.http.delete(this.apiUrl + '/products/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

   updateName(id: number,prdName: string): Promise<string> {
    return this.http.post(this.apiUrl + '/products/update_productname/' + id + "/" + prdName, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }
    
    updateDesignation(id: number,prdDes: string): Promise<string> {
    return this.http.post(this.apiUrl + '/products/update_designation/' + id + "/" + prdDes, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

    updateSp(id: number,sp: number): Promise<string> {
    return this.http.post(this.apiUrl + '/products/update_salesprice/' + id + "/" + sp, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class ProductService



