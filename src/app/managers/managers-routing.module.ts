import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagersComponent } from './managers.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { SpecificEmployeeFormComponent } from './manager-specificemployeeform/manager-specificemployeeform.component';

const routes: Routes = [
  { path: '', component: ManagersComponent },
  { path: 'mdashboard', component:ManagerHomeComponent},
  { path: 'specificemployeeform/:id', component:SpecificEmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagersRoutingModule { }
