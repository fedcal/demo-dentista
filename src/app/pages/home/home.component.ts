import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <p class="hero-eyebrow">Studio Dentistico Mariani — Padova dal 1997</p>
        <h1>Il sorriso che meriti,<br />in mani esperte</h1>
        <p class="hero-tagline">
          Implantologia, estetica e ortodonzia invisibile nel centro di Padova.
          Prima visita gratuita con panoramica digitale.
        </p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota prima visita gratuita</a>
          <a routerLink="/servizi" class="btn btn-secondary">Scopri i servizi</a>
        </div>
        <div class="hero-trust">
          <span class="trust-badge">Prima visita gratuita</span>
          <span class="trust-badge">Garanzia impianti 10 anni</span>
          <span class="trust-badge">Invisalign Diamond Provider</span>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="demo-container">
        <ul class="stats-grid">
          <li class="stat-item">
            <span class="stat-number">28</span>
            <span class="stat-label">anni di esperienza</span>
          </li>
          <li class="stat-item">
            <span class="stat-number">4</span>
            <span class="stat-label">odontoiatri specialisti</span>
          </li>
          <li class="stat-item">
            <span class="stat-number">2.500+</span>
            <span class="stat-label">pazienti seguiti</span>
          </li>
          <li class="stat-item">
            <span class="stat-number">4.9 ★</span>
            <span class="stat-label">su Google Reviews</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere Studio Mariani</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">💉</span>
          <h3>Anestesia computerizzata</h3>
          <p>Sistema STA: iniezione a velocità controllata, praticamente indolore. Addio alla siringa tradizionale.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🦷</span>
          <h3>Garanzia impianti 10 anni</h3>
          <p>Impianti Straumann® e Nobel Biocare® con garanzia strutturale decennale e follow-up incluso.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">😁</span>
          <h3>Ortodonzia invisibile</h3>
          <p>Provider Invisalign Diamond (top 1% Italia). Allineatori trasparenti per adulti e adolescenti.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">😌</span>
          <h3>Sedazione disponibile</h3>
          <p>Sedazione cosciente con protossido d'azoto per pazienti ansiosi. Trattamento sereno e senza paura.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="featuredServizi$ | async as servizi">
      <div class="section-header">
        <h2>Servizi più richiesti</h2>
        <a routerLink="/servizi" class="link-more">Tutti i servizi →</a>
      </div>
      <ul class="servizi-grid">
        <li *ngFor="let s of servizi" class="servizio-card">
          <div class="servizio-card__head">
            <h3>{{ s.nome }}</h3>
            <span class="servizio-card__price">
              <ng-container *ngIf="s.prezzoMin === 0; else priceRange">Gratuita</ng-container>
              <ng-template #priceRange>
                <ng-container *ngIf="s.prezzoMin === s.prezzoMax; else range">
                  €{{ s.prezzoMin }}
                </ng-container>
                <ng-template #range>€{{ s.prezzoMin }}–{{ s.prezzoMax }}</ng-template>
              </ng-template>
            </span>
          </div>
          <p class="servizio-card__desc">{{ s.descrizione }}</p>
          <p class="servizio-card__meta">
            <span>{{ s.durataSeduta }}</span>
            <span>{{ s.frequenzaConsigliata }}</span>
          </p>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>La prima visita è gratuita</h2>
        <p>
          Esame clinico completo + ortopantomografia digitale + piano di trattamento personalizzato.
          Nessun impegno, nessuna spesa.
        </p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota ora</a>
          <a href="tel:+390498765432" class="btn btn-secondary">Chiama 049 876 5432</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #e0f7fa 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero-eyebrow {
        font-size: 0.9rem;
        color: var(--color-accent);
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin: 0 0 0.75rem;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
        line-height: 1.2;
      }
      .hero-tagline {
        font-size: 1.15rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
      }
      .hero-trust {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .trust-badge {
        font-size: 0.8rem;
        padding: 0.3rem 0.75rem;
        background: #e0f7fa;
        border: 1px solid var(--color-accent);
        border-radius: 9999px;
        color: var(--color-accent);
        font-weight: 600;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0672a3;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .stats {
        background: var(--color-accent);
        padding: 2.5rem 1rem;
      }
      .stats-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1.5rem;
        text-align: center;
      }
      .stat-number {
        display: block;
        font-size: 2.25rem;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.1;
      }
      .stat-label {
        display: block;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 0.25rem;
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        line-height: 1.5;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .servizi-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .servizio-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .servizio-card__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .servizio-card__head h3 {
        margin: 0;
        font-size: 1rem;
      }
      .servizio-card__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 0.95rem;
        flex-shrink: 0;
      }
      .servizio-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .servizio-card__meta {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin: 0;
        font-size: 0.78rem;
        color: var(--color-fg-muted);
      }
      .servizio-card__meta span::before {
        content: '· ';
      }
      .servizio-card__meta span:first-child::before {
        content: '';
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
        max-width: 560px;
        margin-left: auto;
        margin-right: auto;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredServizi$ = this.mockData.servizi$.pipe(
    map((catalogo) => catalogo.servizi.filter((s) => s.featured).slice(0, 3))
  );
}
