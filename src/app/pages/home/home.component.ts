import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <section class="hero">
      <div class="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80" 
          alt="AI Technology"
          loading="lazy"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Masa Depan Teknologi</span><br />
          <span>AI & IoT</span>
        </h1>
        <p class="hero-subtitle">
          Menghubungkan industri dengan teknologi cerdas untuk menciptakan solusi masa depan
        </p>
        <a routerLink="/services" class="cta-button">Jelajahi Layanan</a>
      </div>
    </section>

    <section class="features" id="services">
      <div class="container">
        <h2 class="section-title">Layanan Kami</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Artificial Intelligence</h3>
            <p>Solusi AI terdepan untuk otomatisasi dan pengambilan keputusan yang cerdas</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Internet of Things</h3>
            <p>Menghubungkan perangkat dengan jaringan untuk efisiensi maksimal</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Industrial Automation</h3>
            <p>Transformasi digital untuk industri yang lebih efisien dan produktif</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Proyek Selesai</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">200+</div>
            <div class="stat-label">Klien Puas</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Tahun Pengalaman</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Tim Ahli</div>
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

    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-background img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 50, 100, 0.7) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      padding: 2rem;
      max-width: 900px;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: white !important;
    }

    .hero-title span:not(.gradient-text) {
      color: white !important;
    }

    .gradient-text {
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: clamp(1rem, 2vw, 1.25rem);
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
      color: white !important;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4);
    }

    .features {
      padding: 6rem 2rem;
      background: #0a0a0f;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      text-align: center;
      margin-bottom: 4rem;
      color: white;
      font-weight: 700;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      border-color: #00d4ff;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .feature-icon svg {
      width: 40px;
      height: 40px;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .feature-card p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .stats {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      text-align: center;
    }

    .stat-item {
      padding: 2rem;
    }

    .stat-number {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.1rem;
    }
  `]
})
export class HomeComponent { }

