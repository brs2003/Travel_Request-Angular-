import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-addmanager',
  templateUrl: './admin-addmanager.component.html',
  styleUrls: ['./admin-addmanager.component.css']
})
export class AdminAddmanagerComponent implements OnInit {
  managerForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.managerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date_of_joining: ['', Validators.required],
      manager_active_status: ['Active']
    });
  }

  addManager() {
    if (this.managerForm.invalid) {
      this.errorMessage = "Please fill all required fields.";
      return;
    }

    this.adminService.addManager(this.managerForm.value).subscribe({
      next: (response) => {
        this.successMessage = "Manager added successfully!";
        this.managerForm.reset();
        setTimeout(() => this.router.navigate(['/admins']), 2000); // Redirect after success
      },
      error: (error) => {
        this.errorMessage = error.error.message || "Something went wrong!";
      }
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
