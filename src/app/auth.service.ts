import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7165/api/Admin/'; // Your backend API URL

  constructor(private http: HttpClient, private router: Router) { }

  // Admin login method
  login(loginRequest: any) {
    return this.http.get<any>(this.apiUrl + 'GetAdminbyusername/' + loginRequest.Username, loginRequest);
  }

  // Store JWT token in local storage
  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Retrieve the token
  getToken() {
    return localStorage.getItem('authToken');
  }

  // Check if admin is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Return true if token exists
  }

  // Logout method
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/adminlogin']);
  }
}
