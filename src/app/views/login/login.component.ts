import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly credentialsService: CredentialsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then((user:any) => {
      const userCredentials: User = {
        name: user.user.displayName,
        email: user.user.email,
        photo: user.user.photoURL
      }
      this.credentialsService.setCredentials(userCredentials);
      this.router.navigate(['my-notes']);
    })
    .catch((err) => console.log(err))
  }

  logOut() { 
    localStorage.removeItem("me");
  }
}
