import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SiteCardComponent } from '../../components/site-card/site-card.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatCardModule, SiteCardComponent, MatButtonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private snackBar = inject(MatSnackBar);

  email = "My Email: mcguinness52626@gmail.com"
  github = "Username: Gavin-10"
  linkedIn = "Url: linkedin.com/in/gavin-mcguinness-cs"

  copyEmail() {
    navigator.clipboard.writeText('mcguinness52626@gmail.com');
    if (window.innerWidth >= 800) {
      this.snackBar.open("Email Copied", "Dismiss");
    } else {
      window.alert("Email Copied");
    }
  }

  goToGithub() {
    window.location.href = "https://github.com/Gavin-10";
  }

  goToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/gavin-mcguinness-cs?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWo4zMjrOR9q%2BS33UvEGnpg%3D%3D";
  }
}
