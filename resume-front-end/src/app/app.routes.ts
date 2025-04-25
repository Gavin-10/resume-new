import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'Welcome!'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Info'
    },
    {
        path: 'resume',
        component: ResumeComponent,
        title: 'Resume'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'My Projects'
    }
];
