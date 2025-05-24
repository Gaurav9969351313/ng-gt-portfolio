import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline-container">
      <div class="timeline">
        <div class="timeline-track"></div>
        
        <div class="timeline-item" *ngFor="let item of timelineEvents; let i = index"
             [class.active]="i === activeIndex"
             (click)="setActive(i)">
          <div class="timeline-dot"></div>
          <div class="timeline-date">{{ item.period }}</div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ item.role }}</h3>
            <h4 class="timeline-company">{{ item.company }}</h4>
            <p class="timeline-description">{{ item.description }}</p>
            <div class="timeline-tech">
              <span *ngFor="let tech of item.technologies">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="timeline-controls">
        <button class="timeline-control prev" [disabled]="activeIndex === 0" (click)="prevItem()" aria-label="Previous experience">
          ←
        </button>
        <div class="timeline-indicators">
          <span *ngFor="let item of timelineEvents; let i = index" 
                [class.active]="i === activeIndex"
                (click)="setActive(i)"></span>
        </div>
        <button class="timeline-control next" [disabled]="activeIndex === timelineEvents.length - 1" (click)="nextItem()" aria-label="Next experience">
          →
        </button>
      </div>
    </div>
  `,
  styles: [`
    .timeline-container {
      width: 100%;
      overflow: hidden;
    }
    
    .timeline {
      position: relative;
      display: flex;
      flex-direction: row; /* Change to horizontal layout */
      gap: var(--spacing-5);
      padding: var(--spacing-4) 0;
      max-width: 100%;
      overflow-x: auto; /* Enable horizontal scrolling */
      scrollbar-width: thin;
      scrollbar-color: var(--primary-light) var(--bg-light);
    }
    
    .timeline-track {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary-light);
      transform: translateY(-50%);
      z-index: 0;
    }
    
    .timeline-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-width: 350px; /* Set a minimum width for each item */
      z-index: 1;
    }
    
    .timeline-item.active {
      opacity: 1;
    }
    
    .timeline-item:hover {
      opacity: 1;
    }
    
    .timeline-dot {
      position: relative;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: var(--bg-light);
      border: 2px solid var(--primary-color);
      margin-bottom: var(--spacing-2);
    }
    
    .timeline-item.active .timeline-dot {
      width: 20px;
      height: 20px;
      background-color: var(--primary-color);
    }
    
    .timeline-date {
      font-size: 0.875rem;
      color: var(--text-muted);
      margin-bottom: var(--spacing-2);
    }
    
    .timeline-content {
      background-color: var(--bg-light);
      padding: var(--spacing-2);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      border-top: 3px solid var(--primary-color);
    }
    
    .timeline-title {
      font-size: 1.25rem;
      margin-bottom: 5px;
      color: var(--text-dark);
    }
    
    .timeline-company {
      font-size: 1.1rem;
      margin-bottom: var(--spacing-2);
      font-weight: 500;
      color: var(--primary-color);
    }
    
    .timeline-description {
      margin-bottom: var(--spacing-2);
      font-size: 0.95rem;
    }
    
    .timeline-tech {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-1);
    }
    
    .timeline-tech span {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color); /* Set font color to primary color */
      border: 1px solid var(--primary-color); /* Add border with primary color */
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .timeline-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-2);
      margin-top: var(--spacing-3);
    }
    
    .timeline-control {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: var(--bg-light);
      color: var(--text-dark);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      font-size: 1.2rem;
      transition: background-color var(--transition-normal);
    }
    
    .timeline-control:hover:not(:disabled) {
      background-color: var(--primary-light);
      color: var(--text-light);
    }
    
    .timeline-control:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .timeline-indicators {
      display: flex;
      gap: 8px;
    }
    
    .timeline-indicators span {
      width: 10px;
      height: 10px;
      background-color: var(--bg-light);
      border-radius: 50%;
      cursor: pointer;
      transition: background-color var(--transition-normal), transform var(--transition-normal);
      border: 1px solid var(--primary-color);
    }
    
    .timeline-indicators span.active {
      background-color: var(--primary-color);
      transform: scale(1.2);
    }
    
    @media (max-width: 576px) {
      .timeline {
        padding-left: var(--spacing-3);
      }
      
      .timeline-track {
        left: 0;
      }
      
      .timeline-dot {
        left: 0;
      }
      
      .timeline-item {
        grid-template-columns: 1fr;
        padding-left: var(--spacing-4);
      }
      
      .timeline-date {
        grid-column: 1;
        text-align: left;
        padding-left: var(--spacing-2);
        transform: translateY(0);
        margin-bottom: var(--spacing-1);
      }
      
      .timeline-content {
        grid-column: 1;
      }
    }
  `]
})
export class TimelineComponent {
  activeIndex = 0;
  
  timelineEvents: TimelineEvent[] = [
    {
      company: 'Bank Of New York Mellon, Pune',
      role: 'Sr. Java Full Stack Engineer',
      period: 'Jan 2021 - Present',
      description: 'Led development of core features for a SaaS platform, improving performance by 40% and reducing bugs by 25%. Mentored junior developers and modernized the tech stack.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Oracle', 'Docker', 'AWS', 'GitLab', 'Ansible', 'Ansible Tower', 'IBM MQ', 'Apache Camel', 'JIRA', 'Snowflake', 'Prefect 2.0']
    },
    {
      company: 'Reserve Bank Information Technology Pvt. Ltd.',
      role: 'Full Stack Engineer',
      period: 'Jul 2020 - Dec 2020',
      description: 'Developed and maintained multiple client projects including e-commerce sites and custom CMS solutions. Implemented CI/CD pipelines reducing deployment time by 60%.',
      technologies: ['Java', 'Spring Boot', 'Jasper Reports', 'Angular', 'Oracle', 'Docker', 'GitLab', 'JIRA']
    },
    {
      company: 'Neosoft Technologies India Limited',
      role: 'Full Stack Engineer',
      period: 'Oct 2018 - Jul 2020',
      description: 'Created responsive and accessible user interfaces for the company\'s main product. Collaborated with designers and back-end developers to implement new features.',
      technologies: ['Node Js', 'Spring Boot', 'Angular', 'Rabbit MQ', 'Azure', 'BOT Service', 'Oracle', 'Docker', 'GitLab', 'JIRA']
    },
    {
      company: '63 Moons Technologies India Limited',
      role: 'Software Engineer',
      period: 'Mar 2017 - Oct 2018',
      description: 'Created responsive and accessible user interfaces for the company\'s main product. Collaborated with designers and back-end developers to implement new features.',
      technologies: ['Spring Boot', 'C#', 'WebAPI', 'Angular', 'Rabbit MQ', 'Redis', 'IIS', 'MSSQL', 'Docker', 'GitLab', 'JIRA']
    }
  ];
  
  setActive(index: number): void {
    this.activeIndex = index;
  }
  
  nextItem(): void {
    if (this.activeIndex < this.timelineEvents.length - 1) {
      this.activeIndex++;
    }
  }
  
  prevItem(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}