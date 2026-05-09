import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';
import type { CategoriaServizioId, ServizioOdontoiatrico } from '../../data/types';

interface CategoriaView {
  id: CategoriaServizioId;
  nome: string;
  servizi: ServizioOdontoiatrico[];
}

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NgClass],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Servizi odontoiatrici</h1>
        <p>8 aree specialistiche · preventivo trasparente · prima visita gratuita</p>
      </div>
    </section>

    <article class="demo-container" *ngIf="view$ | async as view">
      <div class="tabs" role="tablist" aria-label="Categorie servizi">
        <button
          *ngFor="let cat of view"
          role="tab"
          class="tab-btn"
          [class.is-active]="activeTab() === cat.id"
          [attr.aria-selected]="activeTab() === cat.id"
          (click)="setTab(cat.id)"
        >
          {{ cat.nome }}
        </button>
      </div>

      <ng-container *ngFor="let cat of view">
        <section
          *ngIf="activeTab() === cat.id"
          role="tabpanel"
          class="tab-panel"
          [id]="cat.id"
        >
          <ul class="servizi-list">
            <li *ngFor="let s of cat.servizi" class="servizio-item">
              <div class="servizio-item__head">
                <div class="servizio-item__title">
                  <h3>{{ s.nome }}</h3>
                  <span *ngIf="s.featured" class="badge badge--featured">Più richiesto</span>
                </div>
                <div class="servizio-item__price">
                  <ng-container *ngIf="s.prezzoMin === 0; else priceBlock">
                    <span class="price-free">GRATUITA</span>
                  </ng-container>
                  <ng-template #priceBlock>
                    <ng-container *ngIf="s.prezzoMin === s.prezzoMax; else priceRange">
                      <span class="price-value">€{{ s.prezzoMin }}</span>
                    </ng-container>
                    <ng-template #priceRange>
                      <span class="price-value">€{{ s.prezzoMin }} – €{{ s.prezzoMax }}</span>
                    </ng-template>
                  </ng-template>
                </div>
              </div>
              <p class="servizio-item__desc">{{ s.descrizione }}</p>
              <dl class="servizio-item__meta">
                <div>
                  <dt>Durata seduta</dt>
                  <dd>{{ s.durataSeduta }}</dd>
                </div>
                <div>
                  <dt>Frequenza</dt>
                  <dd>{{ s.frequenzaConsigliata }}</dd>
                </div>
              </dl>
            </li>
          </ul>
        </section>
      </ng-container>

      <p class="disclaimer">
        Prezzi indicativi IVA inclusa. Il preventivo definitivo viene concordato dopo la visita di valutazione.
        Per trattamenti &gt;€500 è disponibile finanziamento rateale a tasso zero fino a 12 mesi.
      </p>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .tabs {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        padding: 1.5rem 0 0;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border);
      }
      .tab-btn {
        background: none;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm) var(--radius-sm) 0 0;
        padding: 0.45rem 0.9rem;
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        cursor: pointer;
        margin-bottom: -1px;
        transition: all 0.15s ease;
      }
      .tab-btn:hover {
        color: var(--color-fg-default);
        background: var(--color-bg-subtle);
      }
      .tab-btn.is-active {
        background: #ffffff;
        color: var(--color-accent);
        font-weight: 600;
        border-color: var(--color-border);
        border-bottom-color: #ffffff;
      }
      .tab-panel {
        padding-bottom: 2rem;
      }
      .servizi-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 1.25rem;
      }
      .servizio-item {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .servizio-item__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .servizio-item__title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .servizio-item__title h3 {
        margin: 0;
        font-size: 1rem;
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .badge--featured {
        background: #e0f7fa;
        color: var(--color-accent);
      }
      .servizio-item__price {
        flex-shrink: 0;
      }
      .price-value {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 0.95rem;
      }
      .price-free {
        color: var(--color-success);
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
      }
      .servizio-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.88rem;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .servizio-item__meta {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        margin: 0;
        font-size: 0.8rem;
      }
      .servizio-item__meta div {
        display: flex;
        flex-direction: column;
      }
      .servizio-item__meta dt {
        color: var(--color-fg-muted);
        font-weight: 600;
      }
      .servizio-item__meta dd {
        margin: 0;
        color: var(--color-fg-default);
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem auto 2rem;
        max-width: 720px;
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-md);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiziComponent {
  private readonly mockData = inject(MockDataService);

  readonly activeTab = signal<CategoriaServizioId>('igiene');

  readonly view$ = this.mockData.servizi$.pipe(
    map((catalogo): CategoriaView[] =>
      catalogo.categorie
        .slice()
        .sort((a, b) => a.ordine - b.ordine)
        .map((cat) => ({
          id: cat.id,
          nome: cat.nome,
          servizi: catalogo.servizi.filter((s) => s.categoria === cat.id)
        }))
    )
  );

  setTab(id: CategoriaServizioId): void {
    this.activeTab.set(id);
  }
}
