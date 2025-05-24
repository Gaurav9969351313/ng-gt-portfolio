import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>Gaurav Talele</h3>
            <p>Java Full Stack Software Engineer</p>
            <p class="email">gauravtalele2025&#64;gmail.com</p>
          </div>
          
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/blog">Blog</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <div class="social-links">
            <a href="https://www.linkedin.com/in/gaurav9969351313/" target="_blank" aria-label="LinkedIn">
              <i class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </i>
            </a>
            <a href="https://github.com/Gaurav9969351313" target="_blank" aria-label="GitHub">
              <i class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </i>
            </a>
            <a href="https://twitter.com/Gaurav9969351313" target="_blank" aria-label="Twitter">
              <i class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </i>
            </a>
          </div>
          </div>

        </div>
            
        
        
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--bg-dark);
      color: var(--text-light);
      padding: var(--spacing-2) 0;
      margin-top: var(--spacing-6);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-4);
    }
    
    .footer-info h3 {
      margin-bottom: var(--spacing-1);
      color: var(--text-light);
    }
    
    .footer-info p {
      color: var(--text-muted);
      margin-bottom: var(--spacing-1);
    }
    
    .email {
      color: var(--primary-light) !important;
    }
    
    .footer-links h4, .footer-social h4 {
      color: var(--text-light);
      margin-bottom: var(--spacing-2);
      position: relative;
    }
    
    .footer-links h4::after, .footer-social h4::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: var(--primary-color);
    }
    
    .footer-links ul {
      list-style: none;
    }
    
    .footer-links ul li {
      margin-bottom: var(--spacing-1);
    }
    
    .footer-links ul li a {
      color: var(--text-muted);
      transition: color var(--transition-fast);
    }
    
    .footer-links ul li a:hover {
      color: var(--primary-light);
    }
    
    .social-links {
      display: flex;
      gap: var(--spacing-2);
    }
    
    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      color: var(--text-light);
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: background-color var(--transition-normal);
      margin: 0 10px; /* Add horizontal spacing between icons */
    }
    
    .social-links a:hover {
      background-color: var(--primary-color);
    }
    
    .footer-bottom {
      display: flex;
      justify-content: center; /* Center the text horizontally */
      align-items: center; /* Center the text vertically */
      width: 100%; /* Make it full width */
      background-color: var(--primary-dark); /* Retain the background color */
      color: var(--text-light);
      font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-3);
        text-align: center;
      }
      
      .footer-links h4::after, .footer-social h4::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .social-links {
        justify-content: center;
      }
      
      .footer-bottom {
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-1);
      }
    }

    .social-links {
      display: flex;
      gap: var(--space-2);
    }
    
    .social-links a {
      color: white;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .social-links a:hover {
      color: var(--accent);
    }
    
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 576px) {
      .footer-content {
        flex-direction: column;
        gap: var(--space-2);
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}