import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent as SkillsListComponent } from '../../components/skills/skills.component';

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule, SkillsListComponent],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Skills & Achievements</h1>
        <p>My technical expertise and career milestones</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        
        <app-skills></app-skills>
      </div>
    </section>
    
    <!-- <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Key Achievements</h2>
        
        <div class="achievements-container">
          <div class="achievement-item card" *ngFor="let achievement of achievements">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <div class="achievement-info">
              <div class="achievement-header">
                <h3>{{ achievement.title }}</h3>
                <span class="achievement-year">{{ achievement.year }}</span>
              </div>
              <p>{{ achievement.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
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
    
    .bg-light {
      background-color: var(--bg-light-alt);
    }
    
    .achievements-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-4);
    }
    
    .achievement-item {
      display: flex;
      gap: var(--spacing-3);
      padding: var(--spacing-3);
      transition: transform var(--transition-normal);
    }
    
    .achievement-item:hover {
      transform: translateY(-5px);
    }
    
    .achievement-icon {
      font-size: 2rem;
      color: var(--primary-color);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .achievement-info {
      flex-grow: 1;
    }
    
    .achievement-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-2);
    }
    
    .achievement-header h3 {
      margin: 0;
      font-size: 1.1rem;
      color: var(--text-dark);
    }
    
    .achievement-year {
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .achievement-info p {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .achievements-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  achievements: Achievement[] = [
    {
      title: 'Award-Winning Mobile App',
      description: 'Developed a fitness tracking application that won "Best Mobile App" at the Regional Tech Awards.',
      year: '2022',
      icon: '🏆'
    },
    {
      title: 'Patent for Algorithm',
      description: 'Co-authored a patent for an algorithm that optimizes database query performance in distributed systems.',
      year: '2021',
      icon: '📜'
    },
    {
      title: 'Open Source Contribution',
      description: 'Major contributor to a popular open-source framework with over 10,000 stars on GitHub.',
      year: '2020',
      icon: '🌟'
    },
    {
      title: 'Conference Speaker',
      description: 'Invited speaker at three major tech conferences, presenting on modern web development practices.',
      year: '2019',
      icon: '🎤'
    },
    {
      title: 'Performance Optimization',
      description: 'Reduced load time of a high-traffic e-commerce site by 65%, resulting in 20% increase in conversions.',
      year: '2018',
      icon: '⚡'
    },
    {
      title: 'Technical Publication',
      description: 'Published article in a leading technology journal on microservices architecture best practices.',
      year: '2017',
      icon: '📝'
    }
  ];
}