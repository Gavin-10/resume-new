import { Component, input, computed, booleanAttribute } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-site-card',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './site-card.component.html',
  styleUrl: './site-card.component.scss'
})
export class SiteCardComponent {
  title = input("Title");
  hasActions = input(false, {transform: booleanAttribute});
  actionDisplay = computed(() => {
    if (this.hasActions()) {
      return "";
    } else {
      return "no-display";
    }
  });
}
