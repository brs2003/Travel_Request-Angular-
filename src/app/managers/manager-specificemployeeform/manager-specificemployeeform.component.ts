import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerDashboardService } from '../services/manager-dashboard.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-specificemployeeform',
  templateUrl: './manager-specificemployeeform.component.html',
  styleUrls: ['./manager-specificemployeeform.component.css'] // Fixed typo
})
export class SpecificEmployeeFormComponent implements OnInit {
  request: any; // Store request details
  feedback: string = ''; // Store manager feedback
  managerId: number = 1; // Replace with actual manager ID (should be dynamically assigned)
  requestData: any; // Add this property
  managerNote: string = ''; // Add this property
  
  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerDashboardService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.managerService.getTravelRequests().subscribe(
      (data: any) => {
        console.log('API Response:', data); // ✅ Debugging Step 1
  
        if (!Array.isArray(data)) {
          console.error('Error: API did not return an array', data);
          return;
        }
  
        const requestId = Number(this.route.snapshot.paramMap.get('id')); // Ensure it matches the route definition
        this.requestData = data.find((req: any) => req.req_id === requestId); // Assign to requestData
  
        if (!this.requestData) {
          console.error(`Request with the given ID was not found`);
        }
      },
      (error) => {
        console.error('Error fetching travel requests:', error);
      }
    );
  }
  

  
  updateStatus(status: string): void {
    if (!this.requestData) {
      alert('Request data not found.');
      return;
    }

    const updatedStatus = status === 'Declined' ? 'Declined' : status === 'On Progress' ? 'OnProgress' : status==='Approved'?'Approved' :status;

    this.managerService.updateManagerStatus(
      this.requestData.req_id, // Ensure correct request ID
      this.managerId,
      updatedStatus,
      this.managerNote
    ).subscribe(
      (response) => {
        alert(`Request updated to ${updatedStatus} successfully!`);
        console.log('Update Response:', response);
        this.router.navigate(['managers/mdashboard']);
      },
      (error) => {
        alert('Error updating status. Please try again.');
        console.error(error);
      }
    );
  }
}
