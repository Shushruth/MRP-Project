import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Part } from '../model/part';

@Injectable()
export class PartService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getParts(): Promise<Part[]> {
    return this.http.get(this.apiUrl + "/parts")
       .toPromise()
       .then(response => response.json().parts as Part[])
       .catch(this.handleError);
  }//getParts()

  getPart(id: number): Promise<Part> {
    return this.http.get(this.apiUrl + "/parts/" + id)
        .toPromise()
        .then(response => response.json() as Part)
        .catch(this.handleError);
  }//getPart()

  newPart(name: string): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/parts/' + name, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deletePart(id: number): Promise<string> {
    return this.http.delete(this.apiUrl + '/parts/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class PartService



