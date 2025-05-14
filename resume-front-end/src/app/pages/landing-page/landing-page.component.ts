import { Component } from '@angular/core';

import { MatCardActions } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { SiteCardComponent } from '../../components/site-card/site-card.component';

@Component({
  selector: 'app-landing-page',
  imports: [MatCardActions, MatButton, SiteCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    repositoryLink() {
        window.location.href = 'https://github.com/Gavin-10/resume-new';
    }
}
