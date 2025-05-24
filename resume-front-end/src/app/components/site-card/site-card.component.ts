import { Component, input, computed, booleanAttribute } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-site-card',
  imports: [MatCardModule, MatDivider],
  templateUrl: './site-card.component.html',
  styleUrl: './site-card.component.scss'
})
export class SiteCardComponent {
  title = input("Title");
  hasActions = input(false, {transform: booleanAttribute});
  background = input("");
  gluedActions = input(false, {transform: booleanAttribute});
}
