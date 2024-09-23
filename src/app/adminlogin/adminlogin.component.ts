// import { Component, EventEmitter, OnInit, Output} from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-adminlogin',
//   templateUrl: './adminlogin.component.html',
//   styleUrl: './adminlogin.component.css'
// })
// export class AdminloginComponent {
//   @Output() emailSelected = new EventEmitter<string>();
 
//   jp: Boolean = false;
//   private APIUrl ='https://localhost:7165/api/Admin/';
//   authService: any;
  
//   constructor(private http: HttpClient, private router: Router) {}
 
//   loginObj : any = {
//     Username : '',
//     Password : ''
//   }

//   admin : any = {
//     Username : '',
//     Password : ''
//   }
 
// loginResponse : any = {
// message : "",
// admin :{
 
// }
// }

// onLogin(): void {
//   const loginRequest = {
//     Username: this.loginObj.Username,
//     Password: this.loginObj.Password
//   };

//   this.authService.login(loginRequest).subscribe(
//     (response: any) => {
//       if (response && response.Token) {
//         this.authService.setToken(response.Token); // Store the JWT token
//         console.log(response.token);

//         localStorage.setItem('loginadmin', this.loginObj.Username);
//         alert('Admin logged in successfully');
//         this.router.navigate(['/admindashboard'], { queryParams: { Username: this.loginObj.Username } });
//       } else {
//         alert('Invalid credentials');
//       }
//     },
//     (error: any) => {
//       console.error('Login error:', error);
//       alert('Login failed. Please check your credentials.');
//     }
//   );
// }
 
// my working method
// onLogin(): void {
 
//   localStorage.setItem('loginadmin', this.loginObj.Username);
//   // console.log(this.APIUrl + 'GetAdminbyusername/', this.loginObj.Username)
//     this.http.get(this.APIUrl + 'GetAdminbyusername/'+ this.loginObj.Username, this.loginObj).subscribe(data => {
//       this.loginResponse = data;
//       if (this.loginResponse.Username === this.loginObj.Username && this.loginResponse.Password === this.loginObj.Password) {
//         alert('Admin logged in successfully');
  
//         this.router.navigate(['/admindashboard']), { queryParams: { Username: this.loginObj.Username } };
     
//       } else {
//         alert("Invalid credentials");
//       }
//     });
// }
// }

// login() {
//   this.authService.login(this.loginRequest).subscribe(
//     (response) => {
//       this.authService.setToken(response.token); // Store token in localStorage or sessionStorage
//       alert('Login successful!');
//       console.log(response.token)
//       this.router.navigate(['/dashboard']); // Navigate to dashboard after login
//     },
//     (error) => {
//       console.error('Login error:', error);
//       alert('Login failed. Please check your credentials.');
//     }
//   );
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginObj: any = {
    Username: '',
    Password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}  // Inject AuthService here

  ngOnInit(): void {}

  onLogin(): void {
    const loginRequest = {
      Username: this.loginObj.Username,
      Password: this.loginObj.Password
    };
  
    // Log the request to check if the loginObj is correctly formed
    console.log('Login Request:', loginRequest);
  
    this.authService.login(loginRequest).subscribe({
      next: (response: any) => {
        console.log('Response:', response);  // Log the response for debugging
        if (response && response.Token) {
          this.authService.setToken(response.Token);
          localStorage.setItem('loginadmin', this.loginObj.Username);
          alert('Admin logged in successfully');
          this.router.navigate(['/admindashboard'], { queryParams: { Username: this.loginObj.Username } });
        } else {
          alert('Invalid credentials');
        }
      },
      error: (error: any) => {
        console.error('Login error:', error);  // Log the error message
        alert('Login failed. Please check your credentials.');
      },
      complete: () => {
        console.log('Login process complete');
      }
    });
  }  
}

