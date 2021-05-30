import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

   public courseId ;
  _router: any;

  constructor(private _activatedRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    // let cId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    // this.courseId = cId;
    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id =parseInt(params.get('id'));
      this.courseId =id;
    });
  }
  toPrevious(){
    let previousId =this.courseId - 1;
    this._router.navigate(['/course',previousId]);
  }

  toNext(){
    let nextId =this.courseId + 1;
    this._router.navigate(['/course',nextId]);
  }
  goBack(){
    let selectedId = this.courseId ? this.courseId : null;
    // this._route.navigate(['/course',{id:selectedId}]);
    this._router.navigate(['../',{id:selectedId}],{relativeTo: this._activatedRoute});
  }
  showDuration(){
    this._router.navigate(['duration'],{relativeTo: this._activatedRoute});
  }
  showFee(){
    this._router.navigate(['fee'],{relativeTo: this._activatedRoute})


  }
  

}
