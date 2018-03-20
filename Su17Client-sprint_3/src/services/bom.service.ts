import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BillofMaterials } from '../model/billofmaterials';

@Injectable()
export class BOMService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getBOM(): Promise<BillofMaterials[]> {
    return this.http.get(this.apiUrl + "/billofmaterials")
       .toPromise()
       .then(response => response.json().billofmaterials as BillofMaterials[])
       .catch(this.handleError);
  }//getBOM()

  getBOMDetails(bom_id: number): Promise<BillofMaterials> {
    return this.http.get(this.apiUrl + "/billofmaterials/bom_id_all/" + bom_id)
        .toPromise()
        .then(response => response.json() as BillofMaterials)
        .catch(this.handleError);
  }//getBOMDetails()

  newBOM(product: number,versionID: number): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/billofmaterials/insert_product/' + product + "/" + versionID, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deleteBOM(bom_id: number): Promise<string> {
    return this.http.delete(this.apiUrl + '/billofmaterials/' + bom_id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  updateProduct(bom_id: number,prd: number): Promise<string> {
    return this.http.post(this.apiUrl + '/billofmaterials/update_product/' + bom_id + "/" + prd, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  updateVersion(bom_id: number,vID: number): Promise<string> {
    return this.http.post(this.apiUrl + '/billofmaterials/update_version_id/' + bom_id + "/" + vID, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class BOMService



