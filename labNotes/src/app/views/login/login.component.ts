import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { Router } from '@angular/router';

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
    .then((user) => {
      //console.log(user.user);
      const userCredentials = {
        name: user.user.displayName,
        email: user.user.email,
        photo: user.user.photoURL
      }
      //console.log(userCredentials)
      this.credentialsService.setCredentials(userCredentials);
      this.router.navigate(['my-notes']);
    })
    .catch((err) => console.log(err))
  }
}
