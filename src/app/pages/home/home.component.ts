import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSummaryComponent } from '../../components/about-summary/about-summary.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { AwardsComponent } from '../../components/awards/awards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    HeroSectionComponent,
    AboutSummaryComponent,
    TimelineComponent,
    ProjectCardComponent,
    SkillsComponent,
    TestimonialComponent,
    ContactFormComponent,
    AwardsComponent
  ],
  template: `
    <app-hero-section></app-hero-section>
    
    <section id="about-summary" class="section">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <app-about-summary></app-about-summary>
        <div class="text-center" style="margin-top: var(--spacing-4);">
          <a routerLink="/about" class="btn btn-outline">Learn More About Me</a>
        </div>
      </div>
    </section>
    
    <section id="career-journey" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Career Journey</h2>
        <app-timeline></app-timeline>
        <div class="text-center" style="margin-top: var(--spacing-4);">
          <a routerLink="/experience" class="btn btn-outline">View Full Experience</a>
        </div>
      </div>
    </section>
    
    <!-- <section id="featured-projects" class="section">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid grid-3">
          <app-project-card 
            *ngFor="let project of featuredProjects" 
            [project]="project">
          </app-project-card>
        </div>
        <div class="text-center" style="margin-top: var(--spacing-4);">
          <a routerLink="/projects" class="btn btn-outline">View All Projects</a>
        </div>
      </div>
    </section> -->
    
    <section id="skills-highlights" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Skills Highlights</h2>
        <app-skills [limit]="8"></app-skills>
        <div class="text-center" style="margin-top: var(--spacing-4);">
          <a routerLink="/skills" class="btn btn-outline">View All Skills</a>
        </div>
      </div>
    </section>

    <section id="awards" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Awards & Recognition</h2>
        <app-awards></app-awards>
      </div>
    </section>
    
    <section id="testimonials" class="section">
      <div class="container">
        <h2 class="section-title">What People Say</h2>
        <app-testimonial></app-testimonial>
      </div>
    </section>
    
    <section id="contact" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-container">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries or opportunities.</p>
            <ul class="contact-list">
              <li>
                <i class="icon">📧</i>
                <span>gauravtalele2025&#64;gmail.com</span>
              </li>
              <li>
                <i class="icon">📱</i>
                <span>(+91) 9969351313</span>
              </li>
              <li>
                <i class="icon">📍</i>
                <span>Mumbai, India</span>
              </li>
            </ul>
            <!-- <div class="social-links">
              <a href="https://github.com" target="_blank" aria-label="GitHub">
                <i class="icon">GitHub</i>
              </a>
              <a href="https://www.linkedin.com/in/gaurav9969351313/" target="_blank" aria-label="LinkedIn">
                <i class="icon">LinkedIn</i>
              </a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                <i class="icon">Twitter</i>
              </a>
            </div> -->
          </div>
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-light {
      background-color: var(--bg-light-alt);
    }
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: var(--spacing-4);
    }
    
    .contact-info {
      padding: var(--spacing-3);
    }
    
    .contact-list {
      list-style: none;
      margin: var(--spacing-3) 0;
    }
    
    .contact-list li {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-2);
    }
    
    .contact-list li i {
      margin-right: var(--spacing-2);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 24px;
    }
    
    .social-links {
      display: flex;
      gap: var(--spacing-2);
      margin-top: var(--spacing-3);
    }
    
    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--bg-light);
      color: var(--text-dark);
      transition: background-color var(--transition-normal), color var(--transition-normal);
    }
    
    .social-links a:hover {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
    
    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce solution with cart functionality and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      demoUrl: 'https://demo-taskmanager.example.com',
      githubUrl: 'https://github.com/example/taskmanager'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A messaging platform with real-time updates and user presence indicators.',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg',
      technologies: ['Angular', 'Socket.io', 'Express', 'MongoDB'],
      demoUrl: 'https://demo-chatapp.example.com',
      githubUrl: 'https://github.com/example/chatapp'
    }
  ];
}