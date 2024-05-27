import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  statusContact : boolean = false;

  contact : Contact = {
    name : '',
    telephone : 0
  }

  /**
   *
   */
  constructor(private contactService : ContactService) {
    
    
  }

  newContact()
  {
    alert('contact :'+this.contact.name+' is added');
    this.contactService.createContact(this.contact);
    this.contact.name = '';
    this.contact.telephone = null;
    this.statusContact = false;
  }
}
