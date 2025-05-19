import { Component, signal } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';

import { ProjectInfoComponent } from '../../components/project-info/project-info.component';

import { ProjectInterface } from '../../interfaces/project-interface';
import ProjectData from '../../Resources/projects/projects.json';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, MatIcon, ProjectInfoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectData: ProjectInterface[] = ProjectData;
  activeLink = signal(this.projectData[0]);
}
