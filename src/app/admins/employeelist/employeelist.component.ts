import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employees: any[] = []; // Store fetched employees

  constructor(private adminService: AdminService,private router: Router ) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.adminService.getEmployees().subscribe(
      (response) => {
        this.employees = response.employees; // Assign response data
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}


