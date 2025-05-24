import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form class="contact-form" [formGroup]="contactForm" (ngSubmit)="submitForm()">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" formControlName="name" class="form-control" [class.is-invalid]="isFieldInvalid('name')">
        <div class="error-message" *ngIf="isFieldInvalid('name')">
          <span *ngIf="contactForm.get('name')?.errors?.['required']">Name is required</span>
        </div>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email" class="form-control" [class.is-invalid]="isFieldInvalid('email')">
        <div class="error-message" *ngIf="isFieldInvalid('email')">
          <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
          <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
        </div>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" formControlName="subject" class="form-control" [class.is-invalid]="isFieldInvalid('subject')">
        <div class="error-message" *ngIf="isFieldInvalid('subject')">
          <span *ngIf="contactForm.get('subject')?.errors?.['required']">Subject is required</span>
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" formControlName="message" class="form-control" rows="5" [class.is-invalid]="isFieldInvalid('message')"></textarea>
        <div class="error-message" *ngIf="isFieldInvalid('message')">
          <span *ngIf="contactForm.get('message')?.errors?.['required']">Message is required</span>
        </div>
      </div>
      
      <button type="submit" class="btn btn-primary submit-btn" [disabled]="contactForm.invalid || submitting">
        <span *ngIf="!submitting">Send Message</span>
        <span *ngIf="submitting">Sending...</span>
      </button>
      
      <div class="form-feedback" *ngIf="formSubmitted">
        <p class="success-message" *ngIf="submitSuccess">Your message has been sent successfully!</p>
        <p class="error-message" *ngIf="!submitSuccess">There was an error sending your message. Please try again.</p>
      </div>
    </form>
  `,
  styles: [`
    .contact-form {
      background-color: var(--bg-light);
      padding: var(--spacing-3);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
    }
    
    .form-group {
      margin-bottom: var(--spacing-3);
    }
    
    label {
      display: block;
      margin-bottom: var(--spacing-1);
      font-weight: 500;
      color: var(--text-dark);
    }
    
    .form-control {
      width: 100%;
      padding: var(--spacing-2);
      border: 1px solid #ddd;
      border-radius: var(--border-radius-md);
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      transition: border-color var(--transition-fast);
    }
    
    .form-control:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    
    .is-invalid {
      border-color: var(--error-color);
    }
    
    textarea.form-control {
      min-height: 150px;
      resize: vertical;
    }
    
    .submit-btn {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      margin-top: var(--spacing-2);
    }
    
    .submit-btn:disabled {
      background-color: var(--text-muted);
      cursor: not-allowed;
    }
    
    .error-message {
      color: var(--error-color);
      font-size: 0.875rem;
      margin-top: 5px;
    }
    
    .form-feedback {
      margin-top: var(--spacing-3);
      text-align: center;
      padding: var(--spacing-2);
      border-radius: var(--border-radius-md);
    }
    
    .success-message {
      color: var(--success-color);
      font-weight: 500;
    }
    
    .error-message {
      color: var(--error-color);
      font-weight: 500;
    }
  `]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitting = false;
  formSubmitted = false;
  submitSuccess = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field !== null && field.invalid && (field.dirty || field.touched);
  }
  
  submitForm(): void {
    if (this.contactForm.valid) {
      this.submitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.submitting = false;
        this.formSubmitted = true;
        this.submitSuccess = true;
        this.contactForm.reset();
      }, 1500);
      
      // In a real application, you would use a service to submit the form data
      // For example:
      // this.contactService.sendMessage(this.contactForm.value).subscribe(
      //   response => {
      //     this.submitting = false;
      //     this.formSubmitted = true;
      //     this.submitSuccess = true;
      //     this.contactForm.reset();
      //   },
      //   error => {
      //     this.submitting = false;
      //     this.formSubmitted = true;
      //     this.submitSuccess = false;
      //   }
      // );
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}