import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatIcon } from '@angular/material/icon';

import { SiteListComponent } from '../../components/site-list/site-list.component';
import { SiteCardComponent } from '../../components/site-card/site-card.component';

import { CardInterface } from '../../interfaces/card-interface';
import { ListInterface } from '../../interfaces/list-interface';

import Skills from '../../Resources/resume/skills.json';
import AboutMe from '../../Resources/resume/about-me.json';
import Summary from '../../Resources/resume/summary.json';
import Experience from '../../Resources/resume/experience.json';

@Component({
  selector: 'app-resume',
  imports: [MatIcon, SiteCardComponent, NgFor, SiteListComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  skills: ListInterface[] = Skills;
  aboutMe: CardInterface = AboutMe;
  summary: CardInterface = Summary;
  experience: ListInterface[] = Experience;
}
