import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute, } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

interface Jobseeker {
  id: number | null;
  name: string;
  email: string;
  phone_number: string;
  password?: string;
  address: string;
  designation: string;
  education_bg: string;
  work_experience: string;
  skills: string;
  resume_link: string;
  created_at: Date;
}

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrl: './jobseeker.component.css'
})
export class JobseekerComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  isEditing = false;
  private APIUrl = 'https://localhost:7165/api/JobSeeker/';
   abc : any;
  jobseeker: Jobseeker = {
    id: null,
    name: '',
    email: '',
    phone_number: '',
    password : '',
    address: '',
    designation: '',
    education_bg: '',
    work_experience: '',
    skills: '',
    resume_link: '',
    created_at: new Date()
  };
 
  constructor(private http: HttpClient, private router : Router) {}
 
  ngOnInit(): void {
    this.abc = localStorage.getItem("loginUserEmail")
    this.loadJobSeekerProfile(this.abc)
 
  }
 
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
 
  getDetails(){
      }
 
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.saveProfile();
    }
  }
 

  saveProfile(): void {
    if (this.jobseeker) {
      const encodedEmail = encodeURIComponent(this.jobseeker.email);
      // email = email.substring(1, email.length - 1);
      this.http.post<Jobseeker>(`${this.APIUrl}UpdateJobSeekerByEmail`, this.jobseeker).subscribe(
        data => {
          console.log('Response:', data);  // Log full response
          alert('Profile updated successfully!');
        },
        error => {
          //console.error('Error saving job seeker profile', error);
          alert('Error saving job seeker profile');
        }
      );
    }
  }

  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('authToken');
      this.router.navigate(['/jform']); // Redirect to homepage
    }
  }
 
 
  onDelete(): void {
    if (this.jobseeker) {
    // const url = `${this.APIUrl}DeleteJobseeker?email=${encodeURIComponent(this.jobseeker.email)}`;
    this.http.delete(this.APIUrl + 'DeleteJobseeker/' + this.jobseeker.email).subscribe(
      (response) => {
        alert('Jobseeker deleted successfully!');
        this.router.navigate(['/form']);
      },
      (error) => {
        console.error('Error deleting jobseeker', error);
        alert('Failed to delete jobseeker. Please try again later.');
      }
    );
  }
  }
 
  loadJobSeekerProfile(email?: any): void {
    email = email.substring(1, email.length - 1);
    const url = `${this.APIUrl}GetJobSeekerByEmail?email=${encodeURIComponent(email)}`;
    this.http.get<Jobseeker>(url).subscribe(
      data => {
        this.jobseeker = data;
        console.log(this.jobseeker)
      },
      error => {
        console.error('Error fetching job seeker data', error);
        alert('Failed to load job seeker profile. Please try again later.');
      }
    );
  }
  onSubmit(){
 
  }
}
