import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="container">
        <h1>Work Experience</h1>
        <p>My professional journey and career achievements</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="experience-container">
          <div class="experience-item" *ngFor="let exp of experiences; let isFirst = first" [class.featured]="isFirst">
            <div class="experience-header">
              <h2 class="company-name">{{ exp.company }}</h2>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            
            <div class="role-location">
              <h3 class="job-title">{{ exp.role }}</h3>
              <span class="location">{{ exp.location }}</span>
            </div>
            
            <p class="job-description">{{ exp.description }}</p>
            
            <div class="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
              </ul>
            </div>
            
            <div class="tech-stack">
              <span *ngFor="let tech of exp.technologies">{{ tech }}</span>
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
    
    .experience-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-5);
    }
    
    .experience-item {
      padding: var(--spacing-4);
      background-color: var(--bg-light);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
      border-left: 5px solid var(--text-muted);
      transition: transform var(--transition-normal);
    }
    
    .experience-item:hover {
      transform: translateX(5px);
    }
    
    .experience-item.featured {
      border-left-color: var(--primary-color);
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-2);
    }
    
    .company-name {
      font-size: 1.5rem;
      color: var(--text-dark);
      margin: 0;
    }
    
    .exp-period {
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .role-location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-3);
      border-bottom: 1px solid #eee;
      padding-bottom: var(--spacing-2);
    }
    
    .job-title {
      font-size: 1.2rem;
      margin: 0;
      color: var(--primary-dark);
    }
    
    .location {
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    
    .job-description {
      margin-bottom: var(--spacing-3);
      color: var(--text-dark);
      line-height: 1.6;
    }
    
    .achievements {
      margin-bottom: var(--spacing-3);
    }
    
    .achievements h4 {
      margin-bottom: var(--spacing-2);
      color: var(--text-dark);
    }
    
    .achievements ul {
      padding-left: var(--spacing-3);
      color: var(--text-muted);
    }
    
    .achievements li {
      margin-bottom: var(--spacing-1);
      padding-left: var(--spacing-1);
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-1);
    }
    
    .tech-stack span {
      display: inline-block;
      padding: 6px 12px;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      color: var(--primary-color); /* Set font color to primary color */
      border: 1px solid var(--primary-color); /* Add border with primary color */
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .experience-header,
      .role-location {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .exp-period,
      .location {
        margin-top: var(--spacing-1);
      }
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Bank Of Newyork Mellon',
      role: 'Sr. Java Full Stack Engineer',
      period: 'Jan 2021 - Present',
      location: 'Pune, India',
      description: 'Worlds Largest Custodian Bank Serving Over 240 Years and Counting.',
      achievements: [
        'Worked for SWIFT in the Derivative Margin Management division for the ecosystem of High-Value Bank-to-bank international Payment Transactions.',
        'Designed workflows for MX202, MX210, MX292 where high value bank to bank collateral payments transfers happening for Monthly 20 trillion US Dollars in AUM.',
        'Designed and developed Self Service Portal for Newly edged micro services configurations for multiple clients like Bridge-water, On Core, Gm Agency etc.',
        'Migrated Internal and external portals (Nexus) to latest java JDK.',
        'Designed and developed Apache Camel Based Service for reporting in which the reports will be sent across multiple clients based on a database configuration.',
        'Designed and developed automated settlement workflow for SWIFT payments using IBM MQ messaging Queue for Smart Streams TLM in Cash, Interest, Substitution and Margin Call.',
        'Implemented and created Ansible release automation for 20+ services which significantly reduced the deployment time by 80%.',
        'Implemented CICD pipeline for Snowflake using GitLab enterprise for 12 instances in total across 3 lines of business and 4 environments are covered by this project. To save and recover the credentials in GitLab ci jobs, utilized Site Minder Secrets Manager.',
        '20+ file load jobs using CRON-based schedules for the frequencies of HOURLY, DAILY, WEEKLY, and MONTHLY from AWS S3 Buckets files from the vendors using Prefect 2.0.',
        'Features Developed: Auto Snowflake Table Load + Event Logging in Snowflake Table + Notifications sent to the Teams Channel + JIRA integration for missing files. Additionally, it offers automatic job deployment, which substantially lessens the manual task of spinning jobs.',
        'Played a crucial role in database password change across the 238 accounts in the bank as a part of US FED regulations.',
        'Proven experience with creating and maintaining technical documentation.',
        'Implemented IBM MQ Encryption protocol across the Derivative Margin Management platform services in the Bank.',
        'Designed and developed fully automated CI/CD workflow using GIT CI/CD, AWS, Ansible, Ansible Tower for newly developed reporting service etc.',
        'Contributed significantly in internal initiative of Database Migration Process in which we have developed python based containerized highly scalable distributed task processing framework which can support migrations for SQL Server, Oracle, MySQL, PostgreSQL, Red Shift to Snowflake. We have achieved 10 GB of Data migrated (Extracted and Loaded with DDL Schema Creation) in 15 Min.',
        'Technologies i Have worked on: Java, Spring Boot, Apache Camel, Angular, IBM MQ, Python, Streamlit, Flask, Oracle, Snow flake, Docker, Docker Swarm, Ansible, Ansible Tower, Git, GitLab etc.',
        'Standards i have worked on: ISO15022, ISO20022 MT and MX SWIFT Payments'
      ],
      technologies: ['Java', 'Spring Boot', 'Python', 'Oracle', 'Docker', 'AWS', 'GitLab', 'Ansible', 'Ansible Tower', 'IBM MQ', 'Apache Camel', 'JIRA', 'Snowflake', 'Prefect 2.0']
    },
    {
      company: 'Reserve Bank Information Technology Pvt. Ltd.',
      role: 'Full Stack Engineer',
      period: 'Jul 2020 - Dec 2020',
      location: 'Mumbai, India',
      description: 'A company setup By Indias Central Bank (Reserve Bank of India) for all its Software Development needs',
      achievements: [
        'Developed End to end Fintech Regulatory Sandbox Tech stack includes Angular, PrimeNg, SpringBoot, Oracle, Jasper Reports, Docker, AWS.',
        'Played a key role and individually contributed the development of Admin Dashboard, Jasper MIS Reports, User Recertification, Secure File upload and Handling, and Subscription based email processing module.',
        'Implemented a secure coding standard suggested by National CISO team. additionally, written a SOP to enhance security of java Spring Boot based applications.',
        'POC developed for SAP HANA workflows using Apache Kafka Connect and Angular using Change Detection Capture Design Pattern'
      ],
      technologies: ['Java', 'Spring Boot', 'Jasper Reports', 'Angular', 'Oracle', 'Docker', 'GitLab', 'JIRA']
    },
    {
      company: 'Neosoft Technologies India Limited (CMM 5)',
      role: 'Full Stack Engineer',
      period: 'Oct 2018 - Jul 2020',
      location: 'Mumbai, India',
      description: 'Client: Mahindra and Mahindra Ltd. (Automobile)',
      achievements: [
        'Designed, architected and wrote the frontend + backend + deployment of our Chat Application and Qlik Sense Chatbot framework using Angular 7 with reusable components.',
        'Executed technical direction of application architectures in assigned projects.',
        'Demonstrated experience in bringing critical applications from design to production and support.',
        'Researched and developed face detection and recognition based app for employee attendance using Angular, C# Dot Net Core, and Azure Cognitive Services.',
        'Developed a whats app bot for vendor stock and invoicing related queries.',
        'Modernized our legacy deployment workflow from on prem to containers'
      ],
      technologies: ['Node Js', 'Spring Boot', 'Angular', 'Rabbit MQ', 'Azure', 'BOT Service', 'Oracle', 'Docker', 'GitLab', 'JIRA']
    },
    {
      company: '63 Moons Technologies India Limited (CMM 5)',
      role: 'Software Engineer',
      period: 'Mar 2017 - Oct 2018',
      location: 'Mumbai, India',
      description: 'Indias No 1 Stock Exchange Trading Platform Provider.',
      achievements: [
        'Herewith I am working for a SMC Global Project.',
        'My main responsibility has been to develop reusable angular components',
        'I have used tech stack including Angular, C#, Web API, MSSQL, IIS.',
        'Analytics Module was developed in which I am actively playing an important role as I have developed a dashboards for Equity, Commodity, Futures and Options, Currency, and Fundamentals as a single unit. Each dashboard consist of more than 15 widgets.',
        'Actively involved in developing and architecting of Analytics Engine based on Redis Cache',
        'which generates live alert for 72 business rules.',
        'Developed overall Health Indicator for scrip which gives an overall scrip information with',
        'fundamentals in an animated graphical format using dendogram.'
      ],
      technologies: [
        'Spring Boot', 'Angular', 'Rabbit MQ', 'Redis', 'IIS', 'MSSQL', 'Docker', 'GitLab', 'JIRA'
      ]
    }

  ];
}