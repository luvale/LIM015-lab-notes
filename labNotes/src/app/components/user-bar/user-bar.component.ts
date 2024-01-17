import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  user: User = {
    name: '',
    email:'',
    photo:''
  }

  constructor(
    private credentialsService: CredentialsService
    ) { }

  ngOnInit(): void {
    console.log(this.credentialsService.credentials);
    this.user = this.credentialsService.credentials;

  }

}
