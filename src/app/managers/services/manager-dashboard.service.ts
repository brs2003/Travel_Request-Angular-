import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerDashboardService {
  logout() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://127.0.0.1:8000/travel/';
  constructor(private http: HttpClient, private authService: AuthService,private router: Router) {}
  
  
  options = {
    headers: new HttpHeaders({
      authorization: `Token ${this.authService.getToken()}`
    })
  };

  getTravelRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}manager_dashboard/`, this.options);
  }

  getFilteredTravelRequests(searchName: string, dateRange: string, filterCriteria: string, sortField: string, sortOrder: string): Observable<any[]> {
    const params: any = {};

    // Handle name search
    if (searchName) {
        const names = searchName.split(" ");
        if (names.length > 1) {
            params.first_name = names[0];
            params.last_name = names[1];
        } else {
            params.first_name = names[0];
        }
    }

    // Handle date range (YYYY-MM-DD - YYYY-MM-DD)
    if (dateRange) {
        const dates = dateRange.split(" - ");
        if (dates.length === 2) {
            params.start_date = dates[0];
            params.end_date = dates[1];
        }
    }

    // Handle additional filters
    if (filterCriteria) params.manager_status = filterCriteria;

    // Sorting
    if (sortField) params.sort_field = sortField;
    if (sortOrder) params.sort_order = sortOrder;

    return this.http.get<any[]>(`${this.apiUrl}filter_sort_search/`, { 
        headers: new HttpHeaders({
            Authorization: `Token ${this.authService.getToken()}`,
            'Content-Type': 'application/json'
        }), 
        params 
    });
}

  
  
  
  

  

  updateManagerStatus(ticketId: number, managerId: number, status: string, feedback: string): Observable<any> {
    const requestBody = {
      ticket_id: ticketId,
      manager_id: managerId,
      manager_status: status,
      manager_note: feedback
    };

    return this.http.put(`${this.apiUrl}manager_status_update/`, requestBody, this.options);
    
  }


}