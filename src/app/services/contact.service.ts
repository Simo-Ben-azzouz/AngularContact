import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsCollection : AngularFirestoreCollection<Contact>;
  contact : Observable<Contact[]>;

  constructor(private afs : AngularFirestore) 
  {
     this.contactsCollection = this.afs.collection('contact');
     this.contact = this.contactsCollection.valueChanges();
  }
  
  // methode
getContact ()
{
  return this.contact;
}
}

