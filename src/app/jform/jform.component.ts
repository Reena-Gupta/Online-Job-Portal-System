import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-jform',
  templateUrl: './jform.component.html',
  styleUrl: './jform.component.css'
})
export class JformComponent {
  abc: Boolean = false;
  APIUrl ='https://localhost:7165/api/JobSeeker/';
 
 
  jobseeker: any = {
    id: null,
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    designation: '',
    educationBg: '',
    workExperience: '',
    skills: '',
    resumeLink: '',
    createdAt: new Date()
  };
 
  constructor(private router: Router, private http : HttpClient) { }
  signUpUser : any[] = [];
 
  signUpObj : any = {
    username : '',
    email : '',
    password : '',
    role: ''
  }
 
  loginObj : any = {
    email : '',
    password : ''
  }
 
  onSignUp(){
    this.signUpUser.push(this.signUpObj);
    localStorage.setItem('sigUpUser', JSON.stringify(this.signUpUser));
    this.http.post(this.APIUrl+'RegisterJobseekers', this.signUpObj).subscribe(data  => {
      this.signUpObj = null;
      alert("Jobseeker added successfully!");
      var abc = data;
     
  });
 
  }
 
 
ngOnInit(): void{
  const localData = localStorage.getItem('signUpUser');
  if(localData != null){
    this.signUpUser = JSON.parse(localData);
  }
}
 
loginResponse : any = {
message : "",
jobseeker :{
 
}
}
 
onLogin(): void {
  localStorage.setItem('loginUserEmail', JSON.stringify(this.loginObj.email));
  this.http.post<any>(`${this.APIUrl}Login`, this.loginObj).subscribe(
    data => {
      if (data.message === "Login successful") {
        alert('User logged in successfully');
        this.router.navigate(['/jobseeker'], { queryParams: { email: this.loginObj.email } });
        return;  // Exit the function after successful login
      }
     
    },
    error => {
      console.error('Error during login:', error);
      alert('Invalid credentials');
    }
  );
}
 
 
}
