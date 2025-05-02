import { Component, input } from '@angular/core';
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
  items = input<string[]>()
}
