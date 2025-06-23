import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

  /*template: `
    <div *ngIf="!oauthService.hasValidAccessToken()">
      <button (click)="login()">Login</button>
    </div>
    <div *ngIf="oauthService.hasValidAccessToken()">
      <p>✅ Logado com sucesso!</p>
      <button (click)="logout()">Logout</button>
      <button (click)="callApi()">Chamar API Protegida</button>
    </div>


  `*/
})
export class AppComponent {
  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private  http: HttpClient
  ) {
    this.configureOAuth();

  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  callApi() {
   // const token = this.oauthService.getAccessToken();
   // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
   // this.http.get('http://localhost:8081/api/hello', { headers })
   //   .subscribe({
    this.http.get('http://localhost:8081/api/hello').subscribe({
        next: res => console.log('API retornou:', res),
        error: err => console.error('Erro na API:', err)
      });
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        console.log("✅ Login OK");
        const token = this.oauthService.getAccessToken();
        localStorage.setItem('access_token', token);
        console.log('Token carregado e salvo no localStorage:', token);
        this.router.navigate(['/main']);
      }
    });
  }
}
