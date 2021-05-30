import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
   

  employee =[

  {
    'empName':'ashok',
    'spouse':'kranthi',
    'children':"sri"
  },
  {
    'empName':'Rajesh',
    'spouse':'sharma',
    'children':"satya"
  },
  {
    'empName':'jagan',
    'spouse':'Mohan',
    'children':"sankar"
  },
  {
    'empName':'jagadesh',
    'spouse':'Mohani',
    'children':"-"
  },
 ]


  

}
