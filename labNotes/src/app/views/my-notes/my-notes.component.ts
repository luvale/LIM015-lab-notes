import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  userEmail: string = '';
  notes: any = [];

  constructor(
    private readonly firestoreService: FirestoreService,
    private credentialsService: CredentialsService
  ) { }

  ngOnInit(): void {
    console.log(this.credentialsService.credentials.email)
    this.userEmail = this.credentialsService.credentials.email;
    this.getMyNotes();
  }
  async getMyNotes() {
    this.notes = [];
    const data = await this.firestoreService.getMyNotes(this.userEmail)
    data.forEach((doc) => {
      const content = {
        id: doc.id,
        note_content: doc.data()['note_content'],
        note_title: doc.data()['note_title']
      }
      this.notes.push(content);
    });
    console.log(this.notes)
  }
  deleteNote(note: any) {
    console.log(note.id);
    this.firestoreService.deleteNote(this.userEmail, note.id);
    this.getMyNotes();
  }
}
