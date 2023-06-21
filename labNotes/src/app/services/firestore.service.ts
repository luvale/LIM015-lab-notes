import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore
  ) { }

  getMyNotes(userEmail:string): Observable<any> {
    const placeRef = collection(this.firestore, 'notes-' + userEmail);
    return collectionData(placeRef) as Observable<any>;
  }
  saveNote(userEmail:string, note:any) {
    const placeRef = collection(this.firestore, 'notes-' + userEmail);
    return addDoc(placeRef, note);
  }
}
