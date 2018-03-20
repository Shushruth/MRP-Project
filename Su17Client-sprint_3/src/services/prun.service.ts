import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { productionRun } from '../model/prun';

@Injectable()
export class PrunService {
  apiUrl = 'http://localhost:4000';
  constructor(private http: Http) { }

  getPrun(): Promise<productionRun[]> {
    return this.http.get(this.apiUrl + "/productionruns")
       .toPromise()
       .then(response => response.json().productionruns as productionRun[])
       .catch(this.handleError);
  }//getprun()

  getPrunid(id: number): Promise<productionRun> {
    return this.http.get(this.apiUrl + "/productionruns/" + id)
        .toPromise()
        .then(response => response.json() as productionRun)
        .catch(this.handleError);
  }//getprun()

  newPrun(id: number): Promise<string> {
    //return Promise.resolve("OK");
    return this.http.post(this.apiUrl + '/productionruns/new/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  deletePrun(id: number): Promise<string> {
    return this.http.delete(this.apiUrl + '/productionruns/' + id, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

updateProduct(id: number,pid: number): Promise<string> {
    return this.http.post(this.apiUrl + '/productionruns/update_product/' + id + "/" + pid, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }
    
    updateQuantity(id: number,qty: number): Promise<string> {
    return this.http.post(this.apiUrl + '/productionruns/update_quantity/' + id + "/" + qty, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

    updateTargetStart(id: number,sd: string): Promise<string> {
    return this.http.post(this.apiUrl + '/productionruns/update_targetStartDate/' + id + "/" + sd, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

 updateTargetComplete(id: number,cd: string): Promise<string> {
    return this.http.post(this.apiUrl + '/productionruns/update_targetCompleteDate/' + id + "/" + cd, "")
        .toPromise()
        .then(response => response.statusText)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred'+ error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}//class prunService