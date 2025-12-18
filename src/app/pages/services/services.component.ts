import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="services-hero">
      <div class="container">
        <h1 class="page-title">Layanan Kami</h1>
        <p class="page-subtitle">Solusi teknologi terdepan untuk transformasi digital</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
                alt="AI Solutions"
                loading="lazy"
              />
            </div>
            <div class="service-content">
              <h2>Artificial Intelligence</h2>
              <p>
                Kami menyediakan solusi AI yang mencakup machine learning, deep learning, 
                computer vision, dan natural language processing untuk otomatisasi proses 
                bisnis yang kompleks.
              </p>
              <ul class="service-features">
                <li>Machine Learning Models</li>
                <li>Computer Vision Systems</li>
                <li>Natural Language Processing</li>
                <li>Predictive Analytics</li>
                <li>AI Consulting</li>
              </ul>
            </div>
          </div>

          <div class="service-card reverse">
            <div class="service-image">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                alt="IoT Solutions"
                loading="lazy"
              />
            </div>
            <div class="service-content">
              <h2>Internet of Things</h2>
              <p>
                Implementasi IoT untuk menghubungkan perangkat, sensor, dan sistem 
                dalam ekosistem terintegrasi yang memungkinkan pengumpulan data real-time 
                dan kontrol otomatis.
              </p>
              <ul class="service-features">
                <li>Sensor Networks</li>
                <li>Device Management</li>
                <li>Data Analytics</li>
                <li>Cloud Integration</li>
                <li>IoT Security</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="service-image">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Industrial Automation"
                loading="lazy"
              />
            </div>
            <div class="service-content">
              <h2>Industrial Automation</h2>
              <p>
                Transformasi proses industri dengan sistem otomasi yang terintegrasi, 
                meningkatkan efisiensi, produktivitas, dan mengurangi biaya operasional.
              </p>
              <ul class="service-features">
                <li>SCADA Systems</li>
                <li>PLC Programming</li>
                <li>MES Integration</li>
                <li>Quality Control Systems</li>
                <li>Maintenance Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2 class="section-title">Proses Kerja Kami</h2>
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">01</div>
            <h3>Konsultasi</h3>
            <p>Memahami kebutuhan dan tujuan bisnis Anda</p>
          </div>
          <div class="process-step">
            <div class="step-number">02</div>
            <h3>Perencanaan</h3>
            <p>Mendesain solusi yang sesuai dengan kebutuhan</p>
          </div>
          <div class="process-step">
            <div class="step-number">03</div>
            <h3>Implementasi</h3>
            <p>Mengembangkan dan menerapkan solusi</p>
          </div>
          <div class="process-step">
            <div class="step-number">04</div>
            <h3>Optimasi</h3>
            <p>Pemantauan dan peningkatan berkelanjutan</p>
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

    .services-hero {
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

    .services-content {
      padding: 6rem 2rem;
      background: #0a0a0f;
    }

    .services-grid {
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }

    .service-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .service-card.reverse {
      direction: rtl;
    }

    .service-card.reverse > * {
      direction: ltr;
    }

    .service-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
    }

    .service-content h2 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .service-content > p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .service-features {
      list-style: none;
      padding: 0;
    }

    .service-features li {
      color: rgba(255, 255, 255, 0.7);
      padding: 0.75rem 0;
      padding-left: 2rem;
      position: relative;
      font-size: 1rem;
    }

    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #00d4ff;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .process {
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

    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }

    .process-step {
      text-align: center;
      padding: 2rem;
    }

    .step-number {
      font-size: 4rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00d4ff 0%, #090979 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .process-step h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .process-step p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .service-card {
        grid-template-columns: 1fr;
      }

      .service-card.reverse {
        direction: ltr;
      }
    }
  `]
})
export class ServicesComponent { }

