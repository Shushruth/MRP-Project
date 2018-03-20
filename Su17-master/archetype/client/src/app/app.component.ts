import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './apiservice';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: `
    <h1>Courses</h1>
    <ul>
      <li *ngFor="let course of courses.courses">
        {{course.dept_prefix}}  {{course.course_num}}, {{course.course_name}}
      </li>
    </ul>
    `,
  providers: [ApiService]
})
export class AppComponent implements OnInit{ 
  courses = {};
  //courses: Observable<any>;

  constructor(public apiService: ApiService) {  
    console.log("constructor");
  }

  ngOnInit() {
    this.apiService.getCourses().subscribe(courses => this.courses = courses);
    //this.courses = this.apiService.getCourses();
    console.log("ngOnInit" + JSON.stringify(this.courses, null, 2));
  }

}//class AppComponent
