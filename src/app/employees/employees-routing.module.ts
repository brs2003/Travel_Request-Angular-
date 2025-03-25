import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeNewrequestComponent } from './employee-newrequest/employee-newrequest.component';
import { EmployeeEditrequestComponent } from './employee-editrequest/employee-editrequest.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'edashboard', component:EmployeeHomeComponent},
  { path: 'newrequest', component:EmployeeNewrequestComponent},
  { path: 'editrequest/:id', component: EmployeeEditrequestComponent },
  { path: 'viewrequest',component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
