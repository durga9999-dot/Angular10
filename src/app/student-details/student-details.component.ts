import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


  public students =[];
  public errMsg;

  constructor(private stdService :StudentService) { }

  ngOnInit() {
    this.stdService. getStudents()
    .subscribe(data => this.students = data,
      error => this.errMsg = error); 
      

  }

}
