import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">Tentang Kami</h1>
        <p class="page-subtitle">Mengubah visi menjadi kenyataan melalui teknologi cerdas</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Visi Kami</h2>
            <p>
              Menjadi pemimpin dalam revolusi industri 4.0 dengan mengintegrasikan 
              teknologi Artificial Intelligence dan Internet of Things untuk menciptakan 
              solusi yang transformatif bagi bisnis dan masyarakat.
            </p>
            <p>
              Kami percaya bahwa masa depan industri terletak pada kolaborasi antara 
              manusia dan mesin yang cerdas, menciptakan ekosistem yang lebih efisien, 
              berkelanjutan, dan inovatif.
            </p>
          </div>
          <div class="about-image">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
              alt="Technology Vision"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2 class="section-title">Nilai-Nilai Kami</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Inovasi</h3>
            <p>Terus berinovasi untuk memberikan solusi terdepan</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>Presisi</h3>
            <p>Akurasi dan ketelitian dalam setiap proyek</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Kolaborasi</h3>
            <p>Bekerja sama untuk mencapai hasil terbaik</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⭐</div>
            <h3>Keunggulan</h3>
            <p>Berkomitmen pada kualitas terbaik</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2 class="section-title">Tim Ahli Kami</h2>
        <div class="team-grid">
          <div class="team-member">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
              alt="Team Member"
              loading="lazy"
            />
            <h3>John Doe</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div class="team-member">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
              alt="Team Member"
              loading="lazy"
            />
            <h3>Jane Smith</h3>
            <p>AI Research Lead</p>
          </div>
          <div class="team-member">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" 
              alt="Team Member"
              loading="lazy"
            />
            <h3>Mike Johnson</h3>
            <p>IoT Solutions Architect</p>
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

    .about-hero {
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

    .about-content {
      padding: 6rem 2rem;
      background: #0a0a0f;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-text h2 {
      font-size: 2rem;
      color: white;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .about-text p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.8;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    .about-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
    }

    .values {
      padding: 6rem 2rem;
      background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%);
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      text-align: center;
      margin-bottom: 4rem;
      color: white;
      font-weight: 700;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-10px);
      border-color: #00d4ff;
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .value-card h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .value-card p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .team {
      padding: 6rem 2rem;
      background: #0a0a0f;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }

    .team-member {
      text-align: center;
    }

    .team-member img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1.5rem;
      border: 3px solid #00d4ff;
      transition: transform 0.3s ease;
    }

    .team-member:hover img {
      transform: scale(1.1);
    }

    .team-member h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .team-member p {
      color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent { }

