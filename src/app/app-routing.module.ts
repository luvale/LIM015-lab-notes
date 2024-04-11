import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MyNotesComponent } from './views/my-notes/my-notes.component';
import { NewNoteComponent } from './views/new-note/new-note.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'my-notes', component: MyNotesComponent,
  },
  {
    path: 'new-note', component: NewNoteComponent,
  },
  {
    path: 'edit/:id', component: EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
