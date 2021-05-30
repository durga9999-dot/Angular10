import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  public course = [
    {"id" : 1, "name": "Angular"},
    {"id" : 2, "name": "ReactJs"},
    {"id" : 3, "name": "Vue"},
    {"id" : 4, "name": "Bootstrap"}
  ];

  public selectedId;


  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id =parseInt(params.get('id'));
      this.selectedId =id;
    });
  }
onSelect(x){
  //  this._router.navigate(['/course',x.id])

this._router.navigate([x.id],{relativeTo:this._activatedRoute});

}

isSelected(x){
  return x.id=== this.selectedId;



}
}
