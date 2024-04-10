import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    photo: ''
  }

  constructor(
    private credentialsService: CredentialsService,
    private readonly authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = this.credentialsService.credentials;
  }
  logOut() {
    this.authService.logOut().then((user:any) => {
      localStorage.removeItem("me");
      this.router.navigate(['']);
    });
  }
}
