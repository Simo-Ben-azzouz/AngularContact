import { Contact } from './../../models/contact';
import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css'
})
export class ListContactsComponent {
/**
 *
 */
statusContact = false;
myContact! : Contact;
contact :any;
  constructor(private contactService : ContactService){}    
    
ngOnInit() {
  this.contactService.getContact().subscribe(contact => {
    this.contact = contact;
    console.log(contact);
    
  });
}
// method
updateContact (contact : Contact)
{
  this.contactService.updateContact(contact);
  this.statusContact =false;
}

editContact(contact : Contact)
{
  this.statusContact = !this.statusContact;
  this.myContact = contact;
}

deleteContact(contact : Contact)
{
  if (confirm('voulez vous vraiment la supprime')) {
    
    this.contactService.destroyContact(contact);
  }
}
}
