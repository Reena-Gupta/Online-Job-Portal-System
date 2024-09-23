import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-adminjs',
  templateUrl: './adminjs.component.html',
  styleUrl: './adminjs.component.css'
})
export class AdminjsComponent {
  Username: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private auth : AuthService) {}
  ngOnInit() {
    this.Username = localStorage.getItem('loginadmin');
    console.log(this.Username);
    console.log('Username retrieved in adminDashboard:', this.Username);
    this.getAlljs();
  }  
  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('authToken');
      this.auth.logout();
      this.router.navigate(['/']); // Redirect to homepage
    }
  }
  
  jobseekers: any = [];
  getAlljs(): void {
    this.http.get('https://localhost:7165/api/JobSeeker/Agetalljs').subscribe(data => {
      this.jobseekers = data;
      console.log(data);
    });
  }

  deletejs(email: string): void {
    if (confirm(`Are you sure you want to delete jobseeker with email: ${email}?`)) {
      //console.log(`https://localhost:7165/api/JobSeeker/DeleteJobseeker?email=${email}`)
      this.http.delete('https://localhost:7165/api/JobSeeker/DeleteJobseeker/' + email)
        .subscribe(
          response => {
            console.log(`Jobseeker with email ${email} deleted successfully.`);
            // After successful deletion, reload the recruiter list
            this.getAlljs();
          },
          error => {
            console.error(`An error occurred while deleting jobseeker: ${error.message}`);
          }
        );
    }
  }
}
