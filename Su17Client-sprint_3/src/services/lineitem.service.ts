import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { LineItem } from '../model/lineitem';

@Injectable()
export class LineItemService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getLineItems(bom_id: number): Promise<LineItem[]> {
    console.log(bom_id);
    return this.http.get(this.apiUrl + "/lineitems/" + bom_id)
       .toPromise()
       .then(response => response.json().lineitems as LineItem[])
       .catch(this.handleError);
  }//getLineItems()

  getLineItem(id: number): Promise<LineItem> {
    return this.http.get(this.apiUrl + "/lineitems/lineitem_all/" + id)
        .toPromise()
        .then(response => response.json() as LineItem)
        .catch(this.handleError);
  }//getLineItem()

  newLineItem(bom: number,pid: number,qty: number): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/lineitems/bom_part_quantity/' + bom + "/" + pid + "/" + qty, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deleteLineItem(id: number): Promise<string> {
    console.log(id);
    return this.http.delete(this.apiUrl + '/lineitems/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

   updatePart(itemid: number,partid: number): Promise<string> {
    return this.http.post(this.apiUrl + '/lineitems/update_part/' + itemid + "/" + partid, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  updateQuantity(itemid: number,qty: number): Promise<string> {
    return this.http.post(this.apiUrl + '/lineitems/update_quantity/' + itemid + "/" + qty, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class LineItemService



