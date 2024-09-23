import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router , ActivatedRoute} from '@angular/router';


interface Recruiters {
  recruiter_id: number | null;
  company_name: string;
  location: string;
  contact_number: string;
  email: string;
  password?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditing = false;
  private APIUrl = 'https://localhost:7165/api/Recruiters/';
   abc : any;

  recruiter: Recruiters = {
  recruiter_id: null,
  company_name: '',
  location: '',
  contact_number: '',
  email: '',
  password: ''
  };
 
  constructor(private http: HttpClient, private router : Router) {}
 
  ngOnInit(): void {
    this.abc = localStorage.getItem("loginUserEmail")
    this.loadJobSeekerProfile(this.abc)
    
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
    if (this.recruiter) {
      this.http.patch<Recruiters>(this.APIUrl + 'UpdateRecruiters/' + this.recruiter.email, this.recruiter).subscribe(
        data => {
          console.log('Response:', data);  // Log full response
          alert('Profile updated successfully!');
        },
        error => {
          alert('Failed to update profile. Please try again later.');
        }
      );
    }
  }
 
 
  onDelete(): void {
    if (this.recruiter) {
    //const url = `${this.APIUrl}DeleteJobseeker?email=${encodeURIComponent(this.recruiter.email)}`;
    this.http.delete(this.APIUrl + 'DeleteRecruiters/' + this.recruiter.email).subscribe(
      (response) => {
        alert('Jobseeker deleted successfully!');
        this.router.navigate(['/form']);
      },
      // (error) => {
      //   console.error('Error deleting jobseeker', error);
      //   alert('Failed to delete jobseeker. Please try again later.');
      // }
    );
  }
  }
 
  loadJobSeekerProfile(email?: any): void {
    email = email.substring(1, email.length - 1);
    //const url = `${this.APIUrl}GetJobSeekerByEmail?email=${encodeURIComponent(email)}`;
    this.http.get<Recruiters>(this.APIUrl + 'GetRecruitersByEmail/' + this.recruiter.email).subscribe(
      data => {
        this.recruiter = data;
        console.log(this.recruiter)
      },
      // error => {
      //   console.error('Error fetching job seeker data', error);
      //   alert('Failed to load job seeker profile. Please try again later.');
      // }
    );
  }
  onSubmit(){
 
  }
 
  confirmLogout(): void {
    if (confirm("Do you really want to logout?")) {
      localStorage.removeItem('loginadmin');
      this.router.navigate(['/form']); // Redirect to homepage
    }
  }
}
