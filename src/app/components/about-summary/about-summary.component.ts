import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-summary">
      <div class="about-image">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGA9Vi0OnD_XA/profile-displayphoto-shrink_400_400/B4DZcA3sSTHsAg-/0/1748066289249?e=1753315200&v=beta&t=pZienq4xLZQloUgA2D5WxTxcgPvblV7_hvMlM9JsYGY" alt="Gaurav Talele" />
        <!-- If this does not work, try src="assets/gt-pp.jpg" -->
      </div>
      <div class="about-content">
        <h3>Who am I?</h3>
        <p>
          I'm a passionate Java Full Stack Software Engineer with 8 years of experience building robust web and mobile 
          applications. My expertise spans across the entire development lifecycle, from concept and design to 
          implementation and maintenance.
        </p>
        <p>
          I specialize in creating scalable solutions using modern technologies and best practices. 
          With a strong foundation in both frontend and backend development, I deliver high-performance, 
          accessible, and user-friendly applications.
        </p>
        <div class="about-highlights">
          <div class="highlight">
            <h4>Problem Solver</h4>
            <p>I approach complex challenges with analytical thinking and creative solutions.</p>
          </div>
          <div class="highlight">
            <h4>Continuous Learner</h4>
            <p>I consistently explore new technologies and methodologies to stay current and innovative.</p>
          </div>
          <div class="highlight">
            <h4>Team Player</h4>
            <p>I thrive in collaborative environments and effectively communicate technical concepts.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-summary {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: var(--spacing-5);
      align-items: center;
    }
    
    .about-image {
      position: relative;
    }
    
    .about-image::before {
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      width: 100%;
      height: 100%;
      border: 2px solid var(--primary-color);
      z-index: -1;
      transition: transform var(--transition-normal);
    }
    
    .about-image:hover::before {
      transform: translate(10px, 10px);
    }
    
    .about-image img {
      width: 100%;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
    }
    
    .about-content h3 {
      margin-bottom: var(--spacing-3);
      color: var(--primary-dark);
      position: relative;
      display: inline-block;
    }
    
    .about-content h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
    }
    
    .about-content p {
      margin-bottom: var(--spacing-2);
      line-height: 1.6;
    }
    
    .about-highlights {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-3);
      margin-top: var(--spacing-4);
    }
    
    .highlight {
      padding: var(--spacing-3);
      background-color: var(--bg-light);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }
    
    .highlight:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .highlight h4 {
      color: var(--primary-color);
      margin-bottom: var(--spacing-1);
      font-size: 1.1rem;
    }
    
    .highlight p {
      font-size: 0.9rem;
      margin-bottom: 0;
      color: var(--text-muted);
    }
    
    @media (max-width: 992px) {
      .about-highlights {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }
    
    @media (max-width: 768px) {
      .about-summary {
        grid-template-columns: 1fr;
      }
      
      .about-image {
        max-width: 350px;
        margin: 0 auto var(--spacing-4);
      }
    }
  `]
})
export class AboutSummaryComponent {}