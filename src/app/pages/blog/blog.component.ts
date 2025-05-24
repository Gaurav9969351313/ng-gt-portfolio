import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Blog</h1>
        <p>Thoughts, tutorials, and insights on software development</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="blog-list">
          <div class="blog-card" *ngFor="let post of blogPosts">
            <div class="blog-image">
              <img [src]="post.imageUrl" [alt]="post.title">
            </div>
            
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ formatDate(post.date) }}</span>
              </div>
              
              <h2 class="blog-title">{{ post.title }}</h2>
              <p class="blog-summary">{{ post.summary }}</p>
              <div class="blog-tags">
                <span *ngFor="let tag of post.tags">{{ tag }}</span>
              </div>
              
              <a [routerLink]="['/blog', post.id]" class="read-more" style="align-self: flex-end;">
                Read More
                <span class="arrow">→</span>
              </a>
            </div>
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
    
    .blog-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--spacing-4);
    }
    
    .blog-card {
      overflow: hidden;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      background-color: var(--bg-light);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
      display: flex;
      flex-direction: column;
    }
    
    .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
    
    .blog-image {
      height: 200px;
      overflow: hidden;
    }
    
    .blog-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .blog-card:hover .blog-image img {
      transform: scale(1.05);
    }
    
    .blog-content {
      padding: var(--spacing-3);
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-2);
    }
    
    .blog-date {
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    .blog-tags {
      display: flex;
      gap: var(--spacing-1);
    }
    
    .blog-tags span {
      background-color: var(--gray-500); /* Set fill color to gray */
      color: var(--primary-dark); /* Updated font color to dark blue */
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--primary-color); /* Add a colored border */
      transition: background-color var(--transition-normal), transform var(--transition-normal);
    }
    
    .blog-tags span:hover {
      background-color: var(--gray-600); /* Slightly darker gray on hover */
      transform: translateY(-2px);
    }
    
    .blog-title {
      font-size: 1.4rem;
      margin-bottom: var(--spacing-2);
      color: var(--text-dark);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .blog-summary {
      color: var(--text-muted);
      margin-bottom: var(--spacing-3);
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .read-more {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--primary-color);
      font-weight: 500;
      text-decoration: none;
      transition: gap var(--transition-normal);
      align-self: flex-start;
    }
    
    .read-more:hover {
      gap: 10px;
    }
    
    .arrow {
      transition: transform var(--transition-normal);
    }
    
    .read-more:hover .arrow {
      transform: translateX(3px);
    }
    
    @media (max-width: 992px) {
      .blog-list {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    }
    
    @media (max-width: 576px) {
      .blog-list {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  
  constructor(private blogService: BlogService) {}
  
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogPosts = blogs;
    });
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}