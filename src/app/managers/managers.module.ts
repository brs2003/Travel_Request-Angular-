import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { SpecificEmployeeFormComponent} from './manager-specificemployeeform/manager-specificemployeeform.component';


@NgModule({
  declarations: [
    ManagersComponent,
    ManagerHomeComponent,
    SpecificEmployeeFormComponent
    
  ],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class ManagersModule { }
