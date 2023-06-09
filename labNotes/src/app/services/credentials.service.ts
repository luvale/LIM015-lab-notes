import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  credentials:any;

  constructor() { }

  setCredentials(userInfo:any): void {
    this.credentials = userInfo;
  }
}
