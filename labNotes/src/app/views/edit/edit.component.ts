import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title:any = '';
  noteContent:any = '';
  userEmail:string = '';
  noteId:string = '';
  isLoading = true;

  constructor(
    private readonly firestoreService: FirestoreService,
    private credentialsService: CredentialsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userEmail = this.credentialsService.credentials.email;
    this.getNoteById();
  }
  async getNoteById() {
    this.noteId = window.location.pathname.replace('/edit/', '');
    const docSnap = await this.firestoreService.getNoteById(this.userEmail, this.noteId);
    if (docSnap.exists()) {
      this.title = docSnap.data()['note_title'];
      this.noteContent = docSnap.data()['note_content'];
      this.isLoading = false;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No existe ese documento");
    }
  }
  updateNote() {
    const note = { 
      note_title: this.title,
      note_content : this.noteContent
    }
    this.firestoreService.updateNote(this.userEmail, note, this.noteId);
    this.openSnackBar();
  }
  openSnackBar() {
    this._snackBar.open("Note saved", "", {
      duration: 3000,
    });
  }
}
