import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteNoteDialogComponent } from 'src/app/components/delete-note-dialog/delete-note-dialog.component';
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
  isLoading = true;

  constructor(
    private readonly firestoreService: FirestoreService,
    private credentialsService: CredentialsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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
    this.isLoading = false;
  }
  openDeleteDialog(note:any) {
    const dialogRef = this.dialog.open(DeleteNoteDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.isLoading = true;
        this.deleteNote(note);
      }
    });
  }
  deleteNote(note: any) {
    this.firestoreService.deleteNote(this.userEmail, note.id);
    this.getMyNotes();
  }
}
