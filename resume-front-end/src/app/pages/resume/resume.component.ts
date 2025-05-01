import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SiteCardComponent } from '../../components/site-card/site-card.component';
import { NgFor } from '@angular/common';

import { CardInterface } from '../../interfaces/card-interface';
import ResumeOverview from '../../Resources/resume-overview.json';

@Component({
  selector: 'app-resume',
  imports: [MatIconModule, MatCardModule, MatDividerModule, MatListModule, SiteCardComponent, NgFor],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  resumeOverview: CardInterface[] = ResumeOverview
}
