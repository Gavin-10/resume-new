import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SiteCardComponent } from '../../components/site-card/site-card.component';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatCardModule, SiteCardComponent, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = "My Email: mcguinness52626@gmail.com"
  github = "Username: Gavin-10"
  linkedIn = "Url: linkedin.com/in/gavin-mcguinness-cs"
}
