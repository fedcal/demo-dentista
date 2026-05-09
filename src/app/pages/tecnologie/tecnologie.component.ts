import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-tecnologie',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Tecnologie dello studio</h1>
        <p>8 strumentazioni di ultima generazione per diagnosi e cure più precise, sicure e confortevoli.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="dotazione$ | async as dotazione">
      <ul class="tech-grid">
        <li *ngFor="let t of dotazione.tecnologie" class="tech-card">
          <div class="tech-card__placeholder" [attr.aria-label]="t.nome">
            <span class="tech-card__emoji" aria-hidden="true">{{ t.emoji }}</span>
          </div>
          <div class="tech-card__body">
            <p class="tech-card__categoria">{{ t.categoria }}</p>
            <h2>{{ t.nome }}</h2>
            <p class="tech-card__desc">{{ t.descrizione }}</p>
            <ul class="tech-card__vantaggi">
              <li *ngFor="let v of t.vantaggi">{{ v }}</li>
            </ul>
          </div>
        </li>
      </ul>

      <p class="disclaimer">
        Per il sito reale di uno studio dentistico, le immagini placeholder vengono sostituite con
        fotografie professionali delle attrezzature e dell'ambiente clinico. Costo medio servizio
        fotografico healthcare Italia: €400–800. I marchi citati (Planmeca, 3Shape, Leica,
        Straumann) sono proprietà dei rispettivi titolari.
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
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .content {
        padding: 3rem 1rem;
      }
      .tech-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      .tech-card {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        background: #ffffff;
      }
      .tech-card__placeholder {
        aspect-ratio: 16 / 9;
        background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;
      }
      .tech-card__body {
        padding: 1.25rem;
      }
      .tech-card__categoria {
        font-size: 0.75rem;
        color: var(--color-accent);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0 0 0.4rem;
      }
      .tech-card h2 {
        margin: 0 0 0.75rem;
        font-size: 1.05rem;
      }
      .tech-card__desc {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        line-height: 1.6;
        margin: 0 0 1rem;
      }
      .tech-card__vantaggi {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .tech-card__vantaggi li {
        font-size: 0.82rem;
        color: var(--color-fg-default);
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
      .tech-card__vantaggi li::before {
        content: '✓';
        color: var(--color-success);
        font-weight: 700;
        flex-shrink: 0;
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem auto 0;
        max-width: 720px;
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-md);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TecnologieComponent {
  private readonly mockData = inject(MockDataService);

  readonly dotazione$ = this.mockData.dotazione$;
}
