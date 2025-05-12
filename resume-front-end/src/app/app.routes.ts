import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'Welcome!'
    },
    {
        path: 'contact',
        loadComponent: () => import("./pages/contact/contact.component").then(c => c.ContactComponent),
        title: 'Contact Info'
    },
    {
        path: 'resume',
        loadComponent: () => import("./pages/resume/resume.component").then(c => c.ResumeComponent),
        title: 'Resume'
    },
    {
        path: 'projects',
        loadComponent: () => import("./pages/projects/projects.component").then(c => c.ProjectsComponent),
        title: 'My Projects'
    }
];
