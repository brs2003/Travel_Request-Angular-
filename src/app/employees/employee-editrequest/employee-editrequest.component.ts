import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelRequestService } from '../services/travel-request.service';

@Component({
  selector: 'app-employee-editrequest',
  templateUrl: './employee-editrequest.component.html',
  styleUrl: './employee-editrequest.component.css'
})
export class EmployeeEditrequestComponent implements OnInit {
  editForm!: FormGroup;
  requestId!: number;
  managerNote='';
  managerName = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: TravelRequestService
  ) {}

  ngOnInit(): void {
    this.requestId = Number(this.route.snapshot.paramMap.get('id'));

    this.editForm = this.fb.group({
      purpose: ['', Validators.required],
      from_loc: ['', Validators.required],
      to_loc: ['', Validators.required],
      travel_mode: ['', Validators.required],
      from_date: ['', Validators.required],
      to_date: ['', Validators.required],
      lodging_required: ['', Validators.required],
      additional_request: [''],
      manager_note: [{ value: '', disabled: true }] // Read-only field
    });

    this.loadTravelRequest();
  }
  
  loadTravelRequest(): void {
    this.employeeService.getData().subscribe(
      (requests) => {
        const request = requests.find((req: any) => req.id === this.requestId);
        if (request) {
          this.editForm.patchValue(request);
          this.managerNote = request.manager_note;
          this.managerName = `${request.manager.first_name} ${request.manager.last_name}`;
        }
      },
      (error) => {
        console.error('Error fetching request:', error);
      }
    );
  }

  submitEditRequest(): void {
    if (this.editForm.valid) {
      this.employeeService.editTravelRequest(this.requestId, this.editForm.value).subscribe(
        () => {
          alert('Travel request updated successfully');
          this.router.navigate(['/employees/edashboard/']);
        },
        (error) => {
          console.error('Error updating request:', error);
        }
      );
    }
  }
  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}