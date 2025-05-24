import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSummaryComponent } from '../../components/about-summary/about-summary.component';

interface Education {
  degree: string;
  university: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

interface Strength {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AboutSummaryComponent],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>About Me</h1>
        <p>Learn more about my background, education, and personal strengths</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Personal Background</h2>
        <app-about-summary></app-about-summary>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Education</h2>
        
        <div class="education-container">
          <div class="education-item card" *ngFor="let edu of education">
            <div class="education-info">
              <h3>{{ edu.degree }}</h3>
              <h4>{{ edu.university }}</h4>
              <span class="education-period">{{ edu.period }}</span>
            </div>
            <p class="education-description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Certifications</h2>
        
        <div class="certifications-container">
          <div class="cert-item card" *ngFor="let cert of certifications">
            <div class="cert-icon">{{ cert.icon }}</div>
            <div class="cert-info">
              <h3>{{ cert.name }}</h3>
              <p>{{ cert.issuer }}</p>
              <span class="cert-date">{{ cert.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Professional Strengths</h2>
        
        <div class="strengths-container">
          <div class="strength-item card" *ngFor="let strength of strengths">
            <div class="strength-icon">{{ strength.icon }}</div>
            <div class="strength-info">
              <h3>{{ strength.name }}</h3>
              <p>{{ strength.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Personal Details</h2>
        
        <div class="personal-details card">
          <table class="details-table">
            <tr>
              <th>Location</th>
              <td>Netherlands, Mumbai</td>
            </tr>
            <tr>
              <th>Languages</th>
              <td>English (Fluent), Hindi (Fluent), Marathi (Native)</td>
            </tr>
            <tr>
              <th>Nationality</th>
              <td>Indian</td>
            </tr>
            <tr>
              <th>Interests</th>
              <td>Singing, Cooking</td>
            </tr>
            <tr>
              <th>Hobby</th>
              <td>Playing Cricket, Table Tennis</td>
            </tr>
          </table>
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
    
    .bg-light {
      background-color: var(--bg-light-alt);
    }
    
    .education-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-4);
    }
    
    .education-item {
      padding: var(--spacing-3);
    }
    
    .education-info h3 {
      margin-bottom: 5px;
      color: var(--primary-dark);
    }
    
    .education-info h4 {
      margin-bottom: 5px;
      font-weight: 500;
      color: var(--text-dark);
    }
    
    .education-period {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      border-radius: 20px;
      font-size: 0.8rem;
      margin-bottom: var(--spacing-2);
    }
    
    .education-description {
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    
    .certifications-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--spacing-3);
    }
    
    .cert-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-3);
    }
    
    .cert-icon {
      font-size: 2rem;
      color: var(--primary-color);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      border-radius: 50%;
    }
    
    .cert-info h3 {
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    .cert-info p {
      margin-bottom: 5px;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    .cert-date {
      font-size: 0.8rem;
      color: var(--primary-color);
    }
    
    .strengths-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-3);
    }
    
    .strength-item {
      display: flex;
      gap: var(--spacing-3);
      padding: var(--spacing-3);
    }
    
    .strength-icon {
      font-size: 2rem;
      color: var(--primary-color);
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      border-radius: 50%;
    }
    
    .strength-info h3 {
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    .strength-info p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    
    .personal-details {
      padding: var(--spacing-3);
    }
    
    .details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-4);
    }
    
    .details-item h3 {
      color: var(--primary-color);
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    .details-item p {
      color: var(--text-dark);
    }

    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: var(--spacing-3);
    }

    .details-table th {
      text-align: left;
      color: var(--primary-color);
      font-weight: bold;
      padding: var(--spacing-2);
      border-bottom: 2px solid var(--primary-color);
    }

    .details-table td {
      text-align: left;
      color: var(--text-dark);
      padding: var(--spacing-2);
      border-bottom: 1px solid #ddd;
    }

    .details-table th, .details-table td {
      padding: var(--spacing-1); /* Reduced padding */
    }

    .details-table tr:last-child td {
      border-bottom: none;
    }
    
    @media (max-width: 768px) {
      .education-container,
      .certifications-container,
      .strengths-container {
        grid-template-columns: 1fr;
      }
      
      .details-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-3);
      }
    }
  `]
})
export class AboutComponent {
  education: Education[] = [
    {
      degree: 'PG-DAC: Post Graduate Diploma in Advanced Computing',
      university: 'Mumbai University',
      period: '2016 - 2017',
      description: 'Specialized in advanced computing, full-stack development, and software engineering.'
    },
    {
      degree: 'Bachelor of Engineering',
      university: 'Mumbai University',
      period: '2011 - 2015',
      description: 'Graduated with honors. Coursework included Electronics, Embeded Coding, Microprocessors and Microcontrollers.'
    }
  ];
  
  certifications: Certification[] = [
    {
      name: 'IBM MQ Developer Essentials',
      issuer: 'IBM Skills',
      date: 'Sep 2023',
      icon: '🏆'
    },
    {
      name: 'Building Scalable Systems',
      issuer: 'IBM Skills',
      date: 'Jan 2020',
      icon: '🏆'
    }
  ];
  
  strengths: Strength[] = [
    {
      name: 'Problem Solving',
      description: 'Analytical approach to complex challenges with creative solutions and attention to detail.',
      icon: '🧩'
    },
    {
      name: 'Communication',
      description: 'Ability to clearly explain technical concepts to both technical and non-technical stakeholders.',
      icon: '💬'
    },
    {
      name: 'Adaptability',
      description: 'Quick to learn new technologies and methodologies as industry standards evolve.',
      icon: '🔄'
    }
  ];
}