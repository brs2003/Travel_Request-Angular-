import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import
import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ManagerlistComponent } from './managerlist/managerlist.component';
import { AdminCancelrequestComponent } from './admin-cancelrequest/admin-cancelrequest.component';
import { FormsModule } from '@angular/forms';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddmanagerComponent } from './admin-addmanager/admin-addmanager.component';


@NgModule({
  declarations: [
    AdminsComponent,
    AdminHomeComponent,
    EmployeelistComponent,
    ManagerlistComponent,
    AdminCancelrequestComponent,
    AdminAddemployeeComponent,
    AdminAddmanagerComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminsModule { }
