import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // In a real application, these would be loaded from an API or Markdown files
  private blogs: BlogPost[] = [
    {
      id: 'getting-started-with-angular',
      title: 'Getting Started with Angular',
      date: '2023-06-15',
      summary: 'A beginner-friendly guide to starting your first Angular project.',
      content: `# Getting Started with Angular
      
Angular is a powerful front-end framework for building modern web applications. In this blog post, I'll guide you through setting up your first Angular project.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

To install Angular CLI, run the following command:

\`\`\`bash
npm install -g @angular/cli
\`\`\`

## Creating a New Project

Once the Angular CLI is installed, you can create a new project:

\`\`\`bash
ng new my-app
\`\`\`

Follow the prompts to configure your project.

## Running Your Application

Navigate to your project directory and start the development server:

\`\`\`bash
cd my-app
ng serve
\`\`\`

Your application will be available at http://localhost:4200.

## Next Steps

Now that you have your Angular application running, explore the following:
- Components and Templates
- Services and Dependency Injection
- Routing
- Forms

Happy coding!`,
      tags: ['Angular', 'Web Development', 'Tutorial'],
      imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
    },
    {
      id: 'typescript-vs-javascript',
      title: 'TypeScript vs JavaScript: When to Use Each',
      date: '2023-07-21',
      summary: 'A comparison of TypeScript and JavaScript, exploring their strengths and ideal use cases.',
      content: `# TypeScript vs JavaScript: When to Use Each

As a developer, choosing between TypeScript and JavaScript for your project is an important decision. This article explores the key differences and helps you make an informed choice.

## JavaScript: The Universal Language of the Web

JavaScript is the native language of web browsers and has several advantages:

- **No Compilation Step**: Write and run immediately
- **Universal Support**: Works in all browsers without transpilation
- **Flexibility**: Dynamic typing allows for rapid prototyping

## TypeScript: JavaScript with Superpowers

TypeScript adds static typing and other features to enhance JavaScript:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete and intellisense
- **Enterprise Readiness**: Scales better with large codebases

## When to Choose JavaScript

JavaScript might be the better choice when:

- Building small projects or prototypes
- Working with a team unfamiliar with TypeScript
- Maximum browser compatibility is required without build steps

## When to Choose TypeScript

TypeScript shines in these scenarios:

- Large applications with multiple developers
- Projects that will be maintained long-term
- When working with complex data structures

## Conclusion

Both languages have their place in modern web development. JavaScript offers simplicity and universal compatibility, while TypeScript provides robustness and maintainability for larger projects.

The good news is that transitioning between them is relatively straightforward, as TypeScript is a superset of JavaScript.`,
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      imageUrl: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg'
    },
    {
      id: 'responsive-design-principles',
      title: 'Responsive Design Principles for Modern Web Applications',
      date: '2023-08-10',
      summary: 'Learn the core principles of responsive design to create web applications that work beautifully across all devices.',
      content: `# Responsive Design Principles for Modern Web Applications

Creating web applications that provide an optimal viewing experience across a wide range of devices has become essential. Let's explore the key principles of responsive design.

## Fluid Grids and Layouts

Modern layouts should be built with relative units:

\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  width: calc(33.333% - 20px);
  float: left;
  margin: 10px;
}

@media (max-width: 768px) {
  .column {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .column {
    width: 100%;
  }
}
\`\`\`

## Flexible Images

Images should adapt to their containers:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

## Media Queries

Use media queries to apply different styles based on device characteristics:

\`\`\`css
/* Base styles for all devices */
body {
  font-size: 16px;
  line-height: 1.5;
}

/* Tablets */
@media (max-width: 992px) {
  body {
    font-size: 14px;
  }
}

/* Mobile phones */
@media (max-width: 576px) {
  body {
    font-size: 12px;
  }
}
\`\`\`

## Mobile-First Approach

Start with styles for mobile devices, then enhance for larger screens:

\`\`\`css
/* Mobile styles (default) */
.nav-menu {
  display: none;
}

.nav-toggle {
  display: block;
}

/* Desktop styles */
@media (min-width: 992px) {
  .nav-menu {
    display: flex;
  }
  
  .nav-toggle {
    display: none;
  }
}
\`\`\`

## Testing on Real Devices

While browser dev tools are valuable, nothing replaces testing on actual devices. Consider various:

- Screen sizes and resolutions
- Touch capabilities
- Network conditions
- Browser versions

## Performance Considerations

Responsive design isn't just about layout—performance matters too:

- Optimize images using responsive images techniques
- Minimize CSS and JavaScript
- Use system fonts when possible
- Consider lazy-loading for content below the fold

By applying these principles, you can create web applications that provide an excellent user experience across all devices—from smartphones to large desktop monitors.`,
      tags: ['CSS', 'Responsive Design', 'Web Development'],
      imageUrl: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg'
    }
  ];

  constructor(private http: HttpClient) {}
  
  getBlogs(): Observable<BlogPost[]> {
    // In a real application, this would fetch from an API
    return of(this.blogs);
  }
  
  getBlogById(id: string): Observable<BlogPost | undefined> {
    // In a real application, this would fetch a specific blog from an API
    return of(this.blogs.find(blog => blog.id === id));
  }
  
  // For a real application, you could load Markdown files from assets
  // loadMarkdownFile(filename: string): Observable<string> {
  //   return this.http.get(`assets/blogs/${filename}.md`, { responseType: 'text' })
  //     .pipe(
  //       catchError(() => of('# Blog post not found'))
  //     );
  // }
}