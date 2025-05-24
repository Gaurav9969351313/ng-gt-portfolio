import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <div class="skills-categories">
        <button 
          *ngFor="let category of categories" 
          [class.active]="selectedCategory === category"
          (click)="selectCategory(category)"
          class="category-btn">
          {{ category }}
        </button>
      </div>
      
      <div class="skills-grid">
        <div 
          *ngFor="let skill of filteredSkills" 
          class="skill-item"
          [class.fade-in]="true">
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <span>{{ skill.level }}%</span>
          </div>
          
          <div class="skill-bar">
            <div class="skill-progress" [style.width.%]="skill.level"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
      width: 100%;
    }
    
    .skills-categories {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-4);
      justify-content: center;
    }
    
    .category-btn {
      padding: var(--spacing-1) var(--spacing-2);
      border: none;
      background-color: var(--bg-light);
      color: var(--text-dark);
      border-radius: var(--border-radius-md);
      cursor: pointer;
      transition: background-color var(--transition-normal), color var(--transition-normal);
      font-family: 'Poppins', sans-serif;
      box-shadow: var(--shadow-sm);
      font-weight: 500;
    }
    
    .category-btn.active {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
    
    .category-btn:hover:not(.active) {
      background-color: rgba(var(--primary-color-rgb), 0.1);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-4);
    }
    
    .skill-item {
      animation-duration: 0.3s;
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-1);
    }
    
    .skill-info h4 {
      margin: 0;
      font-weight: 500;
      font-size: 1rem;
    }
    
    .skill-info span {
      font-family: 'Poppins', sans-serif;
      font-size: 0.9rem;
      color: var(--primary-color);
      font-weight: 500;
    }
    
    .skill-bar {
      height: 8px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }
    
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  @Input() limit: number | null = null;
  
  selectedCategory = 'All';
  
  skills: Skill[] = [
    { name: 'Angular', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'HTML5', level: 70, category: 'Frontend' },
    { name: 'CSS3/SASS', level: 60, category: 'Frontend' },
    
    { name: 'Spring Boot', level: 95, category: 'Backend' },
    { name: 'Apache Camel', level: 90, category: 'Backend' },
    { name: 'Microservices', level: 85, category: 'Backend' },
    { name: 'Python', level: 70, category: 'Backend' },
    { name: 'Flask', level: 65, category: 'Backend' },
    { name: 'Express', level: 65, category: 'Backend' },
    { name: 'Node.js', level: 60, category: 'Backend' },
    
    { name: 'Oracle', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'Redis', level: 75, category: 'Database' },
    { name: 'Mongo DB', level: 70, category: 'Database' },
    
    { name: 'Docker', level: 90, category: 'DevOps' },
    { name: 'CI/CD', level: 82, category: 'DevOps' },
    { name: 'AWS', level: 80, category: 'DevOps' },
    { name: 'Azure', level: 70, category: 'DevOps' },
    { name: 'Kubernetes', level: 65, category: 'DevOps' },

    { name: 'intellij', level: 90, category: 'Tools' },
    { name: 'Jira', level: 90, category: 'Tools' },
    { name: 'Git', level: 80, category: 'Tools' },
    
  ];
  
  get categories(): string[] {
    const categories = this.skills.map(skill => skill.category);
    return ['All', ...new Set(categories)];
  }
  
  get filteredSkills(): Skill[] {
    let filtered = this.selectedCategory === 'All' 
      ? this.skills 
      : this.skills.filter(skill => skill.category === this.selectedCategory);
      
    if (this.limit !== null) {
      filtered = filtered.slice(0, this.limit);
    }
    
    return filtered;
  }
  
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}