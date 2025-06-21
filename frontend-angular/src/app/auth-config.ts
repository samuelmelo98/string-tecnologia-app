import { AuthConfig } from 'angular-oauth2-oidc';
/*
Samuel Melo
* */
export const authConfig: AuthConfig = {
  issuer: 'http://keycloak:8080/realms/meu-realm',
  redirectUri: window.location.origin,
  clientId: 'angular-client',
  responseType: 'code',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
  showDebugInformation: true,
  requireHttps: false,
};
