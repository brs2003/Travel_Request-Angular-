import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelRequestService } from '../services/travel-request.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent {
  requestdata: any = [];

  constructor(
    private router: Router,
    private travelRequestService: TravelRequestService // ✅ Corrected Service Name
  ) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.travelRequestService.getData().subscribe({
      next: (response) => {
        this.requestdata = response;
        console.log(response)
      },
      error: (err: any) => { // 
        console.log(err);
      }
    });
  }

  
  // Delete Request Function
  deleteRequest(request: any) {
    if (!request || !request.id) {
      console.error("Invalid request: ID is undefined or missing.");
      return; // Prevents faulty API calls
    }

    if (confirm("Are you sure you want to delete this request?")) {
      console.log("Deleting request with ID:", request.id);

      this.travelRequestService.deleteTravelRequest(request.id).subscribe({
        next: () => {
          console.log("Request deleted successfully:", request.id);
          this.requestdata = this.requestdata.filter((r: any) => r.id !== request.id);
        },
        error: (err) => {
          console.error("Error deleting request:", err);
        }
      });
    }
  }

  viewRequest(request: any) {
    this.router.navigate(['/employees/viewrequest'], { state: { requestDetails: request } });
  }
  
}
