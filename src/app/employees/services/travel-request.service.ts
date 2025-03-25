import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {
  private apiUrl = 'http://127.0.0.1:8000/travel/';

  constructor(private http: HttpClient, private authService:AuthService) {}

  options = {
    headers: new HttpHeaders({
      authorization: `Token ${this.authService.getToken()}`
    })
  };

  createTravelRequest(travelRequestData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}new_travel_request/`, travelRequestData, this.options);
  }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}employee_dashboard/`, this.options);
  }

  // Delete Travel Request from Backend
  deleteTravelRequest(requestId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete_travel_request/${requestId}/`,this.options);
  }

  getTravelRequestById(requestId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}employee_dashboard/${requestId}/`, this.options);
  }

  editTravelRequest(requestId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}edit_travel_request/${requestId}/`, updatedData, this.options);
  }

  

}

