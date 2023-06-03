import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then((user) => {
      console.log('successful login')
      console.log(user)
    })
    .catch((err) => console.log(err))
  }
}
