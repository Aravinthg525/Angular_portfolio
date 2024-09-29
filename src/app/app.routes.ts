import { Routes } from '@angular/router';
import { HomeComponent } from './container/landing/home/home.component';
import { SkillsComponent } from './container/landing/skills/skills.component';
import { EducationComponent } from './container/landing/education/education.component';
import { ContactComponent } from './container/landing/contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent},
];
