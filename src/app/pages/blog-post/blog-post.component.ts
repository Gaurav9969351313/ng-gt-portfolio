import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../../services/blog.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownModule],
  template: `
    <div class="page-header">
      <div class="container">
        <a routerLink="/blog" class="back-link">
          ← Back to Blog
        </a>
        <h1 *ngIf="blogPost">{{ blogPost.title }}</h1>
        <div class="post-meta" *ngIf="blogPost">
          <span class="post-date">{{ formatDate(blogPost.date) }}</span>
          <div class="post-tags">
            <span *ngFor="let tag of blogPost.tags">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <section class="section" *ngIf="blogPost">
      <div class="container">
        <div class="blog-post">
          <div class="featured-image">
            <img [src]="blogPost.imageUrl" [alt]="blogPost.title">
          </div>
          
          <div class="post-content">
            <markdown [data]="blogPost.content"></markdown>
          </div>
          
          <div class="share-post">
            <h3>Share this post</h3>
            <div class="social-links">
              <!-- <a href="#" aria-label="Share on Twitter">Twitter</a> -->
              <a href="https://www.linkedin.com/in/gaurav9969351313/" aria-label="Share on LinkedIn">LinkedIn</a>
              <!-- <a href="#" aria-label="Share on Facebook">Facebook</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light" *ngIf="relatedPosts.length > 0">
      <div class="container">
        <h2 class="section-title">Related Posts</h2>
        
        <div class="related-posts">
          <div class="related-post" *ngFor="let post of relatedPosts">
            <a [routerLink]="['/blog', post.id]" class="related-post-link">
              <div class="related-post-image">
                <img [src]="post.imageUrl" [alt]="post.title">
              </div>
              <h3>{{ post.title }}</h3>
              <span class="related-post-date">{{ formatDate(post.date) }}</span>
            </a>
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
    
    .back-link {
      display: inline-block;
      color: var(--primary-light);
      margin-bottom: var(--spacing-3);
      font-weight: 500;
      transition: transform var(--transition-normal);
    }
    
    .back-link:hover {
      transform: translateX(-5px);
    }
    
    .page-header h1 {
      color: var(--text-light);
      margin-bottom: var(--spacing-2);
    }
    
    .post-meta {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }
    
    .post-date {
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    
    .post-tags {
      display: flex;
      gap: var(--spacing-1);
    }
    
    .post-tags span {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--text-light);
      padding: 3px 10px;
      border-radius: 15px;
      font-size: 0.8rem;
    }
    
    .blog-post {
      background-color: var(--bg-light);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }
    
    .featured-image {
      width: 100%;
      height: 400px;
    }
    
    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .post-content {
      padding: var(--spacing-4);
    }
    
    .post-content ::ng-deep h1 {
      font-size: 2rem;
      margin-bottom: var(--spacing-3);
      color: var(--text-dark);
    }
    
    .post-content ::ng-deep h2 {
      font-size: 1.5rem;
      margin: var(--spacing-4) 0 var(--spacing-2);
      color: var(--text-dark);
    }
    
    .post-content ::ng-deep h3 {
      font-size: 1.25rem;
      margin: var(--spacing-3) 0 var(--spacing-2);
      color: var(--text-dark);
    }
    
    .post-content ::ng-deep p {
      margin-bottom: var(--spacing-3);
      line-height: 1.7;
      color: var(--text-dark);
    }
    
    .post-content ::ng-deep ul,
    .post-content ::ng-deep ol {
      margin-bottom: var(--spacing-3);
      padding-left: var(--spacing-4);
    }
    
    .post-content ::ng-deep li {
      margin-bottom: var(--spacing-1);
    }
    
    .post-content ::ng-deep code {
      background-color: #f5f5f5;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
      font-size: 0.9em;
    }
    
    .post-content ::ng-deep pre {
      background-color: #f5f5f5;
      padding: var(--spacing-3);
      border-radius: var(--border-radius-md);
      overflow-x: auto;
      margin-bottom: var(--spacing-3);
    }
    
    .post-content ::ng-deep pre code {
      background-color: transparent;
      padding: 0;
    }
    
    .share-post {
      padding: var(--spacing-3);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .share-post h3 {
      margin-bottom: var(--spacing-2);
    }
    
    .social-links {
      display: flex;
      gap: var(--spacing-2);
    }
    
    .social-links a {
      display: inline-block;
      padding: 8px 16px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      border-radius: var(--border-radius-md);
      transition: background-color var(--transition-normal);
    }
    
    .social-links a:hover {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
    
    .bg-light {
      background-color: var(--bg-light-alt);
    }
    
    .related-posts {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-3);
    }
    
    .related-post {
      background-color: var(--bg-light);
      border-radius: var(--border-radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal);
    }
    
    .related-post:hover {
      transform: translateY(-5px);
    }
    
    .related-post-link {
      display: block;
      color: inherit;
      text-decoration: none;
    }
    
    .related-post-image {
      height: 150px;
      overflow: hidden;
    }
    
    .related-post-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-normal);
    }
    
    .related-post:hover .related-post-image img {
      transform: scale(1.05);
    }
    
    .related-post h3 {
      padding: var(--spacing-2) var(--spacing-2) 0;
      margin-bottom: var(--spacing-1);
      font-size: 1.1rem;
      color: var(--text-dark);
    }
    
    .related-post-date {
      display: block;
      padding: 0 var(--spacing-2) var(--spacing-2);
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    
    @media (max-width: 992px) {
      .related-posts {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .featured-image {
        height: 300px;
      }
    }
    
    @media (max-width: 576px) {
      .related-posts {
        grid-template-columns: 1fr;
      }
      
      .post-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-1);
      }
      
      .featured-image {
        height: 200px;
      }
    }
  `]
})
export class BlogPostComponent implements OnInit {
  blogPost: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadBlogPost(id);
      }
    });
  }
  
  loadBlogPost(id: string): void {
    this.blogService.getBlogById(id).subscribe(post => {
      this.blogPost = post;
      
      if (post) {
        // Find related posts (posts with at least one matching tag)
        this.blogService.getBlogs().subscribe(allPosts => {
          this.relatedPosts = allPosts
            .filter(relatedPost => 
              relatedPost.id !== post.id && 
              relatedPost.tags.some(tag => post.tags.includes(tag))
            )
            .slice(0, 3); // Limit to 3 related posts
        });
      }
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