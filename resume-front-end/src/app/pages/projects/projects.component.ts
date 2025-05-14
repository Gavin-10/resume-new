import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, MatIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isActive = true

  forward() {

  }

  backward() {

  }
}
