import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Contact } from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDoc! : AngularFirestoreDocument<Contact>;
  contactsCollection : AngularFirestoreCollection<Contact>;
  contact : Observable<Contact[]>;

  constructor(private afs : AngularFirestore) 
  {
     this.contactsCollection = this.afs.collection('contact');
     this.contact = this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  // methode
getContact ()
{
  return this.contact;
}

createContact (contact : Contact)
{
  this.contactsCollection.add(contact);
}

updateContact (contact : Contact)
{
  this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
  this.contactDoc.update(contact);
}
}

