import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private oauthService: OAuthService
  )
  {
  }

  login() {
    console.log("Login");
    this.oauthService.initLoginFlow();



  }
}
