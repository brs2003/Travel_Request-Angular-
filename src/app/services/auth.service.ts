import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/travel/'; // Base API URL

  constructor(private http: HttpClient) {}

  // Function to login based on role
  login(username: string, password: string, role: string): Observable<any> {
    let apiUrl = '';

    if (role === 'employee') {
      apiUrl = `${this.baseUrl}employee_login/`;
      
    } else if (role === 'admin') {
      apiUrl = `${this.baseUrl}admin_login/`;
      console.log()
    } else if (role === 'manager') {
      apiUrl = `${this.baseUrl}manager_login/`;
    }
    console.log(apiUrl)
    return this.http.post<any>(apiUrl, { username, password });
  }

  // Function to check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists
  }

  getToken():string | null
  {
    return localStorage.getItem('token');
  }


  // Function to logout
  logout(): void {
    localStorage.removeItem('token');
  }
}
