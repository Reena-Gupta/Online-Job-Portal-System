import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminjp',
  templateUrl: './adminjp.component.html',
  styleUrl: './adminjp.component.css'
})
export class AdminjpComponent {
  Username: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private auth : AuthService) {}
  ngOnInit() {
    this.Username = localStorage.getItem('loginadmin');
    console.log(this.Username);
    console.log('Username retrieved in adminDashboard:', this.Username);
    this.getAlljp();
  }  
  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('authToken');
      this.auth.logout();
      this.router.navigate(['/']); // Redirect to homepage
    }
  }
  jobpostings: any = [];
  getAlljp(): void {
    this.http.get('https://localhost:7165/api/JobPostings/Agetalljobpostings').subscribe(data => {
      this.jobpostings = data;
      console.log(data);
    });
}}
