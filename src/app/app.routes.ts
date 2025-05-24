import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'experience', 
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent) 
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) 
  },
  { 
    path: 'skills', 
    loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent) 
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) 
  },
  { 
    path: 'blog/:id', 
    loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) 
  },
  { path: '**', redirectTo: '' }
];