import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrl: './managerlist.component.css'
})
export class ManagerlistComponent implements OnInit{
  managers: any[] = [];

  constructor(private adminService: AdminService,private router: Router) {}

  ngOnInit(): void {
    this.fetchManagers();
  }

  fetchManagers(): void {
    this.adminService.getManagers().subscribe(
      (response) => {
        this.managers = response.managers;
      },
      (error) => {
        console.error("Error fetching managers:", error);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}


