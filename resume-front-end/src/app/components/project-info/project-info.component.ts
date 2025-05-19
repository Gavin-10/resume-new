import { Component, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { SiteCardComponent } from '../site-card/site-card.component';
import { SiteListComponent } from '../site-list/site-list.component';

import { ProjectInterface } from '../../interfaces/project-interface';

@Component({
  selector: 'app-project-info',
  imports: [SiteCardComponent, MatCardModule, SiteListComponent],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  projectData = input.required<ProjectInterface>();
  
}
