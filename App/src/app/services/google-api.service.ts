import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { ConnectionService } from './api/connection.service';


const  oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '348046773592-eh43jdovdqm4hd98mg09t1j0cv06fat6.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo{
  info:{
    sub: string;
    email: string;
    name: string;
    picture: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>();
  private readonly  oAuthService: OAuthService;

  constructor(private readonly oAuthService1: OAuthService, private router: Router, 
    private api: ConnectionService) {
    this.oAuthService = oAuthService1;
   }

  iniciarSesion() {
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.logoutUrl = "https://accounts.google.com/logout";
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if(!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
          console.log("No hay token");
        }else{
          this.oAuthService.loadUserProfile().then( (userProfile) => {
            console.log('Name: ', userProfile['info']['name']);
            console.log('Email: ', userProfile['info']['email']);
            console.log('Email Verified: ', userProfile['info']['email_verified']);
            this.userProfileSubject.next(userProfile as UserInfo);
          })
        }
      })
    })
    
  }
  
  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  signOut() {
    this.oAuthService.logOut();
  }

}
