import { Component } from '@angular/core';
import { Course } from 'projects/models/src/lib/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises';
  courses: Course[]= [{
    name: "name1",
    code: "code1",
    ects: 1
  },
  {
    name: "name2",
    code: "code2",
    ects: 2
  },
  {
    name: "name3",
    code: "code3",
    ects: 3
  }]

}
