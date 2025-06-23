import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  username = 'Samuel Melo';
  userPhotoUrl = 'https://ui-avatars.com/api/?name=Samuel+Melo';  // Exemplo usando UI Avatars
  logoUrl = 'https://via.placeholder.com/120x40?text=LOGO';       // Exemplo de logomarca (pode trocar)

  constructor(
    private router: Router,
    private oauthService: OAuthService
  ) {}

  logout() {
    // Exemplo de logout simples
    this.oauthService.logOut();
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
