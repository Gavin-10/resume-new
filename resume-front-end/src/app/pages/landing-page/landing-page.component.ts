import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SiteCardComponent } from '../../components/site-card/site-card.component';

@Component({
  selector: 'app-landing-page',
  imports: [MatCardModule, MatDividerModule, MatButtonModule, SiteCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    repositoryLink() {
        window.location.href = 'https://github.com/Gavin-10/resume-new';
    }
}
