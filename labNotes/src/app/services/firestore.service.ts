import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, getDocs, getDoc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore,
  ) { }

  getMyNotes(userEmail: string) {
    const collectionRef = collection(this.firestore, 'notes-' + userEmail);
    return getDocs(collectionRef);
  }
  getNoteById(userEmail: string, noteId: string) {
    const docRef = doc(this.firestore, 'notes-' + userEmail, noteId);
    return getDoc(docRef);
  }

  saveNote(userEmail: string, note: any) {
    const docRef = collection(this.firestore, 'notes-' + userEmail);
    return addDoc(docRef, note);
  }
  updateNote(userEmail: string, note: any, noteId: string) {
    const docRef = doc(this.firestore, 'notes-' + userEmail, noteId);
    return updateDoc(docRef, note);
  }
  deleteNote(userEmail: string, noteId: string) {
    const docRef = doc(this.firestore, 'notes-' + userEmail, noteId);
    return deleteDoc(docRef);
  }
}
