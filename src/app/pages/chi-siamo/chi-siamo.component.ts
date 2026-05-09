import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Chi siamo</h1>
        <p>28 anni di eccellenza odontoiatrica nel cuore di Padova.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>Studio Dentistico Mariani, dal 1997</h2>
        <p>
          Il Dott. Paolo Mariani fonda lo studio nel 1997 dopo la specializzazione in implantologia
          presso l'Università di Bologna e il fellowship ITI. La filosofia è semplice: tecnologia
          avanzata al servizio della persona, con un'attenzione prioritaria al comfort del paziente
          e alla trasparenza del piano di trattamento.
        </p>
        <p>
          Oggi lo studio è un centro odontoiatrico associato di quattro specialisti con competenze
          complementari: implantologia ed estetica (Dott. Mariani), ortodonzia invisibile
          (Dott.ssa Bianchi), endodonzia con microscopio (Dott. Verdi) e igiene e prevenzione
          (Dott.ssa Conti). Oltre 2.500 pazienti seguiti con continuità.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Eccellenza clinica</h3>
            <p>Aggiornamento continuo, congressi internazionali, tecnologie di ultima generazione. Il team si forma ogni anno presso centri di eccellenza europei.</p>
          </li>
          <li>
            <h3>Comfort e serenità</h3>
            <p>Anestesia computerizzata, sedazione cosciente, approccio empatico. Nessun paziente deve sentire dolore o ansia durante le cure.</p>
          </li>
          <li>
            <h3>Trasparenza</h3>
            <p>Preventivo firmato prima di ogni trattamento, nessun costo nascosto, finanziamento rateale disponibile. Il paziente decide sempre consapevolmente.</p>
          </li>
          <li>
            <h3>Continuità di cura</h3>
            <p>Cartella clinica digitale, richiami personalizzati, follow-up post-trattamento. Una relazione a lungo termine, non una prestazione isolata.</p>
          </li>
        </ul>
      </section>

      <section class="team" *ngIf="team$ | async as teamData">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of teamData.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">
              {{ m.nome.split(' ').pop()?.charAt(0) ?? m.nome.charAt(0) }}
            </div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <p class="team-card__iscrizione">{{ m.iscrizione }}</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specializzazioni">{{ s }}</li>
            </ul>
            <ul class="team-card__formazione">
              <li *ngFor="let f of m.formazione">{{ f }}</li>
            </ul>
          </li>
        </ul>
      </section>
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
      .content {
        padding: 3rem 1rem;
      }
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .values {
        margin-bottom: 4rem;
      }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        border-left: 3px solid var(--color-accent);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
        font-size: 1rem;
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        line-height: 1.5;
      }
      .team h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 {
        margin: 0 0 0.25rem;
        font-size: 1.05rem;
      }
      .team-card__role {
        margin: 0 0 0.75rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.85rem;
        line-height: 1.4;
      }
      .team-card__bio {
        font-size: 0.88rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.5;
      }
      .team-card__exp {
        font-size: 0.85rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        color: var(--color-fg-default);
      }
      .team-card__iscrizione {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.75rem;
        font-style: italic;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0 0 0.75rem;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: #e0f7fa;
        color: var(--color-accent);
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .team-card__formazione {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
      }
      .team-card__formazione li {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
        padding: 0.2rem 0;
        border-bottom: 1px dashed var(--color-border);
        line-height: 1.4;
      }
      .team-card__formazione li:last-child {
        border-bottom: none;
      }
      .team-card__formazione li::before {
        content: '→ ';
        color: var(--color-accent);
        font-weight: 600;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
}
