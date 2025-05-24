import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="intro slide-up">
            <span class="greeting">Hello, I'm</span>
            <h1>Gaurav Talele</h1>
            <h2 class="profession">Java Full Stack Software Engineer</h2>
          </div>
          
          <p class="description slide-up">
            With 8+ years of technology experience, I am currently associated with <b>Bank of New York Mellon</b>. which is one of the biggest investment banks in the world. before this, I was associated with <b>India's Central Bank</b> that is Reserve Bank, where I have contributed to national causes. As a Technologist in both the <b>Application Development</b> and <b>DevOps</b> space, <b>I have a penchant for creating enterprise-ready, scalable solutions employing cutting-edge technology.</b> Through project-based learning and hands-on experience, I was able to explore innovative ideas and technologies thanks to my skill-based degree, which has given me the mindset and personality of a future Technical Architect.
          </p>
          
          <div class="cta-buttons slide-up">
            <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
            <a routerLink="/projects" class="btn btn-outline">View My Work</a>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">8+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat-number">10+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
              <span class="stat-number">5+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div class="hero-image fade-in">
          <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg" alt="Gaurav Talele" />
          <div class="backdrop"></div>
        </div>
      </div>
      
      <div class="hero-scroll">
        <a href="#about-summary" aria-label="Scroll down">
          <div class="scroll-icon">
            <span></span>
          </div>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background-color: var(--bg-light-alt);
    }
    
    .hero-container {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      gap: var(--spacing-5);
    }
    
    .hero-content {
      z-index: 1;
    }
    
    .greeting {
      display: inline-block;
      font-size: 1.2rem;
      color: var(--primary-color);
      margin-bottom: var(--spacing-1);
      position: relative;
      padding-left: 30px;
    }
    
    .greeting::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 20px;
      height: 2px;
      background-color: var(--primary-color);
      transform: translateY(-50%);
    }
    
    h1 {
      font-size: 4rem;
      margin-bottom: var(--spacing-1);
      color: var(--text-dark);
    }
    
    .profession {
      font-size: 2.5rem;
      color: var(--text-muted);
      margin-bottom: var(--spacing-3);
      font-weight: 500;
    }
    
    .description {
      font-size: 1.1rem;
      max-width: 600px;
      margin-bottom: var(--spacing-4);
      color: var(--text-dark);
      line-height: 1.6;
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-5);
    }
    
    .cta-buttons .btn {
      padding: 12px 24px;
      font-size: 1rem;
    }
    
    .hero-stats {
      display: flex;
      gap: var(--spacing-5);
    }
    
    .stat {
      display: flex;
      flex-direction: column;
    }
    
    .stat-number {
      font-family: 'Poppins', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .stat-label {
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    .hero-image {
      position: relative;
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(var(--primary-color-rgb), 0.1), rgba(var(--primary-color-rgb), 0));
    }
    
    .hero-scroll {
      position: absolute;
      bottom: var(--spacing-4);
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    
    .scroll-icon {
      width: 30px;
      height: 50px;
      border: 2px solid var(--text-dark);
      border-radius: 15px;
      position: relative;
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
    
    .scroll-icon span {
      width: 6px;
      height: 6px;
      background-color: var(--text-dark);
      border-radius: 50%;
      position: absolute;
      top: 10px;
      animation: scrollAnimation 1.5s infinite;
    }
    
    @keyframes scrollAnimation {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }
    
    @media (max-width: 992px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: var(--spacing-5);
      }
      
      .hero-image {
        max-width: 450px;
        margin: 0 auto;
        order: -1;
        margin-bottom: var(--spacing-4);
      }
      
      .greeting {
        padding-left: 0;
      }
      
      .greeting::before {
        display: none;
      }
      
      .description {
        margin: 0 auto var(--spacing-4);
      }
      
      .cta-buttons {
        justify-content: center;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      h1 {
        font-size: 3rem;
      }
      
      .profession {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 576px) {
      .hero {
        min-height: 90vh;
      }
      
      h1 {
        font-size: 2.5rem;
      }
      
      .profession {
        font-size: 1.5rem;
      }
      
      .hero-stats {
        gap: var(--spacing-3);
      }
      
      .stat-number {
        font-size: 2rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        gap: var(--spacing-2);
        width: 100%;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `]
})
export class HeroSectionComponent {}