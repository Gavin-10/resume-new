import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';

import { ProjectInfoComponent } from '../../components/project-info/project-info.component';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, MatIcon, ProjectInfoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  links = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
  activeLink = this.links[0];
}
