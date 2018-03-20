import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Manufacturer } from '../model/manufacturer';

@Injectable()
export class ManufacturerService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getManufacturers(): Promise<Manufacturer[]> {
    return this.http.get(this.apiUrl + "/manufacturers")
       .toPromise()
       .then(response => response.json().manufacturers as Manufacturer[])
       .catch(this.handleError);
  }//getManufacturers()

  getManufacturer(id: number): Promise<Manufacturer> {
    return this.http.get(this.apiUrl + "/manufacturers/mfr_id/" + id)
        .toPromise()
        .then(response => response.json() as Manufacturer)
        .catch(this.handleError);
  }//getManufacturer()

  newManufacturer(name: string): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/manufacturers/mfr_name/' + name, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deleteManufacturer(id: number): Promise<string> {
    return this.http.delete(this.apiUrl + '/manufacturers/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

updateManufacturer(mfr_name: string,mfr_id: number): Promise<string> {
  return this.http.post(this.apiUrl + '/manufacturers/update_name/' + mfr_name + '/' + mfr_id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class ManufacturerService



