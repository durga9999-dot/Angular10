import { CommonModule } from '@angular/common';
import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';

const routes: Routes = [

  {path:'', redirectTo: '/student', pathMatch: 'full'},
  {path: 'student', component: StudentListComponent},
  {path:'admin',
      component:AdminHomeComponent,
      canActivate:[AdminAccessGuard]
    },
  {path: 'course-list', component: CourseListComponent},
  {path:'course-list/:id', 
  component:CourseDetailsComponent,
  children: [
    {path: 'duration', component:CourseDurationComponent},
    {path:'fee',component:CourseFeeComponent},
  
  ]},

  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },

  { path: "**", component: PageNotFoundComponent}
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings =[
                            StudentListComponent,
                            CourseListComponent,
                            CourseDetailsComponent,
                            CourseDurationComponent,
                            CourseFeeComponent


];
