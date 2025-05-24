import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Projects</h1>
        <p>A showcase of my professional work and personal projects</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="project-filters">
          <button 
            *ngFor="let category of categories" 
            [class.active]="selectedCategory === category"
            (click)="filterProjects(category)"
            class="filter-btn">
            {{ category }}
          </button>
        </div>
        
        <div class="grid grid-3 projects-grid">
          <app-project-card 
            *ngFor="let project of filteredProjects" 
            [project]="project">
          </app-project-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background-color: var(--bg-dark);
      color: var(--text-light);
      padding: var(--spacing-6) 0;
      margin-bottom: var(--spacing-5);
    }
    
    .page-header h1 {
      color: var(--text-light);
      margin-bottom: var(--spacing-1);
    }
    
    .page-header p {
      color: var(--text-muted);
      font-size: 1.2rem;
      max-width: 600px;
    }
    
    .project-filters {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-4);
      justify-content: center;
    }
    
    .filter-btn {
      padding: var(--spacing-1) var(--spacing-2);
      border: none;
      background-color: var(--bg-light);
      color: var(--text-dark);
      border-radius: var(--border-radius-md);
      cursor: pointer;
      transition: all var(--transition-normal);
      font-family: 'Poppins', sans-serif;
      box-shadow: var(--shadow-sm);
      font-weight: 500;
    }
    
    .filter-btn.active {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
    
    .filter-btn:hover:not(.active) {
      background-color: rgba(var(--primary-color-rgb), 0.1);
    }
    
    .projects-grid {
      min-height: 400px;
    }
    
    @media (max-width: 992px) {
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 576px) {
      .grid-3 {
        grid-template-columns: 1fr;
      }
      
      .project-filters {
        flex-wrap: wrap;
      }
    }
  `]
})
export class ProjectsComponent {
  selectedCategory = 'All';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce solution with cart functionality, payment processing, and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality and collaborative features.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      demoUrl: 'https://demo-taskmanager.example.com',
      githubUrl: 'https://github.com/example/taskmanager',
      category: 'Web Application'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A messaging platform with real-time updates, user authentication, and message persistence.',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg',
      technologies: ['Angular', 'Socket.io', 'Express', 'MongoDB'],
      demoUrl: 'https://demo-chatapp.example.com',
      githubUrl: 'https://github.com/example/chatapp',
      category: 'Web Application'
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.',
      image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo-fitnessapp.example.com',
      githubUrl: 'https://github.com/example/fitnessapp',
      category: 'Mobile App'
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather information dashboard with location-based forecasts, interactive maps, and historical data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'Bootstrap'],
      demoUrl: 'https://demo-weather.example.com',
      githubUrl: 'https://github.com/example/weather',
      category: 'Web Application'
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'A customizable portfolio website template for developers to showcase their work and experience.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Firebase'],
      demoUrl: 'https://demo-portfolio.example.com',
      githubUrl: 'https://github.com/example/portfolio',
      category: 'Web Application'
    },
    {
      id: 7,
      title: 'Inventory Management System',
      description: 'A comprehensive system for tracking inventory, processing orders, and generating reports.',
      image: 'https://images.pexels.com/photos/4480988/pexels-photo-4480988.jpeg',
      technologies: ['React', 'Node.js', 'MySQL', 'Docker'],
      demoUrl: 'https://demo-inventory.example.com',
      githubUrl: 'https://github.com/example/inventory',
      category: 'Enterprise Software'
    },
    {
      id: 8,
      title: 'Recipe Sharing Platform',
      description: 'A community-driven platform for sharing and discovering recipes with social features.',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg',
      technologies: ['Angular', 'Firebase', 'Cloud Functions', 'Material Design'],
      demoUrl: 'https://demo-recipes.example.com',
      githubUrl: 'https://github.com/example/recipes',
      category: 'Web Application'
    },
    {
      id: 9,
      title: 'CI/CD Pipeline Automation',
      description: 'An automated pipeline for continuous integration and deployment of microservices.',
      image: 'https://images.pexels.com/photos/7795645/pexels-photo-7795645.jpeg',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
      githubUrl: 'https://github.com/example/cicd',
      category: 'DevOps'
    }
  ];
  
  get categories(): string[] {
    const categories = this.projects.map(project => project.category);
    return ['All', ...new Set(categories)];
  }
  
  get filteredProjects(): Project[] {
    return this.selectedCategory === 'All' 
      ? this.projects 
      : this.projects.filter(project => project.category === this.selectedCategory);
  }
  
  filterProjects(category: string): void {
    this.selectedCategory = category;
  }
}