import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { SiteCardComponent } from '../../components/site-card/site-card.component';

import { ComplexCardInterface } from '../../interfaces/complex-card-interface';

import LandingData from '../../Resources/landing/landing-data.json';

@Component({
  selector: 'app-landing-page',
  imports: [NgFor, SiteCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
    landingData: ComplexCardInterface[] = LandingData;
}
