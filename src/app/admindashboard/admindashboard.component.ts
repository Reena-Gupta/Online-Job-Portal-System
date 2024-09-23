import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  Username: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.Username = localStorage.getItem('loginadmin');
    console.log(this.Username);
    console.log('Username retrieved in adminDashboard:', this.Username);
  }  

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('loginadmin');
      this.router.navigate(['/']); // Redirect to homepage
    }
  }
}
