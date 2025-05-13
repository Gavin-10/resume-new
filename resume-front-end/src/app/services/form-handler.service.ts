import { Injectable } from '@angular/core';

import { ContactMessageInterface } from '../interfaces/contact-message-interface';

@Injectable({
  providedIn: 'root'
})
export class FormHandlerService {

  constructor() { }

  submit(toSubmit: ContactMessageInterface) {
    console.log(toSubmit);
  }
}
