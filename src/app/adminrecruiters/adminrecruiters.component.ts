import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminrecruiters',
  templateUrl: './adminrecruiters.component.html',
  styleUrl: './adminrecruiters.component.css'
})
export class AdminrecruitersComponent implements OnInit{
  Username: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private auth : AuthService) {}
  ngOnInit() {
    this.Username = localStorage.getItem('loginadmin');
    console.log(this.Username);
    console.log('Username retrieved in adminDashboard:', this.Username);
    this.getAllRecruiters();
  }  

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('authToken');
      this.auth.logout();
      this.router.navigate(['/']); // Redirect to homepage
    }
  }

  recruiters: any = [];
  getAllRecruiters(): void {
    this.http.get('https://localhost:7165/api/Recruiters/Agetallrecruiter').subscribe(data => {
      this.recruiters = data;
      console.log(data);
    });
  }

  deleteRecruiter(email: string): void {
    if (confirm(`Are you sure you want to delete recruiter with email: ${email}?`)) {
      this.http.delete('https://localhost:7165/api/Recruiters/DeleteRecruiters/'+ email)
        .subscribe(
          response => {
            console.log(`Recruiter with email ${email} deleted successfully.`);
            // After successful deletion, reload the recruiter list
            this.getAllRecruiters();
          },
          error => {
            console.error(`An error occurred while deleting recruiter: ${error.message}`);
          }
        );
    }
  }

}
