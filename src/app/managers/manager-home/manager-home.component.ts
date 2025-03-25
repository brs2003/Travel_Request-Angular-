import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerDashboardService } from '../services/manager-dashboard.service';


@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrl: './manager-home.component.css'
})
export class ManagerHomeComponent implements OnInit{

  searchForm: FormGroup;
  requests: any[] = [];
  filteredRequests: any[] = [];

  requestStatus = [
    { title: 'Pending', color: '#FF8C00', count: 0 },
    { title: 'Approved', color: '#008000', count: 0 },
    { title: 'Declined', color: '#DC143C', count: 0 },
    { title: 'OnProgress', color: '#4682B4', count: 0 }
  ];

  constructor(
    private fb: FormBuilder,
    private managerService: ManagerDashboardService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      searchName: [''],
      searchDateRange: [''],
      filterCriteria: [''],
      sortOrder: ['asc']
    });
  }

  ngOnInit(): void {
    this.fetchRequests();
    this.applyFilters();

    // Listen for form changes
    this.searchForm.valueChanges.subscribe(() => {
      this.applyFilters();
      this.getRequestStatus();
    });
  }

  fetchRequests(): void {
    this.managerService.getTravelRequests().subscribe(
      (data: any) => {
        console.log('API Response:', data); // ✅ Debugging Step 1
  
        if (!Array.isArray(data)) {
          console.error('Error: API did not return an array', data);
          return;
        }
  
        this.requests = data;
        this.filteredRequests = [...this.requests];
  
        console.log('Requests:', this.requests); // ✅ Debugging Step 2
        this.updateStatusCounts(this.requests);
      },
      error => console.error('Error fetching travel requests', error)
    );
  }

  navigateToEmployeeDetails(requestId: number) {
    console.log("Navigating to request ID:", requestId);
    this.router.navigate([`/manager/specificemployeeform`, requestId]);
  }
  

  applyFilters(): void {
    let { searchName, searchDateRange, filterCriteria, sortOrder } = this.searchForm.value;
  
    // Convert date input to Date objects for comparison
    let fromDate: Date | null = null, toDate: Date | null = null;
    if (searchDateRange) {
      const dateParts = searchDateRange.split(' - '); // Assuming input format is "YYYY-MM-DD - YYYY-MM-DD"
      fromDate = new Date(dateParts[0]?.trim());
      toDate = new Date(dateParts[1]?.trim());
    }
  
    this.filteredRequests = this.requests.filter(request => {
      // Ensure manager_status exists and normalize case
      const reqStatus = request.manager_status ? request.manager_status.toLowerCase() : '';
  
      // Name filtering
      const matchesName = searchName
        ? request.employee?.first_name.toLowerCase().includes(searchName.toLowerCase())
        : true;
  
      // Status filtering
      const matchesStatus = filterCriteria
      ? reqStatus === filterCriteria.toLowerCase()
      : true;
  
      // Date range filtering
      const matchesDate = (fromDate && toDate) 
        ? (new Date(request.from_date) >= fromDate && new Date(request.to_date) <= toDate)
        : true;
  
      return matchesName && matchesStatus && matchesDate;
    });
  
    // Sorting logic
    if (sortOrder) {
      this.filteredRequests.sort((a, b) => {
        return sortOrder === 'asc' 
          ? new Date(a.from_date).getTime() - new Date(b.from_date).getTime() 
          : new Date(b.from_date).getTime() - new Date(a.from_date).getTime();
      });
    }
  
    console.log('Filtered Requests:', this.filteredRequests);
  }
  
  
  
  

  getStatusClass(status: string | undefined | null): string {
    if (!status) {
      return 'btn-secondary'; // Default class if status is missing
    }
  
    switch (status.toLowerCase()) {
      case 'pending': return 'btn-warning';
      case 'approved': return 'btn-success';
      case 'rejected': return 'btn-danger';
      case 'completed': return 'btn-primary';
      default: return 'btn-secondary';
    }
  }
  


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getRequestStatus() {
    this.managerService.getTravelRequests().subscribe(
      (data: any[]) => {
        this.updateStatusCounts(data);
      },
      (error) => {
        console.error('Error fetching request data:', error);
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
}