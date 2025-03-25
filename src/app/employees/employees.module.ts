import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeNewrequestComponent } from './employee-newrequest/employee-newrequest.component';
import { EmployeeEditrequestComponent } from './employee-editrequest/employee-editrequest.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeHomeComponent,
    EmployeeNewrequestComponent,
    EmployeeEditrequestComponent,
    ViewComponent
    
    
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeesModule { }
