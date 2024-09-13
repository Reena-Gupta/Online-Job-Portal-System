import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recruiterdashboard',
  templateUrl: './recruiterdashboard.component.html',
  styleUrl: './recruiterdashboard.component.css'
})
export class RecruiterdashboardComponent implements OnInit {
  email: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.email = localStorage.getItem('loginUserEmail');
    console.log(this.email);
    console.log('Email retrieved in RecruiterDashboard:', this.email);
  }
}
