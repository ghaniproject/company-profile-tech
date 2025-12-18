import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">Let's discuss how we can help your business</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>
              Our team is ready to help you with the best technology solutions. 
              Feel free to contact us.
            </p>

            <div class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Address</h3>
                <p>123 Technology Street<br />City, Country 12345</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2131 21.3522 21.4011C21.1472 21.589 20.9053 21.7316 20.639 21.8198C20.3728 21.908 20.0881 21.9398 19.807 21.9129C16.7921 21.586 13.8699 20.6863 11.18 19.2599C8.74078 17.9876 6.60317 16.2608 4.88 14.1799C3.15738 12.0992 1.89058 9.70591 1.15 7.13993C0.824163 4.19198 1.08493 1.19973 1.91 -1.66C1.93797 -1.94069 1.96997 -2.2249 2.05833 -2.49064C2.1467 -2.75638 2.28945 -2.99782 2.47756 -3.20249C2.66566 -3.40716 2.89469 -3.5704 3.14975 -3.68173C3.40481 -3.79306 3.68046 -3.84987 3.96 -3.85H6.96C7.72877 -3.85069 8.46607 -3.54449 9.00629 -3.00376C9.54652 -2.46303 9.85207 -1.72498 9.85 -0.95C9.85 0.58 10.07 2.2 10.5 3.76C10.64 4.24 10.54 4.76 10.23 5.17L8.09 8.16C9.51426 10.7739 11.4761 13.0538 13.84 14.84L16.83 12.7C17.24 12.39 17.76 12.29 18.24 12.43C19.8 12.86 21.42 13.08 23.05 13.08C23.825 13.0779 24.5631 13.3835 25.1038 13.9237C25.6445 14.464 25.9497 15.2013 25.95 15.97L22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+123 456 7890</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@techsolutions.com</p>
              </div>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  [(ngModel)]="formData.phone"
                />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  [(ngModel)]="formData.message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    :host {
      display: block;
      width: 100%;
      background: #0a0a0f;
    }

    .contact-hero {
      padding: 8rem 2rem 4rem;
      background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: white;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .page-subtitle {
      font-size: clamp(1rem, 2vw, 1.25rem);
      color: rgba(255, 255, 255, 0.8);
    }

    .contact-content {
      padding: 6rem 2rem;
      background: #0a0a0f;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
    }

    .contact-info h2 {
      font-size: 2rem;
      color: white;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .contact-info > p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.8;
      margin-bottom: 3rem;
    }

    .info-item {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .info-icon svg {
      width: 24px;
      height: 24px;
    }

    .info-item h3 {
      font-size: 1.2rem;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .info-item p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 3rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: background 0.3s ease, transform 0.3s ease;
    }

    .social-link:hover {
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      transform: translateY(-3px);
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: white;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #00d4ff;
    }

    .form-group textarea {
      resize: vertical;
    }

    .submit-button {
      width: 100%;
      padding: 1rem;
      background: white;
      color: black;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .submit-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    onSubmit() {
        console.log('Form submitted:', this.formData);
        alert('Thank you! Your message has been sent.');
        this.formData = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
    }
}

