import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  title:any = '';
  noteContent:any = '';
  userEmail:string = '';

  constructor(
    private readonly firestoreService: FirestoreService,
    private credentialsService: CredentialsService
  ) { }

  ngOnInit(): void {
    this.userEmail = this.credentialsService.credentials.email;
  }

  async saveNote() {
    const note = { 
      note_title: this.title,
      note_content : this.noteContent
    }
    const saved = await this.firestoreService.saveNote(this.userEmail, note);
  }
}
