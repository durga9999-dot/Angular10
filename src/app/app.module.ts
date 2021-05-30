import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { StudentDetailsComponent } from './student-details/student-details.component';

import { StudentService }from './student.service';
import { HttpClientModule }from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'
import { AdminAccessGuard } from './admin-access.guard';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent, 
    StudentDetailsComponent,
    myRoutings,
    PageNotFoundComponent,
    AdminHomeComponent
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
