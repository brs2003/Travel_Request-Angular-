import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = 
[
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }, 
  { path: 'managers', loadChildren: () => import('./managers/managers.module').then(m => m.ManagersModule) }, 
  { path: 'admins', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: 'login', component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
