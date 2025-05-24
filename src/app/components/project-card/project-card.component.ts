import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card card">
      <div class="project-image">
        <img [src]="project.image" [alt]="project.title" />
        <div class="project-overlay">
          <div class="project-links">
            <a [href]="project.demoUrl" target="_blank" class="project-link" *ngIf="project.demoUrl">
              Live Demo
            </a>
            <a [href]="project.githubUrl" target="_blank" class="project-link" *ngIf="project.githubUrl">
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="project-tech">
          <span *ngFor="let tech of project.technologies">{{ tech }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    
    .project-image {
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
      height: 200px;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-links {
      display: flex;
      gap: var(--spacing-2);
    }
    
    .project-link {
      padding: 8px 16px;
      background-color: var(--primary-color);
      color: white;
      border-radius: var(--border-radius-md);
      text-decoration: none;
      transition: background-color var(--transition-normal);
    }
    
    .project-link:hover {
      background-color: var(--primary-dark);
    }
    
    .project-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: var(--spacing-3);
    }
    
    .project-title {
      font-size: 1.25rem;
      margin-bottom: var(--spacing-1);
    }
    
    .project-description {
      margin-bottom: var(--spacing-3);
      color: var(--text-muted);
      flex-grow: 1;
      font-size: 0.95rem;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .project-tech span {
      padding: 4px 8px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-dark);
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}