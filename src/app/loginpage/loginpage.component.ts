import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username = '';
  password = '';
  selectedRole = 'employee'; // Default role
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Function to set role when button is clicked
  selectRole(role: string) {
    this.selectedRole = role;
  }

  // Function to handle login
  onLogin() {
    this.authService.login(this.username, this.password, this.selectedRole).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          localStorage.setItem('token', response.token);

          // Redirect to respective dashboard
          if (this.selectedRole === 'employee') {
            this.router.navigate(['/employees/edashboard']);
          } else if (this.selectedRole === 'admin') {
            this.router.navigate(['/admins/adashboard']);
          } else if (this.selectedRole === 'manager') {
            this.router.navigate(['/managers/mdashboard']);
          }
        } else {
          this.errorMessage = 'Invalid credentials';
        }
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your username and password.';
      }
    });
  }

}
