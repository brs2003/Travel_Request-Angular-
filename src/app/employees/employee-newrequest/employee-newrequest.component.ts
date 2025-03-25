import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelRequestService } from '../services/travel-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-newrequest',
  templateUrl: './employee-newrequest.component.html',
  styleUrls: ['./employee-newrequest.component.css']
})
export class EmployeeNewrequestComponent implements OnInit {
  travelRequestForm!: FormGroup; // Form Group
  managerName: string = '';
  manager_status: string = ''; // Add this variable
 // Manager
  constructor(private fb: FormBuilder,private travelrequest: TravelRequestService,private router: Router) {
    

  }

  ngOnInit(): void {
    // Initialize the Form
    this.travelRequestForm = this.fb.group({
      purpose: ['', Validators.required],
      from_loc: ['', Validators.required],
      to_loc: ['', Validators.required],
      travel_mode: ['', Validators.required],
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      additional_request: [''],
      lodging: ['', Validators.required],
      lodgingLocation: [''],
    });

    this.travelrequest.getData().subscribe({
      next:(data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].manager) {
          this.managerName = `${data[0].manager.first_name} ${data[0].manager.last_name}`;
          this.manager_status = data[0].manager.status;
        }
        else {
          console.warn('No manager found');
        }
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
      complete: () => {
        console.log('Data fetching completed');
    } 
  });
}
onSubmit(): void {
  if (this.travelRequestForm.valid) {
    console.log('Submitting Form:', this.travelRequestForm.value);
    
    this.travelrequest.createTravelRequest(this.travelRequestForm.value).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Travel request submitted successfully!');
        // Navigate to eDashboard using Router
        this.router.navigate(['/employees/edashboard']);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to submit the request.');
      }
    });
  }
}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}

}
