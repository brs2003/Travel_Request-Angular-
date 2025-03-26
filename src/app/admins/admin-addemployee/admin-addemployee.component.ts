import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-addemployee',
  templateUrl: './admin-addemployee.component.html',
  styleUrl: './admin-addemployee.component.css'
})
export class AdminAddemployeeComponent {
  employeeForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private adminService: AdminService,private router: Router) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      manager_id: ['', Validators.required],
      date_in: ['', Validators.required],
      employee_active_status: ['Active', Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.adminService.addEmployee(this.employeeForm.value).subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.employeeForm.reset();
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'An error occurred!';
        }
      });
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}


