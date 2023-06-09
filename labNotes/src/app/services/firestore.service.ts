import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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
}
