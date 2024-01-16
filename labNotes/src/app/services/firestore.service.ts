import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, getDocs, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore,
  ) { }

  getMyNotes(userEmail:string) {
    const placeRef = collection(this.firestore, 'notes-' + userEmail);
    return getDocs(placeRef);
  }
  getNoteById(userEmail:string, noteId:string) {
    const docRef = doc(this.firestore, 'notes-' + userEmail, noteId);
    return getDoc(docRef);
  }

  saveNote(userEmail:string, note:any) {
    const placeRef = collection(this.firestore, 'notes-' + userEmail);
    return addDoc(placeRef, note);
  }
  updateNote(userEmail:string, note:any, noteId:string) {
    const docRef = doc(this.firestore, 'notes-' + userEmail, noteId);
    return updateDoc(docRef, note);
  }
}
