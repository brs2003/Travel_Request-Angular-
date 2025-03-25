import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/travel/';

  constructor(private http: HttpClient,private authService:AuthService) { }

    options = {
      headers: new HttpHeaders({
        authorization: `Token ${this.authService.getToken()}`
      })
    };

  getAllRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}admin_dashboard/`, this.options);
}

closeTravelRequest(ticketId: number, adminNote: string): Observable<any> {
  const payload = {
    ticket_id: ticketId,
    admin_note: adminNote
  };
  return this.http.post(`${this.apiUrl}close_ticket/`, payload, this.options);
}

addEmployee(employeeData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}add_employee/`, employeeData, this.options);
}

addManager(managerData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}add_manager/`, managerData, this.options);
}

getEmployees(): Observable<any> {
  return this.http.get(`${this.apiUrl}list_employees/`, this.options);
}

getManagers(): Observable<any> {
  return this.http.get(`${this.apiUrl}list_managers/`, this.options);
}
}
