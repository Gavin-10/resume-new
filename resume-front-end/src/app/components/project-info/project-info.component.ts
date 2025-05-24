import { Component, input, computed } from '@angular/core';

import { MatCardActions } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

import { SiteCardComponent } from '../site-card/site-card.component';
import { SiteListComponent } from '../site-list/site-list.component';

import { ProjectInterface } from '../../interfaces/project-interface';

@Component({
  selector: 'app-project-info',
  imports: [SiteCardComponent, MatCardActions, MatButton, SiteListComponent],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  projectData = input.required<ProjectInterface>();

  dissabledButton = computed(() => {
    return this.projectData().link.length == 0;
  });
  
  goToButton() {
    window.location.href = this.projectData().link;
  }
}
