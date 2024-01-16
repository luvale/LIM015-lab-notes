import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  credentials: any;

  constructor() { 
    const getUser = localStorage.getItem("me");
    if (getUser) {
      this.credentials = JSON.parse(getUser);
    }
  }

  setCredentials(userInfo: User): void {
    localStorage.setItem("me", JSON.stringify(userInfo));
    this.credentials = userInfo;
  }
}
