import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { SiteCardComponent } from '../site-card/site-card.component';
import { SiteListComponent } from '../site-list/site-list.component';

@Component({
  selector: 'app-project-info',
  imports: [SiteCardComponent, MatCardModule, SiteListComponent],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  fakeItems = ["Skill 1", "Skill 2", "Skill 3"];
}
