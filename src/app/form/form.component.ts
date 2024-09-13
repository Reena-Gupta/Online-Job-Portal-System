import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    @Output() emailSelected = new EventEmitter<string>();
 
  jp: Boolean = false;
  private APIUrl ='https://localhost:7165/api/Recruiters/';
  
  constructor(private http: HttpClient, private router: Router) {}
  signUpUser : any[] = [];
 
  signUpObj : any = {
    userName : '',
    email : '',
    password : '',
    role: ''
  }
 
  
  // navigateToDashboard(): void {
  //   // Assuming you have the email in `signUpObj.email`
  //   const email = this.signUpObj.email;
  //   this.router.navigate(['/recruiterdashboard'], { queryParams: { email } });
  // }
 
  loginObj : any = {
    email : '',
    password : ''
  }

  recruiters : any = {
    email : '',
    password : ''
  }
 
 
  onSignUp(){
    this.signUpUser.push(this.signUpObj);
    localStorage.setItem('signUpUser', JSON.stringify(this.signUpUser));
    this.http.post(this.APIUrl+'RegisterRecruiters', this.signUpObj).subscribe(data  => {
      this.signUpObj = null;
      alert("recruiters added successfully!");
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
recruiters :{
 
}
}
 
onLogin(): void {
  // Assuming signUpUser is defined and contains users data
 // const isUserExist = this.signUpUser.find(m => m.username === this.loginObj.username && m.password === this.loginObj.password);
  localStorage.setItem('loginUserEmail', this.loginObj.email);

  //if (isUserExist) {
    this.http.post(this.APIUrl + 'Login', this.loginObj).subscribe(data => {
      this.loginResponse = data;
      if (this.loginResponse.message === "Login successful") {
        alert('User logged in successfully');
       
        this.router.navigate(['/recruiterdashboard']), { queryParams: { email: this.loginObj.email } };
     
      } else {
        alert("Invalid credentials");
      }
    });
  // } else {
  //   alert("User does not exist");
  // }
}
 

}
