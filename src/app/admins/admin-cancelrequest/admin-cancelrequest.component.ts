import { Component,Input,OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-cancelrequest',
  templateUrl: './admin-cancelrequest.component.html',
  styleUrl: './admin-cancelrequest.component.css'
})
export class AdminCancelrequestComponent implements OnInit {
  @Input() requestData: any;  // Receive the selected request details
  adminNote = ''; // Admin note input

  constructor(private adminService: AdminService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.adminService.getAllRequests().subscribe(
      (data: any) => {
        console.log('API Response:', data); // Debugging Step 1
  
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
  
  updateAdminNote(event: Event): void {
    event.preventDefault();
    alert('Admin note updated: ' + this.adminNote);
    
  }

  closeRequest(): void {
    if (!this.adminNote.trim()) {
      alert('Admin note is required to close the request.');
      return;
    }

    const ticketId = this.requestData?.req_id;
    if (!ticketId) {
      alert('Invalid request ID');
      return;
    }

    this.adminService.closeTravelRequest(ticketId, this.adminNote).subscribe({
      next: (response) => {
        alert(response.message);
        console.log('API Response:', response); 
        this.router.navigate(['/admins/adashboard']);
      },
      error: (error) => {
        console.error('Error closing request:', error);
        alert('Failed to close the request');
      }
    });
  }
}