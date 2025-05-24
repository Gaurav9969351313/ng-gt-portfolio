import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="awards-container">
      <div class="awards-filters">
        <button 
          *ngFor="let category of categories" 
          [class.active]="selectedCategory === category"
          (click)="filterAwards(category)"
          class="filter-btn">
          {{ category }}
        </button>
      </div>
      
      <div class="awards-grid">
        <div class="award-card" *ngFor="let award of filteredAwards">
          <div class="award-icon">{{ award.icon }}</div>
          <div class="award-content">
            <h3>{{ award.title }}</h3>
            <div class="award-meta">
              <span class="organization">{{ award.organization }}</span>
              <span class="date">{{ award.date }}</span>
            </div>
            <p class="description">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .awards-container {
      width: 100%;
    }
    
    .awards-filters {
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
    
    .awards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-4);
    }
    
    .award-card {
      background-color: var(--bg-light);
      border-radius: var(--border-radius-md);
      padding: var(--spacing-3);
      box-shadow: var(--shadow-md);
      display: flex;
      gap: var(--spacing-3);
      transition: transform var(--transition-normal);
    }
    
    .award-card:hover {
      transform: translateY(-5px);
    }
    
    .award-icon {
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
    
    .award-content {
      flex-grow: 1;
    }
    
    .award-content h3 {
      margin-bottom: var(--spacing-1);
      color: var(--text-dark);
      font-size: 1.2rem;
    }
    
    .award-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-2);
      font-size: 0.9rem;
    }
    
    .organization {
      color: var(--primary-color);
      font-weight: 500;
    }
    
    .date {
      color: var(--text-muted);
    }
    
    .description {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin: 0;
      line-height: 1.5;
    }
    
    @media (max-width: 768px) {
      .awards-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AwardsComponent {
  selectedCategory = 'All';
  
  awards: Award[] = [
    {
      title:'BNY Mellon’s Spot Light Award',
      organization:'Bank of New York Mellon, Pune',
      date:'2024',
      description:'BNY Mellon’s Spot Light Award Year 2024: For successful implementation of Release Automation Project.',
      icon:'🏆',
      category:'Technical'
    },

    {
      title:'Passion for Excellence Award',
      organization:'Bank of New York Mellon, Pune',
      date:'2023',
      description:'BNY Mellon’s Passion for Excellence Award: For successfully implementing MQ TLS and Revamping the Bridge Water workflows.',
      icon:'🏆',
      category:'Technical'
    },
    {
      title: 'Passion for Excellence Award',
      organization: 'Bank of New York Mellon, Pune',
      date: '2022',
      description: 'Passion for Excellence Award: For excellent contribution in UMR Phase 6 IMSEG project. (September 2022).',
      icon: '🏆',
      category: 'Technical'
    },
    {
      title: 'Best Performer Of The Year 2019 from NeoSoft Technologies I Ltd.',
      organization: 'NeoSoft Technologies, Mumbai',
      date: '2019',
      description: 'Awarded for exceptional leadership in modernizing the company\'s tech stack and mentoring junior developers.',
      icon: '👑',
      category: 'Leadership'
    },
    {
      title: 'Star Of The Month November 2019',
      organization: 'Mahindra and Mahindra, mumbai',
      date: '2019',
      description: 'Recognized for implementing an Qlik integration in AI bot using NLP.',
      icon: '💡',
      category: 'Technical'
    },
    {
      title: 'Udacity Schlor',
      organization: 'Udacity Inc.',
      date: '2018',
      description: 'Udacity Schlor : Got Selected for Cloud Devops Nanodegree Schlorship.',
      icon: '⭐',
      category: 'Community'
    },
    {
      title: 'Best Innovative Idea Award, 1st Runner Up',
      organization: '63 moons technologies limited, Mumbai',
      date: '2018',
      description: '1St Runner up for project of zAnalytics BTS Hacknovate 2018 amongst 48 teams.',
      icon: '🌟',
      category: 'Technical'
    },
    {
      title: 'Best Innovative Idea Award BTS Hackathon 2017',
      organization: '63 moons technologies limited, Mumbai',
      date: '2017',
      description: 'Recognized for maintaining exceptional idea presented for ODIN platform.',
      icon: '✨',
      category: 'Technical'
    }
  ];
  
  get categories(): string[] {
    const categories = this.awards.map(award => award.category);
    return ['All', ...new Set(categories)];
  }
  
  get filteredAwards(): Award[] {
    return this.selectedCategory === 'All'
      ? this.awards
      : this.awards.filter(award => award.category === this.selectedCategory);
  }
  
  filterAwards(category: string): void {
    this.selectedCategory = category;
  }
}