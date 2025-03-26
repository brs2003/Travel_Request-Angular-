import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

  requests: any[] = [];
  filteredRequests: any[] = [];
  requestStatus = [
    { title: 'Pending', color: '#FF8C00', count: 0 },
    { title: 'Approved', color: '#008000', count: 0 },
    { title: 'Declined', color: '#DC143C', count: 0 },
    { title: 'OnProgress', color: '#4682B4', count: 0 }
  ];

    constructor(
      private router: Router,
      private adminService: AdminService
    ) { }

    ngOnInit(): void {
      this.loadRequests();
    }

    loadRequests(): void {
      this.adminService.getAllRequests().subscribe(
        (data) => {
          this.requests = data;
          console.log('Travel Requests:', data); 

          this.filteredRequests = [...this.requests];
  
          console.log(' Travel Requests:', this.requests); 
          this.updateStatusCounts(this.requests);
        },
        (error) => {
          console.error('Error fetching requests:', error);
        }
      );
    }
    updateStatusCounts(requests: any[]) {
      this.requestStatus.forEach(status => status.count = 0); // Reset counts
  
      requests.forEach(request => {
        const statusIndex = this.requestStatus.findIndex(status => status.title.toLowerCase() === request.manager_status.toLowerCase());
        if (statusIndex !== -1) {
          this.requestStatus[statusIndex].count++;
        }
      });
    }

    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }

    adduser(){
      this.router.navigate(['admins/adduser']);
    }

  
}




