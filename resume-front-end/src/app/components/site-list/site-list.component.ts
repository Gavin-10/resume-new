import { Component, computed, input } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-site-list',
  imports: [MatDivider, NgFor],
  templateUrl: './site-list.component.html',
  styleUrl: './site-list.component.scss'
})
export class SiteListComponent {
  title = input("");
  subtitle = input("");
  items = input<string[]>()

  subtitleClass = computed(() => {
    if (this.subtitle() === "") {
      return "no-display";
    }

    return "";
  });

  noTitle = computed(() => {
    if (this.title() == "") {
      return "no-display";
    } else {
      return "";
    }
  })
}
