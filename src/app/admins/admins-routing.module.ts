import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ManagerlistComponent } from './managerlist/managerlist.component';
import { AdminCancelrequestComponent } from './admin-cancelrequest/admin-cancelrequest.component';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddmanagerComponent } from './admin-addmanager/admin-addmanager.component';


const routes: Routes = [
  { path: '', component: AdminsComponent },
  { path: 'adashboard', component:AdminHomeComponent},
  { path: 'ademployeelist', component:EmployeelistComponent},
  { path: 'admanagerlist', component:ManagerlistComponent},
  { path: 'cancelrequest/:id', component:AdminCancelrequestComponent},
  { path: 'adminaddemployee', component:AdminAddemployeeComponent},
  { path: 'adminaddmanager', component:AdminAddmanagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
