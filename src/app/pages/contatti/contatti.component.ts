import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';
import type { MotivoVisita } from '../../data/types';

interface MotivoOption {
  value: MotivoVisita;
  label: string;
}

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Prenota la prima visita gratuita</h1>
        <p>Esame clinico + panoramica digitale + piano di trattamento. Senza impegno.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Dove siamo</h2>
          <address class="address-block">
            <strong>{{ info.nomeCommerciale }}</strong><br />
            {{ info.indirizzo.via }}<br />
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br />
            {{ info.indirizzo.regione }}
          </address>

          <h2>Contatti diretti</h2>
          <ul class="contact-list">
            <li>
              <strong>Telefono:</strong>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h2>Orari di apertura</h2>
          <ul class="hours-list">
            <li><span>Lunedì</span><span>{{ info.orari.lunedi }}</span></li>
            <li><span>Martedì</span><span>{{ info.orari.martedi }}</span></li>
            <li><span>Mercoledì</span><span>{{ info.orari.mercoledi }}</span></li>
            <li><span>Giovedì</span><span>{{ info.orari.giovedi }}</span></li>
            <li><span>Venerdì</span><span>{{ info.orari.venerdi }}</span></li>
            <li><span>Sabato</span><span>{{ info.orari.sabato }}</span></li>
            <li><span>Domenica</span><span>{{ info.orari.domenica }}</span></li>
          </ul>

          <div class="info-tags">
            <span *ngIf="info.struttura.accessibileDisabili" class="info-tag">Accessibile disabili</span>
            <span *ngIf="info.struttura.parcheggioConvenzionato" class="info-tag">Parcheggio convenzionato</span>
            <span *ngIf="info.struttura.primaVisitaGratuita" class="info-tag">Prima visita gratuita</span>
            <span *ngIf="info.struttura.sedazioneConscia" class="info-tag">Sedazione disponibile</span>
            <span *ngIf="info.struttura.finanziamentoRateale" class="info-tag">Rateizzazione disponibile</span>
            <span *ngIf="info.struttura.urgenze24h" class="info-tag">Urgenze gestite</span>
          </div>
        </section>

        <section class="form-block">
          <h2>Richiesta prima visita</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome *</label>
              <input id="nome" type="text" formControlName="nome" autocomplete="name" required />
            </div>
            <div class="row">
              <div class="field">
                <label for="email">Email *</label>
                <input id="email" type="email" formControlName="email" autocomplete="email" required />
              </div>
              <div class="field">
                <label for="telefono">Telefono *</label>
                <input id="telefono" type="tel" formControlName="telefono" autocomplete="tel" required />
              </div>
            </div>
            <div class="field">
              <label for="motivoVisita">Motivo della visita *</label>
              <select id="motivoVisita" formControlName="motivoVisita" required>
                <option value="">Seleziona...</option>
                <option *ngFor="let m of motivi" [value]="m.value">{{ m.label }}</option>
              </select>
            </div>
            <div class="row row--2">
              <div class="field field--checkbox">
                <input id="pauraDentista" type="checkbox" formControlName="pauraDentista" />
                <label for="pauraDentista">Ho paura del dentista (lo gestiamo con calma)</label>
              </div>
              <div class="field field--checkbox">
                <input id="urgenza" type="checkbox" formControlName="urgenza" />
                <label for="urgenza">Urgenza (dolore o trauma recente)</label>
              </div>
            </div>
            <div class="field">
              <label for="note">Note aggiuntive (facoltativo)</label>
              <textarea id="note" formControlName="note" rows="3"
                placeholder="Allergie, patologie croniche, trattamenti precedenti..."></textarea>
            </div>
            <div class="field field--checkbox field--gdpr">
              <input id="privacyGdpr" type="checkbox" formControlName="privacyGdpr" required />
              <label for="privacyGdpr">
                Ho letto e accetto l'<a href="#" target="_blank" rel="noopener">informativa privacy GDPR (Reg. EU 2016/679)</a>
                e acconsento al trattamento dei dati personali per finalità di gestione della richiesta di appuntamento.
                <strong>Campo obbligatorio.</strong>
              </label>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
              Invia richiesta di appuntamento
            </button>
            <p class="form-disclaimer">
              Demo non funzionale: nessuna richiesta è realmente inviata. Per prenotare, telefona al numero sopra.
              I dati inseriti non vengono salvati né trasmessi.
            </p>
          </form>

          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou__icon" aria-hidden="true">✅</span>
              <h3>Grazie, {{ form.value.nome }}!</h3>
              <p>
                La tua richiesta di prima visita è stata simulata con successo.
                In un sito reale riceveresti una conferma via email e un contatto telefonico entro 24h.
              </p>
              <p *ngIf="form.value.urgenza">
                <strong>Urgenza segnalata:</strong> verrai contattato in via prioritaria.
              </p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>
      </div>
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
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
      }
      .info-block h2 {
        margin: 1.5rem 0 0.75rem;
        font-size: 1.1rem;
      }
      .info-block h2:first-child {
        margin-top: 0;
      }
      .address-block {
        font-style: normal;
        color: var(--color-fg-muted);
        line-height: 1.6;
        font-size: 0.95rem;
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
      }
      .contact-list li {
        margin-bottom: 0.5rem;
        display: flex;
        gap: 0.4rem;
        align-items: baseline;
        flex-wrap: wrap;
      }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0 0 1.25rem;
        font-size: 0.88rem;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.35rem 0;
        border-bottom: 1px dashed var(--color-border);
      }
      .info-tags {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
      }
      .info-tag {
        font-size: 0.75rem;
        padding: 0.25rem 0.6rem;
        background: #e0f7fa;
        color: var(--color-accent);
        border-radius: 9999px;
        font-weight: 600;
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
      }
      .form-block h2 {
        margin: 0 0 1.5rem;
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }
      .field input,
      .field textarea,
      .field select {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field textarea:focus,
      .field select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .field--gdpr label {
        font-size: 0.8rem;
        line-height: 1.5;
      }
      .field--gdpr label a {
        color: var(--color-accent);
      }
      .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }
      .row--2 {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      @media (max-width: 480px) {
        .row {
          grid-template-columns: 1fr;
        }
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        width: 100%;
        text-align: center;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
        width: auto;
      }
      .form-disclaimer {
        font-size: 0.78rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.75rem;
        line-height: 1.5;
      }
      .thankyou {
        text-align: center;
        padding: 1rem 0;
      }
      .thankyou__icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .thankyou h3 {
        color: var(--color-success);
        margin-bottom: 0.75rem;
      }
      .thankyou p {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
        line-height: 1.5;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);
  private readonly fb = inject(FormBuilder);

  readonly info$ = this.mockData.info$;
  readonly submitted = signal(false);

  readonly motivi: MotivoOption[] = [
    { value: 'igiene', label: 'Igiene e prevenzione (pulizia denti)' },
    { value: 'dolore', label: 'Dolore o problema urgente' },
    { value: 'estetica', label: 'Estetica dentale (sbiancamento, faccette)' },
    { value: 'ortodonzia', label: 'Ortodonzia (apparecchio o allineatori)' },
    { value: 'impianti', label: 'Implantologia (dente mancante)' },
    { value: 'altro', label: 'Altro' }
  ];

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    motivoVisita: ['' as MotivoVisita | '', Validators.required],
    pauraDentista: [false],
    urgenza: [false],
    note: [''],
    privacyGdpr: [false, Validators.requiredTrue]
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ pauraDentista: false, urgenza: false, privacyGdpr: false });
    this.submitted.set(false);
  }
}
