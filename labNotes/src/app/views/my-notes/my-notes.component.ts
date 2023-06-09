import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  userEmail:string = '';
  notes:any;

  constructor(
    private readonly firestoreService: FirestoreService,
    private credentialsService: CredentialsService
  ) { }

  ngOnInit(): void {
    console.log(this.credentialsService.credentials.email)
    this.userEmail = this.credentialsService.credentials.email;
    this.getMyNotes();
  }
  getMyNotes() {
    this.firestoreService.getMyNotes(this.userEmail).subscribe((notes) => {
      console.log(notes);
      this.notes = notes;
    })
  }
}
