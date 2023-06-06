import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  credentials:any;

  constructor() { }

  isAuthenticated(): boolean {
    return this.credentials;
  }
  setCredentials(userInfo:any): void {
    this.credentials = userInfo;
  }
  getCredentials() {
    return this.credentials;
  }
}
