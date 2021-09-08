import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'projects/models/src/lib/course';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: Course = {} as Course
  constructor() { }

  ngOnInit(): void {
  }

}
