import { Component } from '@angular/core';
import { contactData } from '../../../assets/constansData/contactData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData;

  constructor() {
    this.contactData = contactData;
  }
}
