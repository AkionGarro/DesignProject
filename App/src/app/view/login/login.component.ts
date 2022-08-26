import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/api/connection.service';
import { Router } from '@angular/router';
import { GoogleApiService, UserInfo } from 'src/app/services/google-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  userInfo?: UserInfo;
  userName: string;
  private readonly googleApi: GoogleApiService;

  constructor(private api: ConnectionService, private router: Router, private readonly googleApi1: GoogleApiService) {
    this.googleApi1.userProfileSubject.subscribe(info => {
      this.userInfo = info;
      this.userName = info.info.name;
    }
    );

    this.googleApi = googleApi1;
    
  }

  ngOnInit(): void {}

  goToDashBoard() {
    
    console.log(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

  signIn() {
    this.googleApi.iniciarSesion();
    
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }
  signOut() {
    this.googleApi.signOut();
  }
}
