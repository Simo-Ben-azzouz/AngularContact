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
contact :any;
  constructor(private contactService : ContactService){}    
    
ngOnInit() {
  this.contactService.getContact().subscribe(contact => {
    this.contact = contact;
    console.log(contact);
    
  });
}
}
