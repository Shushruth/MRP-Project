import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

let coursesUrl = "http://localhost:3000/api/courses";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(public http: Http) {
    //console.log('ApiService');
  }

  getCourses() {
    return this.http.get(coursesUrl).map((res) => res.json());

    // let params = new URLSearchParams();
    // params.set('format', 'json');
    // params.set('callback', "JSONP_CALLBACK");

    //   return this.jsonp
    //       .get(coursesUrl, { search: params })
    //       .map(response => response.json());

  }//getCourses()

}//class ApiService