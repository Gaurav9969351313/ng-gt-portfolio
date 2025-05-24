import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Contact Me</h1>
        <p>Get in touch with me for opportunities, collaborations, or questions</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="contact-page-container">
          <div class="contact-info">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects, partnerships, or just having a chat about technology.</p>
            
            <div class="info-group">
              <h3>Contact Information</h3>
              <ul class="contact-list">
                <li>
                  <i class="icon">📧</i>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:gauravtalele2025@gmail.com">gauravtalele2025&#64;gmail.com</a>
                  </div>
                </li>
                <li>
                  <i class="icon">📱</i>
                  <div>
                    <h4>Phone</h4>
                    <span>(+91) 9969351313</span>
                  </div>
                </li>
                <li>
                  <i class="icon">📍</i>
                  <div>
                    <h4>Location</h4>
                    <span>Mumbai, India</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="info-group">
              <h3>Follow Me</h3>
              <div class="social-links">
                <!-- <a href="https://github.com" target="_blank" aria-label="GitHub">
                  <i class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.774.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.475 5.92.432.372.816 1.102.816 2.222v3.293c0 .32.192.694.8.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </i>
                </a> -->
                <a href="https://www.linkedin.com/in/gaurav9969351313/" target="_blank" aria-label="LinkedIn">
                  <i class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.452 20.452h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z"/>
                    </svg>
                  </i>
                </a>
                <!-- <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <i class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                    </svg>
                  </i>
                </a> -->
              </div>
            </div>
            
            <div class="info-group">
              <h3>Working Hours</h3>
              <p>Monday - Friday: 11:00 AM - 8:00 PM IST</p>
            </div>
          </div>
          
          <div class="contact-form-container">
            <h2>Send Me a Message</h2>
            <app-contact-form></app-contact-form>
          </div>
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
    
    .contact-page-container {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spacing-5);
    }
    
    .contact-info {
      background-color: var(--bg-light);
      padding: var(--spacing-4);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
    }
    
    .contact-info h2 {
      margin-bottom: var(--spacing-3);
      color: var(--text-dark);
    }
    
    .info-group {
      margin-top: var(--spacing-4);
    }
    
    .info-group h3 {
      color: var(--primary-color);
      margin-bottom: var(--spacing-2);
      font-size: 1.2rem;
      position: relative;
    }
    
    .info-group h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--primary-color);
    }
    
    .contact-list {
      list-style: none;
      margin: var(--spacing-3) 0;
    }
    
    .contact-list li {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-3);
    }
    
    .contact-list li i {
      margin-right: var(--spacing-3);
      font-size: 1.5rem;
      color: var(--primary-color);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      border-radius: 50%;
    }
    
    .contact-list li div h4 {
      margin: 0 0 5px 0;
      font-size: 1rem;
      color: var(--text-dark);
    }
    
    .contact-list li div a,
    .contact-list li div span {
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    
    .social-links {
      display: flex;
      gap: var(--spacing-2);
      margin-top: var(--spacing-2);
    }
    
    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: var(--text-light);
      background-color: var(--primary-color);
      transition: background-color var(--transition-normal);
    }
    
    .social-links a:hover {
      background-color: var(--primary-dark);
    }
    
    .contact-form-container h2 {
      margin-bottom: var(--spacing-3);
      color: var(--text-dark);
    }
    
    @media (max-width: 992px) {
      .contact-page-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}