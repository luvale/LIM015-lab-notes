import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './views/login/login.component';
import { MyNotesComponent } from './views/my-notes/my-notes.component';
import { NewNoteComponent } from './views/new-note/new-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './views/edit/edit.component';
import { UserBarComponent } from './components/user-bar/user-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNotesComponent,
    NewNoteComponent,
    EditComponent,
    UserBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    AutosizeModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    UserBarComponent
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
