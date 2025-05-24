import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [class.scrolled]="scrolled">
      <div class="container header-container">
        <div class="logo">
          <a routerLink="/">
            <!-- <span class="name">I Learn Everyday</span> -->
            <span class="title">I strive to grow every day, tackle challenges with a positive mindset, and create lasting value in everything I do.</span>
          </a>
        </div>
        
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav [class.open]="menuOpen">
          <ul>
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a></li>
            <li><a routerLink="/experience" routerLinkActive="active" (click)="closeMenu()">Experience</a></li>
            <!-- <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a></li> -->
            <li><a routerLink="/skills" routerLinkActive="active" (click)="closeMenu()">Skills</a></li>
            <li><a routerLink="/blog" routerLinkActive="active" (click)="closeMenu()">Blog</a></li>
            <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a></li>
          </ul>
          
          <a href="assets/files/resume.pdf" download class="btn btn-primary resume-btn">Download Resume</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      background-color: transparent;
      z-index: 1000;
      transition: background-color var(--transition-normal), box-shadow var(--transition-normal);
    }
    
    header.scrolled {
      background-color: var(--bg-light);
      box-shadow: var(--shadow-md);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    
    .logo a {
      display: flex;
      flex-direction: column;
      color: var(--text-dark);
      text-decoration: none;
    }
    
    .logo .name {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
    
    .logo .title {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
    
    nav {
      display: flex;
      align-items: center;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      margin-right: var(--spacing-3);
    }
    
    nav ul li {
      margin: 0 var(--spacing-2);
    }
    
    nav ul li a {
      color: var(--text-dark);
      font-weight: 500;
      text-decoration: none;
      padding: var(--spacing-1) 0;
      position: relative;
    }
    
    nav ul li a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width var(--transition-normal);
    }
    
    nav ul li a:hover::after,
    nav ul li a.active::after {
      width: 100%;
    }
    
    .resume-btn {
      padding: 8px 16px;
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }
    
    .menu-toggle span {
      width: 100%;
      height: 3px;
      background-color: var(--text-dark);
      border-radius: 3px;
      transition: all var(--transition-normal);
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -300px;
        height: 100vh;
        width: 300px;
        background-color: var(--bg-light);
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: right var(--transition-normal);
        box-shadow: var(--shadow-lg);
      }
      
      nav.open {
        right: 0;
      }
      
      nav ul {
        flex-direction: column;
        margin-right: 0;
        width: 100%;
      }
      
      nav ul li {
        margin: var(--spacing-1) 0;
        width: 100%;
        text-align: center;
      }
      
      nav ul li a {
        display: block;
        padding: var(--spacing-2);
      }
      
      .resume-btn {
        margin-top: var(--spacing-3);
      }
    }
  `]
})
export class HeaderComponent {
  scrolled = false;
  menuOpen = false;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMenu() {
    if (this.menuOpen) {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  }
}