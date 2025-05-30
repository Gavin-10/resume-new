import { Component, signal } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { ProjectInfoComponent } from '../../components/project-info/project-info.component';

import { ProjectInterface } from '../../interfaces/project-interface';
import ProjectData from '../../Resources/projects/projects.json';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, ProjectInfoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectData: ProjectInterface[] = ProjectData;
  activeLink = signal(this.projectData[0]);
}
