import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ContactMessageInterface } from '../../interfaces/contact-message-interface';

import { FormHandlerService } from '../../services/form-handler.service';

@Component({
  selector: 'app-contact-form',
  imports: [MatCardModule, MatDivider, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  handler = inject(FormHandlerService);

  contactForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    company: new FormControl(""),
    message: new FormControl(""),
  });

  onSubmit() {
    if (this.contactForm.status == "VALID") {
      let name = this.contactForm.controls.firstName.value! + this.contactForm.controls.lastName.value!
      let email = this.contactForm.controls.email.value!
      let company = this.contactForm.controls.company.value!
      let message = this.contactForm.controls.message.value!

      let fullMessage: ContactMessageInterface = {
        name,
        email,
        company,
        message
      }

      this.handler.submit(fullMessage);
      this.contactForm.reset();
    }
  }
}
