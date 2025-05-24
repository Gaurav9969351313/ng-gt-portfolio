import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  relationship: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial-container">
      <div class="testimonial-slider" #slider>
        <div class="testimonial-slide" *ngFor="let testimonial of testimonials; let i = index" [class.active]="currentIndex === i">
          <div class="testimonial-content">
            <div class="testimonial-quote">
              <svg class="quote-icon" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M10 11H6.21C7.04 9.83 8.5 8 10 8V6C7 6 4 9 4 13V18H10V11ZM20 11H16.21C17.04 9.83 18.5 8 20 8V6C17 6 14 9 14 13V18H20V11Z" fill="currentColor"/>
              </svg>
              <p>{{ testimonial.quote }}</p>
            
            
            <div class="testimonial-author">
              <img [src]="testimonial.avatar" [alt]="testimonial.name" class="author-image">
              <div class="author-info">
                <h4 class="author-name">{{ testimonial.name }}</h4>
                <p class="author-title">{{ testimonial.position }} at {{ testimonial.company }}</p>
                <span class="author-relation">{{ testimonial.relationship }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div class="testimonial-controls">
        <button 
          class="control-btn prev" 
          (click)="prevSlide()" 
          [disabled]="currentIndex === 0"
          aria-label="Previous testimonial">
          ←
        </button>
        
        <div class="testimonial-dots">
          <span 
            *ngFor="let testimonial of testimonials; let i = index" 
            class="dot"
            [class.active]="currentIndex === i"
            (click)="goToSlide(i)">
          </span>
        </div>
        
        <button 
          class="control-btn next" 
          (click)="nextSlide()" 
          [disabled]="currentIndex === testimonials.length - 1"
          aria-label="Next testimonial">
          →
        </button>
      </div>
    </div>
  `,
  styles: [`
    .testimonial-container {
      width: 100%;
      max-width: 1300px; /* Increase the maximum width of the carousel */
      margin: 0 auto;
      position: relative;
    }
    
    .testimonial-slider {
      position: relative;
      height: 450px;
      overflow: hidden;
    }
    
    .testimonial-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateX(50px);
      transition: all var(--transition-normal);
      visibility: hidden;
    }
    
    .testimonial-slide.active {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
    
    .testimonial-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center; /* Center-align text for a clean layout */
      margin-bottom: var(--space-3); /* Add spacing below content */
    }
    
    .testimonial-quote {
      position: relative;
      background-color: var(--bg-light);
      padding: var(--spacing-6); /* Increase padding for better spacing */
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      margin-bottom: var(--spacing-4);
    }
    
    .quote-icon {
      color: var(--primary-light);
      opacity: 0.2;
      width: 48px;
      height: 48px;
      position: absolute;
      top: 15px;
      left: 15px;
    }
    
    .testimonial-quote p {
      font-style: italic;
      font-size: 1.1rem;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }
    
    .testimonial-author {
      display: flex;
      flex-direction: column; /* Stack author details vertically */
      align-items: center; /* Center align author details */
      gap: var(--space-2); /* Add spacing between elements */
      background-color: #f9fafb; /* Light background for contrast */
      padding: var(--space-3);
      border-top: 1px solid var(--gray-300); /* Subtle border for separation */
    }
    
    .testimonial-author img {
      width: 80px; /* Larger image for better visibility */
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary); /* Cleaner border */
    }
    
    .author-info {
      text-align: center; /* Center-align author details */
    }
    
    .author-info h4 {
      margin: 0 0 5px 0;
      font-size: 1.2rem; /* Larger font for emphasis */
      font-weight: bold; /* Bold for prominence */
      color: var(--gray-900);
    }
    
    .author-info p {
      margin: 0 0 5px 0;
      color: var(--gray-700);
      font-size: 1rem; /* Slightly larger font */
      margin: 4px 0; /* Add spacing around title */
    }
    
    .relationship {
      color: var(--primary);
      font-weight: 600;
      font-size: 0.9rem; /* Adjust font size for balance */
    }
    
    .testimonial-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: var(--spacing-4);
      gap: var(--spacing-2);
    }
    
    .control-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: var(--bg-light);
      color: var(--text-dark);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-normal);
      font-size: 1.2rem;
    }
    
    .control-btn:hover:not(:disabled) {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
    
    .control-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .testimonial-dots {
      display: flex;
      gap: 8px;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--bg-light);
      border: 1px solid var(--primary-color);
      cursor: pointer;
      transition: all var(--transition-normal);
    }
    
    .dot.active {
      background-color: var(--primary-color);
      transform: scale(1.2);
    }
    
    @media (max-width: 576px) {
      .testimonial-slider {
        height: 350px;
      }
      
      .testimonial-author {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class TestimonialComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef;
  
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Arindam Bandyopadhyay',
      position: 'QA Engineer',
      company: 'Bank Of New York Mellon, Pune',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGA53gQ1gzGCg/profile-displayphoto-shrink_100_100/B56ZWJedrwGUAU-/0/1741768220755?e=1752710400&v=beta&t=4mKlj19lPenIyR_EZY1mYmCsCMxOTJYzOaV4o6J1LxQ',
      quote: 'I’ve had the pleasure of working with Gaurav for several years while working at BNY, and his skills as a Java full-stack developer are exceptional. I can confidently say that he is a true polyglot developer. He has mastered not only Java but also a range of other technologies, enabling him to solve complex challenges across various tech stacks. With 8 years of experience, he brings strong technical knowledge and always finds the best-fit solutions to complex problems. As a team leader, Gaurav is efficient, organized, and knows how to guide the team toward success. He is always the go-to person for advice or any kind of troubleshooting and ensures projects run smoothly. Gaurav combines strategic thinking with deep technical understanding, making him an invaluable asset to any team or project. I highly recommend him!',
      relationship: 'Colleague'
    },
    {
      id: 2,
      name: 'Kanchan Durgapal',
      position: 'Manager',
      company: 'Capgemini Technology, Mumbai',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQFHqgPcPaKIbg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517394554376?e=1752710400&v=beta&t=a_-V5Qg-YjjZFS0fBBBc-stBwd4QK4CjDmPmhdaEkSk',
      quote: 'I had the pleasure of working with Gaurav for 2 years, where his 5+ years of Java Full Stack experience truly stood out. As a team Lead for a group of 3, He excelled in managing tasks, providing accurate project estimates, and ensuring timely delivery. His deep technical knowledge of Java, paired with strong problem-solving skills, allowed him to guide the team through complex challenges efficiently. Gaurav is a natural leader, fostering team collaboration while mentoring junior developers. His proactive approach and technical expertise make him an invaluable asset to any project or team. I highly recommend Gaurav.',
      relationship: 'Manager'
    },
    {
      id: 3,
      name: 'Shukti Sarwade',
      position: 'Lead Technical Architect',
      company: 'Reserve Bank Information Technology Pvt Ltd., Mumbai',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQHuVRMiL3Vz3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517515983857?e=1752710400&v=beta&t=Qxv7FfJ4at_LEppk1CAMVklgnBzsiMk6iudos3D35gw',
      quote: 'I highly recommend Gaurav as a senior Full Stack Java Engineer. I had the pleasure of working with Gaurav on several projects and was consistently impressed with his level of expertise and experience in the field. Gaurav is a true master of his craft, with a deep understanding of Java, Spring, and Angular, as well as a strong background in software architecture and design. He is able to handle complex projects with ease and is always willing to go the extra mile to ensure that the job is done right. In addition to his technical skills, Gaurav is an excellent communicator and leader. He is able to guide and mentor junior developers, and can work effectively with cross-functional teams. He also adept at collaborating with stakeholders and clients to understand their needs and deliver solutions that exceed expectations.I highly recommend Gaurav for any organization looking for a senior full stack Java engineer. He will be an invaluable asset to any team and will help drive the success of any project he is a part of.',
      relationship: 'Manager'
    },
    {
      id: 4,
      name: 'Shantanu Kumar Behera',
      position:'Scrum Master',
      quote:'I really appreciate the zeal and enthusiasm Gaurav carry towards his activities. The way he considers the assignments given and ensure to complete them in the best possible way is really commendable. He has a right attitude which any manager or even a team member would like someone to have whom they are partnered with on any project. Gaurav has proven himself on the project we had worked on and been a quick learner grasping new areas of knowledge and agile enough to accept the challenging situations on the project. I am sure the team members working alongside with him will have the same views about him.',
      avatar:'https://media.licdn.com/dms/image/v2/C4E03AQEWDEDP1czXow/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516494877798?e=1752710400&v=beta&t=2GYjB3sn5UdXwLS_6pf_LHGX6QSew4j9p4sqhb0C6j4',
      company:'Reserve Bank Information Technology Pvt Ltd., Mumbai',
      relationship:'Scrum Master'
    },
    {
      id: 5,
      name: 'Dr. Deepnarayan Tiwari',
      position:'Senior Lead Developer ',
      company:'Reserve Bank Information Technology Pvt Ltd., Mumbai',
      avatar:'https://media.licdn.com/dms/image/v2/C4D03AQH9AeMG-Hj3CQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516844003630?e=1752710400&v=beta&t=SUaIxYCguQsV90InzVG7FNorjdLWoOgWCZHNqTHhlk0',
      quote:'I had the pleasure to work with Gaurav at Reserve Bank of Information technology. he is a creative and multi-talented guy who brings a lot of thinking and humor to the workplace. he always keeps himself busy exploring new things and having a team-friendly positive attitude. He has an excellent sense of accountability for his work and constantly delivers quality work in a deadline-driven environment. Gaurav is a great guy to work with and earns my highest recommendation.',
      relationship: 'Senior Lead Developer'
    },
    {
      id: 6,
      name: 'Waman Yewle ',
      position:'Technical Lead (Cloud & Data Engineering)',
      company:'Mahindra and Mahindra, Mumbai',
      avatar:'https://media.licdn.com/dms/image/v2/D4D03AQFbAx1Pzm04bg/profile-displayphoto-shrink_100_100/B4DZREIeaeG4AY-/0/1736309860895?e=1752710400&v=beta&t=PtKNx4c1YBaTflhRKcyiPHiACwLk9Dn5nGa7T6ozQrU',
      quote:'Gaurav is a well connected professional that always takes the time to support anyone is his network.He will always go that extra mile to look after and deliver the best. I would also consider him to be a very good friend, and top of my value add list. I recommend Gaurav as a Technology expert to connect with and consider for anything appropriate.',
      relationship:'Collegue'
    },
    {
      id: 7,
      name: 'Ajay Dubey',
      position:'Technical Specialist II ',
      company:'Mahindra and Mahindra, Mumbai',
      avatar:'https://media.licdn.com/dms/image/v2/D4D03AQG-MmBvTDb5ng/profile-displayphoto-shrink_400_400/B4DZZPIgDGHAAg-/0/1745084351118?e=1752710400&v=beta&t=hb304FVdR3s12Gu2Tf3NcqsLcPV1_ziEjZxVFiqGbyY',
      quote:'Gaurav is a goal oriented engineer. He is a proactive and very good team player. He is ready to deal with difficult situations and solve the problems on time also was highly effective in coming up with an exhaustive list of test cases and situations. This saved us from production issues and bugs. He has a very positive attitude towards work. I strongly endorse Gaurav.',
      relationship:'Manager'
    },
    {
      id: 8,
      name: 'Ashish Jain',
      position:'Sr. Principal Software Architect',
      company:'63 moons technologies limited, Mumbai',
      avatar:'https://media.licdn.com/dms/image/v2/C4D03AQHlC81_kc40mQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1651310778186?e=1752710400&v=beta&t=DF3XoKos8RTebsO0-WKr6ul_2bGi6UHKG_RtnPx5jF8',
      quote:'I have had a chance to work with Gaurav as his team lead at 63moons and I must say it was great working with him. He is a quick learner with good communication and analytical skills. Also i would like to mention his enthusiasm for learning. He is a go-to person for anything related to angular and C# Web API. He is a creative thinker who possesses a can-do attitude, Gaurav is a pleasure to work with.',
      relationship: 'Manager'
    },
    {
      id: 9,
      name: 'Sharad Kumar Bothra',
      position:'Product Strategist',
      company:'63 moons technologies limited, Mumbai',
      avatar:'https://media.licdn.com/dms/image/v2/D4D03AQGln9NUs9tlNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729440293079?e=1752710400&v=beta&t=riC8auopDApKXCKEtkLXwsjkFPMyzywlE86XoycBwY4',
      quote:'Gaurav is quite innovative, quick learner and enterprising in his approach. Completely dependable and extremely passionate in his work, he is an absolute winner to have in a team. He would be a coveted asset for any company that he works for. It was an absolute pleasure working with him.',
      relationship:'Manager'
    }
  ];
  
  currentIndex = 0;
  intervalId: any;
  
  ngAfterViewInit() {
    this.startAutoSlide();
  }
  
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.testimonials.length - 1) {
        this.nextSlide();
      } else {
        this.currentIndex = 0;
      }
    }, 5000);
  }
  
  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  prevSlide() {
    this.stopAutoSlide();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.startAutoSlide();
  }
  
  nextSlide() {
    this.stopAutoSlide();
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
    this.startAutoSlide();
  }
  
  goToSlide(index: number) {
    this.stopAutoSlide();
    this.currentIndex = index;
    this.startAutoSlide();
  }
}